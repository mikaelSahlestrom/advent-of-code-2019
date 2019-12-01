const data = [
    118474,
    89187,
    55404,
    99729,
    110519,
    105939,
    97881,
    134416,
    121399,
    85572,
    96223,
    121830,
    116952,
    51791,
    54990,
    87574,
    124293,
    110738,
    63018,
    58979,
    121364,
    126737,
    124272,
    129029,
    81031,
    87281,
    142930,
    136317,
    108278,
    67501,
    50264,
    136054,
    122299,
    84352,
    111745,
    65118,
    61906,
    58711,
    79420,
    72634,
    87682,
    143462,
    100637,
    83705,
    130900,
    93339,
    73279,
    138297,
    92996,
    139955,
    58905,
    140094,
    134137,
    137049,
    58000,
    115166,
    141420,
    76790,
    90670,
    110806,
    130804,
    70101,
    56430,
    117847,
    89100,
    80854,
    108783,
    121459,
    87944,
    105578,
    134521,
    136085,
    118503,
    73630,
    80192,
    59111,
    79084,
    85915,
    95139,
    148425,
    56153,
    117876,
    133583,
    143720,
    138704,
    141052,
    69262,
    76687,
    95278,
    99868,
    62316,
    56673,
    79013,
    51022,
    87035,
    145645,
    148465,
    92768,
    83509,
    108044
];

const testData = [1969, 100756];

// Fuel required to launch a given module is based on its mass. 
// Specifically, to find the fuel required for a module, take its mass, divide by three, round down, and subtract 2.

function computeFuel(data) {
    const fuel = data.reduce((a, b) => {
        const fuel = (Math.floor(b / 3) - 2)
        const total = a + fuel
        return total
    }, 0)
    return fuel
}

console.log('Requred amound of fuel for part 1 = ' + computeFuel(data))


// uppg 2
// For each module mass, calculate its fuel and add it to the total. 
// Then, treat the fuel amount you just calculated as the input mass and repeat the process, 
// continuing until a fuel requirement is zero or negative.

function computeTheRealFuel(data){
    const fuel = data.reduce((a, b) => {
        let fuelModule = 0;
        for (let i = Math.floor(b / 3) - 2; i >= 0; i = Math.floor(i / 3) - 2) {
            fuelModule = i + fuelModule
        }
        const total = a + fuelModule
        return total
    }, 0)
    return fuel
}

console.log('Requred amound of fuel for part 2 = ' + computeTheRealFuel(data))