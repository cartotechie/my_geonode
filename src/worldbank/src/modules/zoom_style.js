function getPolygonStyle(feature, resolution) {
    // Extract attributes from the feature properties
  
    // Default style
    var defaultStyle = new ol.style.Style({
      fill: new ol.style.Fill({
        color: 'rgba(204, 204, 204, 0.8)', // Default fill color
      }),
      stroke: new ol.style.Stroke({
        color: '#000000', // Default border color
        width: 1, // Default border width
      }),
    });
  
    // Get the current zoom level
    var zoom = map.getView().getZoom();
  
    // Style based on admin_level_1 at zoom level 8 or above
    if (feature.get('admin_level') === '0' && zoom >= 8) {
      return new ol.style.Style({
        fill: new ol.style.Fill({
          color: 'rgba(255, 0, 0, 0.8)', // Red
        }),
        stroke: new ol.style.Stroke({
          color: '#000000',
          width: 1,
        }),
      });
    }
  
    // Style based on admin_level_2 at zoom level 10 or above
    else if (feature.get('admin_level') === '1' && zoom >= 10) {
      return new ol.style.Style({
        fill: new ol.style.Fill({
          color: 'rgba(0, 255, 0, 0.8)', // Green
        }),
        stroke: new ol.style.Stroke({
          color: '#000000',
          width: 1,
        }),
      });
    }
  
    // Style based on admin_level_3 at zoom level 12 or above
    else if (feature.get('admin_level') === '2' && zoom >= 12) {
      return new ol.style.Style({
        fill: new ol.style.Fill({
          color: 'rgba(0, 0, 255, 0.8)', // Blue
        }),
        stroke: new ol.style.Stroke({
          color: '#000000',
          width: 1,
        }),
      });
    }
  
    // Return default style if no condition is met
    return defaultStyle;
  }
  