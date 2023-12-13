import Chart from 'chart.js/auto';

const featureKeys = ['class', 'class_1', 'class_1_13', 'class_1_14', 'class_1_15', 'class_12'];
// Custom colors for each data point
const customColors = ['rgba(255, 99, 132)', 'rgba(54, 162, 235)', 'rgba(255, 206, 86)','blue','green'];
// Helper function to generate a random color
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function generateChartData(features) {
  const valueCounts = {};
  const featureKeys = ['class', 'class_1', 'class_1_13', 'class_1_14', 'class_1_15', 'class_12'];

  features.forEach(feature => {
    featureKeys.forEach(key => {
      const value = feature.get(key);
      valueCounts[key] = { ...(valueCounts[key] || {}), [value]: (valueCounts[key]?.[value] || 0) + 1 };
    });
  });

  return {
    class: createChartData('Flood exposure', 'class', valueCounts),
    class_1: createChartData('LULC', 'class_1', valueCounts),
    class_1_13: createChartData('Windspeed 100m', 'class_1_13', valueCounts),
    class_1_14: createChartData('Earthquake', 'class_1_14', valueCounts),
    class_1_15: createChartData('Landslide susceptibility', 'class_1_15', valueCounts),
    class_12: createChartData('Maintenance', 'class_12', valueCounts),
  };
}

function createChartData(label, key, valueCounts) {
  const labels = Object.keys(valueCounts[key]);
  const dataValues = Object.values(valueCounts[key]);
  // Normalize the values to be in the range of 0 to 8000
  //const normalizedValues = dataValues.map((val) => (val / Math.max(...dataValues)) * 8000);

  // Generate random colors for each data point
  const randomColors = labels.map(() => getRandomColor());
  // Use custom colors or default to a single color
  const colors = customColors || ['rgba(75, 192, 192, 0.2)'];

  return {
    labels: labels,
    datasets: [{
      //label: label,
      backgroundColor: colors,
      borderColor: 'black',
      borderWidth: 1,
      barThickness:30,
      data: dataValues,
    }],
   
  };
}

function createChart(chartId, chartType, data) {
  var ctx = document.getElementById(chartId).getContext('2d');
  return new Chart(ctx, {
    type: chartType,
    data: data,
    options:{
      scales:{
        y:{
          suggestedMin: 0,
          suggestedMax: 200,
        } 
      } 
    } 
  });
}

function clearCharts() {
  // Get all chart elements and destroy them
  ['graph_div_class', 
  'graph_div_class_1', 
  'graph_div_class_1_13',
   'graph_div_class_1_14', 'graph_div_class_1_15', 'graph_div_class_12','graph_dist_class', 'graph_dist_class_1', 'graph_dist_class_1_13', 'graph_dist_class_1_14', 'graph_dist_class_1_15', 'graph_dist_class_12','graph_upazila_class', 'graph_upazila_class_1', 'graph_upazila_class_1_13', 'graph_upazila_class_1_14', 'graph_upazila_class_1_15', 'graph_upazila_class_12'].forEach(chartId => {
    var existingChart = Chart.getChart(chartId);
    if (existingChart) {
      existingChart.destroy();
    }
  });
}

function clearDivCharts() {
  // Get all chart elements and destroy them
  ['graph_div_class', 
  'graph_div_class_1', 
  'graph_div_class_1_13',
  'graph_div_class_1_14',
   'graph_div_class_1_15',
    'graph_div_class_12'].forEach(chartId => {
    var existingChart = Chart.getChart(chartId);
    if (existingChart) {
      existingChart.destroy();
    }
  });
}


function clearDistCharts() {
  // Get all chart elements and destroy them
  ['graph_dist_class', 'graph_dist_class_1', 'graph_dist_class_1_13', 'graph_dist_class_1_14', 'graph_dist_class_1_15', 'graph_dist_class_12',].forEach(chartId => {
    var existingChart = Chart.getChart(chartId);
    if (existingChart) {
      existingChart.destroy();
    }
  });
}

function clearUpazilaCharts() {
  // Get all chart elements and destroy them
  ['graph_upazila_class', 'graph_upazila_class_1', 'graph_upazila_class_1_13', 'graph_upazila_class_1_14', 'graph_upazila_class_1_15', 'graph_upazila_class_12'].forEach(chartId => {
    var existingChart = Chart.getChart(chartId);
    if (existingChart) {
      existingChart.destroy();
    }
  })
};


export {generateChartData,createChartData,createChart,clearCharts,featureKeys,clearUpazilaCharts,clearDistCharts,clearDivCharts}