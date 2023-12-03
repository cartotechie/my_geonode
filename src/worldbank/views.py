from django.shortcuts import render
from django.shortcuts import render, get_object_or_404
from django.contrib.auth.decorators import login_required
from geonode.upload.models import Upload
from django.http import HttpResponse
from osgeo import ogr
import json
import geopandas as gpd
from django.http import JsonResponse
from django.views import View
from django.urls import reverse
# Create your views here.


def mapView(request):
    # Your view's logic here
    return render(request, 'worldbank/map.html')

def geojsonapi(request):
    file_object=Upload.objects.all()
    #file_object=Upload.objects.get(pk=58)
    ext ='.shp'
    path=file_object.upload_dir+'/'
    filename=file_object.name 
    file_full_path= path+filename+ext
    shp_path = file_full_path
    print(shp_path)
    #Using geopandas
    gdf = gpd.read_file(file_full_path)
    json_data = json.loads(gdf.to_json())
    return JsonResponse(json_data, safe=False)