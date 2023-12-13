import {featureKeys} from './variables'
 


const classesValues =(features)=>{

    //console.log(features)
    const propertySet = new Set()
    const propertiesSet = {}

features.forEach(feature =>{
    
    const properties = feature.getProperties();
    

    for(let i = 0; i<featureKeys.length;i++){
        const key = featureKeys[i]
        const value =properties[key]

        propertySet.add(value)
         
    if (!propertiesSet[key]) {
        // Using propertiesSet to store unique values for each property
        //propertiesSet[key] = new Set();
        // Using propertiesSet to store unique values for each property as nested array
        propertiesSet[key] = [];
      }
      if (!propertiesSet[key].includes(value)) {
        propertiesSet[key].push(value);
      }
    

    }
})

//console.log(propertiesSet)
//Save set as variables.js
return propertiesSet
    
} 

export {classesValues}