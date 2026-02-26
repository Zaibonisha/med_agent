from django.db import models
import uuid

class ClinicReport(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    date = models.DateField()
    clinic_id = models.CharField(max_length=64)
    clinic_name = models.CharField(max_length=200)
    region = models.CharField(max_length=100, blank=True)
    num_patients = models.IntegerField(default=0)
    num_female = models.IntegerField(default=0)
    num_male = models.IntegerField(default=0)
    avg_age = models.FloatField(null=True)
    top_symptoms = models.TextField(blank=True)
    stock_shortage = models.BooleanField(default=False)
    notes = models.TextField(blank=True)
    last_risk = models.FloatField(null=True)  # Used in chat_view to order top risks

    def __str__(self):
        return f"{self.clinic_id} - {self.date}"
