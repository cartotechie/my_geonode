from django.conf.urls import url
from .views import mapView

urlpatterns = [
  url('dashboard/', mapView, name='dashboard'),
]
