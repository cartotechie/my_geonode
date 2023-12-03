from django.conf.urls import url
from .views import mapView

urlpatterns = [
  url('dashboard/', mapView, name='dashboard'),
]

from django.conf.urls import url,include
from geonode.api.urls import router
from django.urls import path
from .views import GeoJSONAPIView
from .views import mapView ,geojsonapi

#router.register(r'mapView')

urlpatterns = [
   url('dashboard/', mapView, name='dashboard'),
   url('geojsonapi/',geojsonapi,name='geojsonapi'),
   path('geojsonapi_view/', GeoJSONAPIView.as_view(), name='geojsonapi'),
   
]