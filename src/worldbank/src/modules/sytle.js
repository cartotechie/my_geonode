import { Fill, Stroke, Style, Text, Circle, RegularShape } from "ol/style";

// Styles for Power Lines
const powerLineStyle = new Style({
  stroke: new Stroke({
    color: '#FF5733', // Orange color
    width: 2,
  }),
});

// Style for Substations (as points)
const substationStyle = new Style({
  image: new Circle({
    radius: 8,
    fill: new Fill({
      color: '#33A1DE', // Light blue fill
    }),
    stroke: new Stroke({
      color: '#FFFFFF', // White stroke
      width: 2,
    }),
  }),
});

// Style for Administrative Boundaries
const adminBoundaryStyle = new Style({
  stroke: new Stroke({
    color: '#4CAF50', // Green color
    width: 1,
  }),
//fill: new Fill({color: 'rgba(76, 175, 80, 0.1)', /*Green with reduced opacity*/}),
});


// Style function for the polygon layer
function getPolygonStyle(feature) {
  console.log(feature);
  // Extract attributes from the feature properties

  // Default style
  var defaultStyle = new Style({
    fill: new Fill({
      color: 'rgba(204, 204, 204, 0.8)', // Default fill color
    }),
    stroke: new Stroke({
      color: '#000000', // Default border color
      width: 1, // Default border width
    }),
  });

  // Style based on admin_leve_1
  if (feature.get('admin_leve') === '0') {
    return new Style({
      fill: new Fill({
        color: 'rgba(255, 0, 0, 0.8)', // Red
      }),
      stroke: new Stroke({
        color: '#000000',
        width: 1,
      }),
    });
  } else if (feature.get('admin_leve') === '2') {
    return new Style({
      fill: new Fill({
        color: 'rgba(0, 255, 0, 0.8)', // Green
      }),
      stroke: new Stroke({
        color: '#000000',
        width: 1,
      }),
    });
  } else if (feature.get('admin_leve') === '3') {
    return new Style({
      fill: new Fill({
        color: 'rgba(0, 0, 255, 0.8)', // Blue
      }),
      stroke: new Stroke({
        color: '#000000',
        width: 1,
      }),
    });
  }

  // Return default style if no condition is met
  return defaultStyle;
}



  export {powerLineStyle,substationStyle,adminBoundaryStyle,getPolygonStyle}