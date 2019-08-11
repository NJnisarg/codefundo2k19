from django.urls import path
from .views import AuthAPI, AadharDataAPI
app_name = "backend"


urlpatterns = [
     path('backend/auth/', AuthAPI.as_view()),
     path('backend/aadharData/', AadharDataAPI.as_view()),
]    