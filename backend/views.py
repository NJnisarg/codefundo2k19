import json
from .models import Election, Constituency, AadharDetail, ElectionConstituency, Party, PartyCandidate
from .serializers import ElectionSerializer, ConstituencySerializer, AadharDetailSerializer, ElectionConstituencySerializer, PartySerializer, PartyCandidateSerializer
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from datetime import date

# Create your views here.
class AuthAPI(APIView):

	def get_object(self, mobile_num):
		try:
			return AadharDetail.objects.get(mobile_num=mobile_num)
		except AadharDetail.DoesNotExist:
			return None

	def post(self, request):
		user = self.get_object(request.data['mobile_num'])
		if user is None:
			return Response(status=status.HTTP_404_NOT_FOUND)

		serialized_user = json.dumps({'id': user.id})
		return Response(serialized_user, status=status.HTTP_200_OK)


class GetAadharAPI(APIView):

    def get_object(self, pk):
        try:
            return AadharDetail.objects.get(pk=pk)
        except AadharDetail.DoesNotExist:
            return None

    def get(self, request):
        user = self.get_object(request.query_params['id'])
        if user is None:
            return Response(status=status.HTTP_404_NOT_FOUND)

        serialized_user = AadharDetailSerializer(user)
        return Response(serialized_user.data, status=status.HTTP_200_OK)

    def post(self, request):
        user = self.get_object(request.data['id'])
        if user is None:
            return Response(status=status.HTTP_404_NOT_FOUND)

        serialized_user = AadharDetailSerializer(user)
        return Response(serialized_user.data, status=status.HTTP_200_OK)


class GetAllUpcomingElectionAPI(APIView):

    def get(self, request):
        all_upcoming_elections = Election.objects.filter(start_date__gte=date.today())

        serialized_all_upcoming_elections = ElectionSerializer(all_upcoming_elections, many=True)
        return Response(serialized_all_upcoming_elections.data, status=status.HTTP_200_OK)


class GetUpcomingElectionAPI(APIView):

    def get_object(self, pk):
        try:
            return Election.objects.get(pk=pk)
        except Election.DoesNotExist:
            return None

    def get(self, request):
        upcoming_election = self.get_object(request.query_params['id'])
        if upcoming_election is None:
            return Response(status=status.HTTP_404_NOT_FOUND)

        serialized_upcoming_election = ElectionSerializer(upcoming_election)
        return Response(serialized_upcoming_election.data, status=status.HTTP_200_OK)


class GetAllPastElectionAPI(APIView):

    def get(self, request):
        all_past_elections = Election.objects.filter(end_date__lte=date.today())

        serialized_all_past_elections = ElectionSerializer(all_past_elections, many=True)
        return Response(serialized_all_past_elections.data, status=status.HTTP_200_OK)


class GetPastElectionAPI(APIView):

    def get_object(self, pk):
        try:
            return Election.objects.get(pk=pk)
        except Election.DoesNotExist:
            return None

    def get(self, request):
        past_election = self.get_object(request.query_params['id'])
        if past_election is None:
            return Response(status=HTTP_404_NOT_FOUND)

        serialized_past_election = ElectionSerializer(past_election)
        return Response(serialized_past_election.data, status=status.HTTP_200_OK)


class GetAllCandidateByElectionAPI(APIView):

    def get(self, request):
        all_candidates = PartyCandidate.objects.filter(election_id = request.query_params['election_id'])
        aadhar_candidate = []
        for candidate in all_candidates:
            people = AadharDetail.objects.get(pk=candidate.aadhar_detail_id.id)
            aadhar_candidate.append(people)

        serialized_aadhar_candidate = AadharDetailSerializer(aadhar_candidate, many=True)
        return Response(serialized_aadhar_candidate.data, status=status.HTTP_200_OK)
