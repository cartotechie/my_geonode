from django.db import models
from geonode.layers.models import Dataset
from geonode.layers.models import Attribute
from geonode.layers.models import Style
from geonode.maps.models import Map,MapLayer
# Create your models here.
class Layer(models.Model):
    """
    A collection is a set of resources linked to a GeoNode group
    """
    layer =models.ForeignKey(MapLayer,related_name='map_layers',on_delete=models.CASCADE,null=True)

    
    
