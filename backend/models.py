from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Election(models.Model):
    id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=100)
    start_date = models.DateField()
    end_date = models.DateField()

class Constituency(models.Model):
    id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=100)

class AadharDetail(models.Model):
    id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=100)
    mobile_num = models.CharField(max_length=20)
    aadhar_num = models.CharField(max_length=20)
    finger_print = models.TextField(max_length=255)
    age = models.IntegerField()
    gender = models.CharField(max_length=20)
    address = models.TextField(max_length=255)
    pincode = models.CharField(max_length=20)
    constituency_id = models.ForeignKey(Constituency, on_delete=models.CASCADE)

class ElectionConstituency(models.Model):
    id = models.IntegerField(primary_key=True)
    election_id = models.ForeignKey(Election, on_delete=models.CASCADE)
    constituency_id = models.ForeignKey(Constituency, on_delete=models.CASCADE)

class Party(models.Model):
    id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=100)

class PartyCandidate(models.Model):
    id = models.IntegerField(primary_key=True)
    party_id = models.ForeignKey(Party, on_delete=models.CASCADE)
    aadhar_detail_id = models.ForeignKey(AadharDetail, on_delete=models.CASCADE)
    election_id = models.ForeignKey(Election, on_delete=models.CASCADE)
    constituency_id = models.ForeignKey(Constituency, on_delete=models.CASCADE)
