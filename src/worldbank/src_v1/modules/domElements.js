
const countMunicipalities = (selectedMunicipalities,selectedProvince)=>{

    console.log(selectedProvince)
    document.getElementById('province-name').innerHTML = selectedProvince
    document.getElementById('total-municipalities').innerHTML = `Number of municipalies`
    document.getElementById('total-count').innerHTML = `${selectedMunicipalities.length}`
    
  }
  
  const generateSelectElementValues = (feature) => {
    console.log(feature.get('REGION'))
   
    document.getElementById('municipality-name').innerHTML = `${feature.get("COMMUNE")}`
    document.getElementById('exposure').innerHTML = `<span> Exposure-MULMP_exp:</span> <span class="figure exposure" >${feature.get("MULMP_exp")}</span>`
    document.getElementById('vulnerability').innerHTML = ` <span>Vulnerability-MULMP_vuln:</span>
    <span class="figure" >${feature.get("MULMP_vuln") }</span>`
    document.getElementById('risk').innerHTML = `<span>Risk-MULMP_risq:</span>
    <span class="figure" >${feature.get("MULMP_risq") }</span>`
  
  }
  
  
  const populateOptionElemets = (features, elementId)=>{
    console.log(features)
      const optionElement = document.createElement("option");
      const textoptionElement = document.createTextNode(features);
      optionElement.appendChild(textoptionElement);
      var selectedProvince = document.getElementById(elementId);
      selectedProvince.appendChild(optionElement);
      optionElement.setAttribute('value',features)
      
    
  
      
      }
      
  export {generateSelectElementValues,populateOptionElemets,countMunicipalities}