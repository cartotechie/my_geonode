import {province,commune} from './variables'


const getProvinceName = (features)=> {
    // Initialize separate arrays for each property
    
    const provinceSet = new Set(); // Using a Set to store unique values
    
    
    // Loop through the features and extract the property values
    features.forEach(feature => {
      // Get the properties of the current feature
      const properties = feature.getProperties();
    
      // Extract the values and push them into the respective arrays
      
      provinceSet.add(properties[province]); // Add the value to the Set
      
    });
    
    // Convert the Set to an array to print the unique values
    const provinceArray = Array.from(provinceSet);
    
    // Log the resulting arrays
    return provinceArray
    
    }

    const getDistrictName = (features)=> {
      // Initialize separate arrays for each property
      
      const provinceSet = new Set(); // Using a Set to store unique values
      
      
      // Loop through the features and extract the property values
      features.forEach(feature => {
        // Get the properties of the current feature
        const properties = feature.getProperties();
      
        // Extract the values and push them into the respective arrays
        
        provinceSet.add(properties[commune]); // Add the value to the Set
        
      });
      
      // Convert the Set to an array to print the unique values
      const provinceArray = Array.from(provinceSet);
      
      // Log the resulting arrays
      return provinceArray
      
      }
  

    export {getProvinceName,getDistrictName}