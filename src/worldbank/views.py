from django.shortcuts import render

# Create your views here.


def mapView(request):
    # Your view's logic here
    return render(request, 'worldbank/map.html')
