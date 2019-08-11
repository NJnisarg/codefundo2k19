
from django.conf.urls import url
from backend import views
app_name = "backend"



urlpatterns = [
    #url(r'^$', views.front_page, name='front_page'),

     url(r'', views.index, name='home')
]    