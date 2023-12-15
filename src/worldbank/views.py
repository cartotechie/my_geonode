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

@login_required
def mapView(request):
    # Your view's logic here
    return render(request, 'worldbank/map.html')


def geojsonapi(request):
    file_object = Upload.objects.first()  # Retrieve the first upload object (you can adjust this based on your requirements)
    
    if file_object is not None:
        ext = '.shp'
        path = file_object.upload_dir + '/'
        filename = file_object.name
        file_full_path = path + filename + ext
        shp_path = file_full_path
        print(shp_path)

        # Using geopandas to read the shapefile
        gdf = gpd.read_file(file_full_path)
        json_data = json.loads(gdf.to_json())

        return JsonResponse(json_data, safe=False)
    
    # If no upload object is found, return an empty JsonResponse or handle the appropriate response
    return JsonResponse({}, safe=False)




class GeoJSONAPIView(View):
    def get(self, request):
        file_objects = Upload.objects.all()
        json_responses = []

        for file_object in file_objects:
            ext = '.shp'
            path = file_object.upload_dir + '/'
            filename = file_object.name
            file_full_path = path + filename + ext
            shp_path = file_full_path
            print(shp_path)

            # Using geopandas to read the shapefile
            gdf = gpd.read_file(file_full_path)
            json_data = json.loads(gdf.to_json())

            # Generate the URL for the file detail
            file_detail_url = reverse('file-detail', kwargs={'pk': file_object.pk})

            # Include the URL and file name in the JSON response
            json_data['file_url'] = request.build_absolute_uri(file_detail_url)
            json_data['file_name'] = filename

            json_responses.append(json_data)

        return JsonResponse(json_responses, safe=False)
    
def upload_files(request):
    files = Upload.objects.all()
    context = {'files': files}
    return render(request, 'frontend/upload_files.html', context)
