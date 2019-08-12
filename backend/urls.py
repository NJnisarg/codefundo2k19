from django.urls import path
from .views import AuthAPI
app_name = "backend"


urlpatterns = [
     path('auth/', AuthAPI.as_view()),
]