import { Fill, Stroke, Style, Text, Circle, RegularShape } from "ol/style";
import {featureKeys} from './variables' 

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

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
    radius: 4,
    fill: new Fill({
      color: '#33A1DE', // Light blue fill
    }),
    stroke: new Stroke({
      color: '#FFFFFF', // grey stroke
      width: 1,
    }),
  }),
});

// Style for Administrative Boundaries
const adminBoundaryStyle = new Style({
  
  //fill: new Fill({color: 'rgba(200, 200, 200, 1)'}),
  stroke: new Stroke({
    color: 'rgba(100, 100, 100, 1)', // Neutral stroke color
    width: 2, // Stroke width
  }),
});


// Style function for the polygon layer
function getPolygonStyle(feature) {
  //console.log(feature);
  // Extract attributes from the feature properties

  // Default style
  const defaultStyle = new Style({
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

const customColors = ['rgba(255, 99, 132)', 'rgba(54, 162, 235)', 'rgba(255, 206, 86)','blue','green'];


// Create a style function to display each variable differently.
const multiVarPointStyleFunction = (feature) => {
  //console.log('Load points with variables')

  const featureKeys = ['class', 'class_1', 'class_1_13', 'class_1_14', 'class_1_15', 'class_12'];
  // Customize this function based on your data structure.
  const variable1 = feature.get(featureKeys[2]);
  //console.log('LOad points with variables 1')
  const variable2 = feature.get(featureKeys[1]);
  console.log('Load points with variables 2')

  return new Style({
      image: new Circle({
          radius: 2,
          fill: new Fill({
              color: `red, green, 0, 0.8)`,
          }),
      }),
  });
};

// Create a glowing style
const glowingStyle = new Style({
  image: new Circle({
      radius: 2,
      fill: new Fill({
          color: 'rgba(68, 170, 68, 0.5)', // Adjust the glowing color
      }),
      stroke: new Stroke({
          color: '#45a049', // Adjust the glowing border color
          width: 1,
      }),
  }),
});


// Define styles for different ranks within each variable
const styleVariableA_Rank1 = new Style({
  image: new Circle({
    radius: 12,
    fill: new Fill({
      color: 'red'
    }),
    stroke: new Stroke({
      color: 'grey',
      width: 2
    })
  })
});

const styleVariableA_Rank2 = new Style({
  image: new Circle({
    radius: 9,
    fill: new Fill({
      color: 'orange'
    }),
    stroke: new Stroke({
      color: 'grey',
      width: 2
    })
  })
});
const styleVariableA_Rank3 = new Style({
  image: new Circle({
    radius: 6,
    fill: new Fill({
      color: 'green'
    }),
    stroke: new Stroke({
      color: 'grey',
      width: 2
    })
  })
});

const styleVariableA_Rank4 = new Style({
  image: new Circle({
    radius: 3,
    fill: new Fill({
      color: 'blue'
    }),
    stroke: new Stroke({
      color: 'grey',
      width: 2
    })
  })
});


// Add more styles for other ranks and variables as needed

// Create a style function to apply styles based on variables and ranks
const styleFunction = function(feature) {
  const variables = feature.get('class');
 
  // Apply styles based on variables and ranks
  
    if (variables === 'VeryHigh') {
      return styleVariableA_Rank1;
    } else if (variables ===  'High') {
      return styleVariableA_Rank2;
    }else  if (variables ==='moderate') {
      return styleVariableA_Rank3;
    } else if (variables === 'Low') {
      return styleVariableA_Rank4;
    }
   
   

  // Add more conditions for other variables

  // Return a default style if no conditions match
  return new Style({
    image: new Circle({
      radius: 8,
      fill: new Fill({
        color: 'gray'
      }),
      stroke: new Stroke({
        color: 'grey',
        width: 2
      })
    })
  });
};


  // Create a legend
  var legend = document.getElementById('legend');
  var legendFloodExp = document.createElement('h3');
    legendFloodExp.innerHTML='Flood Exposure'
    legend.appendChild(legendFloodExp);

  // Add legend items
  function addLegendItem(style, label, className) {
    var legendItem = document.createElement('div');
    legendItem.classList.add('legend-item');

    var legendCircle = document.createElement('div');
    legendCircle.classList.add('legend-circle');
    legendCircle.classList.add(className);
    legendCircle.style.backgroundColor = style.getImage().getFill().getColor();

    var legendLabel = document.createElement('div');
    
    legendLabel.classList.add('legend-label');
    
    legendLabel.textContent = label;

    

    legendItem.appendChild(legendCircle);
    legendItem.appendChild(legendLabel);
    legend.appendChild(legendItem);
  }

  // Add legend items based on your styles and ranks
  addLegendItem(styleVariableA_Rank1, 'Very High', 'legend-circle-very-high');
  addLegendItem(styleVariableA_Rank2, 'High', 'legend-circle-high');
  addLegendItem(styleVariableA_Rank3, 'Moderate', 'legend-circle-moderate');
  addLegendItem(styleVariableA_Rank4, 'Low', 'legend-circle-low');
  // Add the adminBoundaryStyle to legend

// Create a legend item
function createLegendItem(label, color) {
  // Create a legend item container
  var legendItem = document.createElement('div');
  legendItem.className = 'legend-item';

  // Create a polygon shape
  var polygon = document.createElement('div');
  polygon.className = 'legend-polygon';
  polygon.style.backgroundColor = color; // Set the color of the polygon

  // Create a label
  var labelElement = document.createElement('div');
  labelElement.className = 'legend-label';
  labelElement.textContent = label;

  // Append the polygon and label to the legend item container
  legendItem.appendChild(polygon);
  legendItem.appendChild(labelElement);

  // Append the legend item to the legend container
  legend.appendChild(legendItem);
}


// Assuming you want to create a legend item for the adminBoundaryStyle with a label "Admin Boundary"
  // Add a horizontal line separator
  var separator = document.createElement('hr');
  separator.className = 'legend-separator';
  legend.appendChild(separator);

var legendAdminBounday = document.createElement('h3');
legendAdminBounday.innerHTML='Upazila Boundary'
legend.appendChild(legendAdminBounday);
createLegendItem('Admin Boundary', 'rgba(200, 200, 200, 1)');

  export {powerLineStyle,substationStyle,adminBoundaryStyle,glowingStyle,getRandomColor,customColors,styleFunction,getPolygonStyle,multiVarPointStyleFunction}