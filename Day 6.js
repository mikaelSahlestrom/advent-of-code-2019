const input = require("./Day 6 input");

// clean data
const data = input.testData.split("\n");

const start = data.filter((element) => element.includes('COM'))[0].slice(0,3)
console.log(start);

// while('alla planeter är inte räknade'){
//     const base = 
// }