from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from .models import ClinicReport
from .serializers import ClinicReportSerializer, RegisterSerializer
from .ml.model_pipeline import predict_from_row
import csv
import io
from django.contrib.auth import authenticate
from rest_framework_simplejwt.tokens import RefreshToken

# -----------------------
# USER REGISTRATION
# -----------------------
@api_view(['POST'])
@permission_classes([AllowAny])  # <-- allow anyone to access this endpoint
def register_user(request):
    serializer = RegisterSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({"message": "User registered successfully!"})
    return Response(serializer.errors, status=400)

# -----------------------
# USER LOGIN
# -----------------------
@api_view(['POST', 'GET'])
@permission_classes([AllowAny])  # <--- allow anyone to access this endpoint
def login_user(request):
    if request.method == 'GET':
        return Response({
            "message": "This endpoint is for logging in. Please POST username and password."
        }, status=200)

    # POST request
    username = request.data.get("username")
    password = request.data.get("password")
    user = authenticate(username=username, password=password)
    if not user:
        return Response({"error": "Invalid credentials"}, status=400)
    
    refresh = RefreshToken.for_user(user)
    return Response({
        "refresh": str(refresh),
        "access": str(refresh.access_token),
        "user": {"id": user.id, "username": user.username, "email": user.email}
    })
# -----------------------
# UPLOAD CSV
# -----------------------
@api_view(['POST'])
def upload_csv(request):
    f = request.FILES.get('file')
    if not f:
        return Response({'error': 'No file'}, status=400)

    decoded = f.read().decode('utf-8')
    reader = csv.DictReader(io.StringIO(decoded))

    created = 0
    for row in reader:
        obj = ClinicReport(
            date=row.get('date'),
            clinic_id=row.get('clinic_id'),
            clinic_name=row.get('clinic_name'),
            region=row.get('region'),
            num_patients=int(row.get('num_patients') or 0),
            num_female=int(row.get('num_female') or 0),
            num_male=int(row.get('num_male') or 0),
            avg_age=float(row.get('avg_age') or 0),
            top_symptoms=row.get('top_symptoms') or '',
            stock_shortage=(row.get('stock_shortage', '').lower() in ['true', '1', 'yes']),
            notes=row.get('notes') or '',
        )
        obj.save()
        created += 1

    return Response({'imported': created})

# -----------------------
# PREDICT RISK
# -----------------------
@api_view(['POST'])
def predict_view(request):
    payload = request.data
    prob = predict_from_row(payload)
    return Response({'risk': prob})

# -----------------------
# SIMPLE CHAT BOT
# -----------------------
@api_view(['POST'])
def chat_view(request):
    message = request.data.get('message', '')

    # handle: "top risks"
    if 'top' in message.lower() and 'risk' in message.lower():
        top = ClinicReport.objects.order_by('-last_risk')[:5]
        ser = ClinicReportSerializer(top, many=True)
        return Response({'reply': 'Top risks', 'data': ser.data})

    # default echo response
    return Response({'reply': f'ECHO: {message}'})
