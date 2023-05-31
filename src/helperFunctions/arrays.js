Array.prototype.uniquesOnly = function() {
  // returns only unique values from all arrays
  // flat is joining all arrays no matter depth
  const uniqueValues = [...new Set(this.flat().map(JSON.stringify))].map(JSON.parse);
  return uniqueValues;
};

const ages = [26, 27, 26, 26, 28, 28, 29, 29, 30];
const ages1 = [26, 27, 26, 26, 28, 28, 29, 29, { age: 30 }, {age:{name: 13, lastName:{lastName: {name: 13}}}}];
const ages2 = [26, 27, 26, 26, 28, 28, 29, 29, { age: 30 }, { age: 30 }];

const newSetRes = [ages, ages1, ages2].uniquesOnly();

console.log(JSON.stringify(newSetRes));