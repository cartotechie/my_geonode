function countFeatures(features, property, selectedValues) {
    const uniqueValues = new Set();

    features.forEach(feature => {
        const value = feature.get(property);
        selectedValues.push(value);
        uniqueValues.add(value);
    });

    return uniqueValues.size;
}

function createUniqueAttributes(features,property) {


    const uniqueAttributeSet = new Set()
    const uniqueFeatures = features.filter(feature=>{
      const attributeValue = feature.get(property)
      if (!uniqueAttributeSet.has(attributeValue)) {
        uniqueAttributeSet.add(attributeValue)
        return true
      } else {
        return false
      }
    })
    return uniqueFeatures
      
    }

export {countFeatures,createUniqueAttributes}