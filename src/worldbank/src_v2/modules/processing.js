function countFeatures(features, property, selectedValues) {
    const uniqueValues = new Set();

    features.forEach(feature => {
        const value = feature.get(property);
        selectedValues.push(value);
        uniqueValues.add(value);
    });

    return uniqueValues.size;
}


export {countFeatures}