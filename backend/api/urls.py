from django.urls import path
from . import views

urlpatterns = [
    path('upload/', views.upload_csv),
    path('predict/', views.predict_view),
    path('chat/', views.chat_view),
    path('register/', views.register_user),
    path('login/', views.login_user),
]
