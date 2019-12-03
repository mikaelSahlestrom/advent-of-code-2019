const input = require("./Day 3 input");

// raw data
const wire1 = input.wire1.split(",");
const wire2 = input.wire2.split(",");

// test data1, answer distance 159
const test1Wire1 = input.test1Wire1.split(",");
const test1Wire2 = input.test1Wire2.split(",");

// test data2, answer distance 135
const test2Wire1 = input.test2Wire1.split(",");
const test2Wire2 = input.test2Wire2.split(",");

// test data3, answer distance 3
const test3Wire1 = input.test3Wire1.split(",");
const test3Wire2 = input.test3Wire2.split(",");

function dataCleaner(wire) {
  const wireArray = [[0, 0]];
  for (i = 0; i < wire.length; i++) {
    if (wire[i].includes("R")) {
      const x = wireArray[i][0] + parseInt(wire[i].slice(1));
      const y = wireArray[i][1];
      wireArray.push([x, y]);
    } else if (wire[i].includes("L")) {
      const x = wireArray[i][0] - parseInt(wire[i].slice(1));
      const y = wireArray[i][1];
      wireArray.push([x, y]);
    } else if (wire[i].includes("U")) {
      const x = wireArray[i][0];
      const y = wireArray[i][1] + parseInt(wire[i].slice(1));
      wireArray.push([x, y]);
    } else if (wire[i].includes("D")) {
      const x = wireArray[i][0];
      const y = wireArray[i][1] - parseInt(wire[i].slice(1));
      wireArray.push([x, y]);
    }
  }
  return wireArray;
}

function intersection(wire1, wire2) {
  // return array with all intersections
  const intersectingArray = [];
  for (i = 1; i < wire1.length; i++) {
    for (j = 1; j < wire2.length; j++) {
      // check if x and y value is intersecting the other wire
    //   console.log(wire1[i - 1], wire1[i], wire2[j - 1], wire2[j]);
      if (
        wire1[i][0] <= Math.max(wire2[j - 1][0], wire2[j][0]) &&
        wire1[i][0] >= Math.min(wire2[j - 1][0], wire2[j][0]) &&
        wire2[j][1] <= Math.max(wire1[i - 1][1], wire1[i][1]) &&
        wire2[j][1] >= Math.min(wire1[i - 1][1], wire1[i][1])
      ) {
        // push intersecting point
        console.log(
          "intersecting point at: ",
          wire1[i - 1],
          wire1[i],
          wire2[j - 1],
          wire2[j]
        );
        intersectingArray.push([wire1[i][0], wire2[j][1]]);
      } else if (
        wire1[i][1] <= Math.max(wire2[j - 1][1], wire2[j][1]) &&
        wire1[i][1] >= Math.min(wire2[j - 1][1], wire2[j][1]) &&
        wire2[j][0] <= Math.max(wire1[i - 1][0], wire1[i][0]) &&
        wire2[j][0] >= Math.min(wire1[i - 1][0], wire1[i][0])
      ) {
        console.log(
          "intersecting point at: ",
          wire1[i - 1],
          wire1[i],
          wire2[j - 1],
          wire2[j]
        );
        intersectingArray.push([wire2[j][0],wire1[i][1]]);
      }
    }
  }
  return intersectingArray;
}

function manhattanDistance(array) {
  // return wich intersection is closest to the central port according to manhattan distance
  const distanceArray = [];
  console.log(array);
  for (i = 0; i < array.length; i++) {
    const distance = +(Math.abs(array[i][0]) + Math.abs(array[i][1]));
    if(distance > 0){
        distanceArray.push(distance);
    }
  }
  return console.log("shortest distance " + Math.min(...distanceArray));
}

const wireArray1 = dataCleaner(wire1);
const wireArray2 = dataCleaner(wire2);
// console.log(wireArray1, wireArray2)

const intersectingArray = intersection(wireArray1, wireArray2);
manhattanDistance(intersectingArray);
