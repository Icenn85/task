/* 1. Find median in the data stream */

const numbers = [1, 3, 5, 6]

/* first way*/

let totalFirst = 0;

for (let i = 0; i < numbers.length; i += 1) {
  totalFirst += numbers[i];
}

const medianFirst = totalFirst / numbers.length;

console.log(medianFirst);

/* second way*/

const totalSecond = numbers.reduce((previousValue, number) => {
  return (previousValue += number);
}, 0);

const medianSecond = totalSecond / numbers.length;

console.log(medianSecond);



