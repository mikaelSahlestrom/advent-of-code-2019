const input = [245318,765747]; // 245318-765747.

let k=0; // count amount of password possibilities
let req1 = false; // Going from left to right, the digits never decrease; they only ever increase or stay the same (like 111123 or 135679).
let req2 = false; // Two adjacent digits are the same (like 22 in 122345).
for(i = input[0]; i < input[1]; i++){
    // create if statement where k only increase when password criteria is met
    if(neverDecrease(i) && TwoDigits(i)){
        k++
        // console.log(i, k)
    }
}

function TwoDigits(num){
    req2 = false;
    const digits = num.toString().split('').map(Number)
    digits.forEach((number,ind)=> {
        if((number === digits[ind+1]) && (digits[ind-1]!== digits[ind+1]) && (digits[ind+1] !== digits[ind+2])){
            // console.log('full number: ' + digits,digits[i-1], number , digits[i+1], digits[i+2])
            req2 = true;
        }
    } )
    return req2
}

function neverDecrease(num){
    req1=true;
    const digits = num.toString().split('').map(Number)
    digits.forEach((number,ind)=> {
        if(number > digits[ind+1]){
            // console.log('req1 not satisfied')
            req1 = false;
        }
    } )
    return req1
}

const testValue = 246788;
console.log('testValue is :' + testValue, 'Two digits: ' + TwoDigits(testValue), '; Never decrease: ' + neverDecrease(testValue))
console.log(k)

// 1092 to high! (due to typo.........)
// 699 to low! (due to checking reddit and answering excercise 2)
// 1079 correct! 