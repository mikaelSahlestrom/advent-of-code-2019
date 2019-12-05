const input = require("./Day 5 input");

function program1202(data) {
    for (i = 0; i <= data.length; ) {
      if(data[0]===19690720){
          return console.log('we produce error code ' + data[0] + ' with noun ' + data[1] + ' and verb ' + data[2] )
      }
      switch (data[i]) {
        case 1:
          data[data[i + 3]] = data[data[i + 1]] + data[data[i + 2]];
          i = i + 4
          break;
        case 2:
          data[data[i + 3]] = data[data[i + 1]] * data[data[i + 2]];
          i = i + 4
          break;
        case 99:
          // console.log("close program program due to code " + data[i]);
          return data;
      }
    }
    return data;
  }

  console.log(program1202(input.testData[0]))