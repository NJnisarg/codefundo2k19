from .models import AadharData
from rest_framework import serializers


class AadharDataSerializer(serializers.ModelSerializer):
	class Meta:
		model = AadharData
		fields = '__all__'
