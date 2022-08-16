/* 3. Find first five O numbers in the data stream */

const numbers = [0, 3, 5, 0, 6, 0, 100, 15, 0, 0, 3, 7, 0, 0];

/* first way*/

let firstFiveZeroFirst = [];

for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] === 0) {
    firstFiveZeroFirst.push(i);
  }
  if (firstFiveZeroFirst.length === 5) {
    break;
  }
}

console.log(firstFiveZeroFirst);

/* second way*/

allZeroSecond = numbers.reduce((acc, number, index) => {
  if (number === 0) {
    acc.push(index);
  }
  return acc;
}, []);

const firstFiveZeroSecond = allZeroSecond.slice(0, 5)
console.log(firstFiveZeroSecond);