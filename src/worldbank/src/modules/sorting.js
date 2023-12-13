const sortItemsInArray = (a,b) => {
    const sortOrder = ['VeryLow','Low', 'moderate', 'High', 'Very High','VeryHigh'];
const indexA = sortOrder.indexOf(a)
const indexB = sortOrder.indexOf(b)

if (indexA === -1){
    return 1 // Move items not in sortOrder to the end
}
if (indexB === -1) {
    return -1; // Move items not in sortOrder to the end
  }

  return indexA - indexB;

}
function sortKeysInObject(objectToSort){
const customOrder = ['VeryLow', 'Low', 'moderate', 'High', 'VeryHigh','Very High',];
// Sort the keys based on the custom order
const sortedKeys = Object.keys(objectToSort).sort((a, b) => {
    const indexA = customOrder.indexOf(a);
    const indexB = customOrder.indexOf(b);
  
    // If a is not found in customOrder, place it at the end
    if (indexA === -1) return 1;
  
    // If b is not found in customOrder, place it at the end
    if (indexB === -1) return -1;
  
    return indexA - indexB;
  });


  // Create a new object with sorted keys
const sortedObject = {};
sortedKeys.forEach(key => {
  sortedObject[key] = objectToSort[key];
});

console.log(sortedObject);
return sortedObject

}

export {sortKeysInObject,sortItemsInArray}