const tableAttributes = ['div_name', 'dist_name', 'name_en'];

const generateTable = (features) => {
    //console.log('TABLE LOADED');
    //console.log(features);

    var table = document.createElement('table');

    // Create header row
    var headerRow = table.insertRow();
    tableAttributes.forEach(function (key) {
        var th = document.createElement('th');
        th.textContent = key;
        headerRow.appendChild(th);
    });

    // Create rows with data
    features.forEach(function (feature) {
        var row = table.insertRow();
        tableAttributes.forEach(function (key) {
            var td = document.createElement('td');
            //console.log(td)
            td.textContent = feature.get(key); // Get the value using the specified key
            row.appendChild(td);
        });
    });

    // Append the table to the div with id "table"
    const tableContainer = document.getElementById("table");
    tableContainer.appendChild(table);
};



function clearTable() {
    const tableContainer = document.getElementById('table');
    if (tableContainer) {
      tableContainer.innerHTML = ''; // Clear the content
      // Alternatively, you can remove the entire table element
      // tableContainer.parentNode.removeChild(tableContainer);
    }
  }

export {generateTable,clearTable};
