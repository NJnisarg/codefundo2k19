from django.contrib import admin
from django.urls import path
from .views import *
app_name = "backend"


urlpatterns = [
    path('admin/', admin.site.urls),
    path('auth/', AuthAPI.as_view()),
    path('getAadharDetails/', GetAadharAPI.as_view()),
    path('getAllUpcomingElections/', GetAllUpcomingElectionAPI.as_view()),
    path('getUpcomingElection/', GetUpcomingElectionAPI.as_view()),
    path('getAllPastElections/', GetAllPastElectionAPI.as_view()),
    path('getPastElection/', GetPastElectionAPI.as_view()),
]