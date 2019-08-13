import json
from .models import Election, Constituency, AadharDetail, ElectionConstituency, Party, PartyCandidate
from .serializers import ElectionSerializer, ConstituencySerializer, AadharDetailSerializer, ElectionConstituencySerializer, PartySerializer, PartyCandidateSerializer
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

# Create your views here.
class AuthAPI(APIView):

	def get_object(self, mobile_num):
		try:
			return AadharDetail.objects.get(mobile_num=mobile_num)
		except AadharData.DoesNotExist:
			return None

	def post(self, request):

		user = self.get_object(request.data['mobile_num'])
		if user is None:
			return Response(status=status.HTTP_404_NOT_FOUND)

		serialized_user = json.dumps({'id': user.id})
		return Response(serialized_user, status=status.HTTP_200_OK)


""" class AadharDataAPI(APIView):

	def get_object(self, pk):
		try:
			return AadharData.objects.get(pk=pk)
		except AadharData.DoesNotExist:
			return None

	def get(self, request):

		user = self.get_object(request.query_params['id'])
		if user is None:
			return Response(status=status.HTTP_404_NOT_FOUND)

		serialized_user = AadharDataSerializer(user)
		return Response(serialized_user, status=status.HTTP_200_OK) """
