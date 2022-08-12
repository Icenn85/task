/* 3. Find first five O numbers in the data stream */

const numbers = [0, 3, 5, 0, 6, 0, 100, 15, 0, 0, 3, 7];

/* first way*/

let firstFiveZeroFirst = [];

for (let i = 0; i < numbers.length; i += 1) {
  if (numbers.indexOf(numbers[i])) {
        console.log();
      // firstFiveZeroFirst.push(numbers[i]);
    }
}

console.log(firstFiveZeroFirst);