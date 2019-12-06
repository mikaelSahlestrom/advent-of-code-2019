const input = require("./Day 5 input");

function program1202(data, input, debug) {
  let output, a, b, c;
  for (i = 0; i <= data.length; ) {
    // read instruction part and add 0 to create a 5 digit number ABCDE
    debug ? console.log("data: " + data, "iteration: " + i) : null;
    let instruction = data[i].toString();
    while (instruction.length < 5) {
      instruction = "0".concat(instruction);
    }
    let opcode = +instruction.slice(-2);
    let C = +instruction[0];
    let B = +instruction[1];
    let A = +instruction[2];

    // Create correct parameter mode
    A === 1 ? (a = data[i + 1]) : (a = data[data[i + 1]]);
    B === 1 ? (b = data[i + 2]) : (b = data[data[i + 2]]);
    C === 1 ? (c = data[i + 3]) : (c = data[data[i + 3]]);
    debug ? console.log("instruction code: " + instruction) : null;
    switch (opcode) {
      case 01:
        debug ? console.log("case 1!", "a = " + a, "b= " + b) : null;
        data[data[i + 3]] = a + b;
        i = i + 4;
        break;
      case 02:
        debug ? console.log("case 2!") : null;
        data[data[i + 3]] = a * b;
        i = i + 4;
        break;
      case 03:
        debug ? console.log("case 3!") : null;
        data[data[i + 1]] = input;
        i = i + 2;
        break;
      case 04:
        debug ? console.log("case 4!") : null;
        output = a;
        i = i + 2;
        break;
      case 05:
        debug ? console.log("case 5: jump-if-true") : null;
        if (a === 0) {
          i = i + 3; // check if 2 steps is correct
        } else {
          i = b; // sets the instruction pointer to the value from the second parameter
        }
        break;
      case 06:
        debug ? console.log("case 6: Jump-if-false") : null;
        if (a === 0) {
          i = b; // sets the instruction pointer to the value from the second parameter
        } else {
          i = i + 3; // check if 2 steps is correct
        }
        break;
      case 07:
        debug ? console.log("case 7: less than") : null;
        if (a < b) {
          data[data[i + 3]] = 1; // sets the instruction pointer to the value from the second parameter
        } else {
          data[data[i + 3]] = 0; // check if 2 steps is correct
        }
        i = i + 4;
        break;
      case 08:
        debug ? console.log("case 8: equal to") : null;
        if (a === b) {
          data[data[i + 3]] = 1; // sets the instruction pointer to the value from the second parameter
        } else {
          data[data[i + 3]] = 0; // check if 2 steps is correct
        }
        i = i + 4;
        break;
      case 99:
        console.log("close program program due to code " + data[i]);
        return { data, output };
      default:
        console.log("We got no case here with freaking " + instruction + "!");
        return { data, output };
    }
  }
  return { data, output };
}

console.log(program1202(input.data, 5, false));
