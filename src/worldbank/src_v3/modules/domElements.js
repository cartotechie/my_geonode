 
  const populateOptionElemets = (features, elementId)=>{
    
    //console.log(features)
      const optionElement = document.createElement("option");
      const textoptionElement = document.createTextNode(features);
      optionElement.appendChild(textoptionElement);
      const selectedProvince = document.getElementById(elementId);
      selectedProvince.appendChild(optionElement);
      optionElement.setAttribute('value',features)   
      }

      const getOptionDOMValues = (divisions, districts) => {
   
        // Loop through divisions and populate option elements
        divisions.forEach((division) => {
         populateOptionElemets(division, "division");
        });
      
        // Loop through districts and populate option elements
        districts.forEach((district) => {
          populateOptionElemets(district, "district");
        });
        
      };
      
      
  export {getOptionDOMValues}