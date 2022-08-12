/* 2. Count all negative numbers in the data stream */

const numbers = [1, 3, -5, -15, 2, -8]

/* first way*/

let negValueFirst = [];

for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] < 0) {
        negValueFirst.push(numbers[i]);
    }      
}

const countNegFirst = negValueFirst.length;

console.log(countNegFirst);

/* second way*/

const negValueSecond = numbers.filter((number) => number < 0);

const countNegSecond = negValueSecond.length;

console.log(countNegSecond);