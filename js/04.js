/* 4. Find all unique numbers in the data stream */

const numbers = [0, 3, 5, 0, 6, 0, 100, 15, 0, 0, 3, 7];

/* first way*/

let uniqueNumFirst = [];

for (let i = 0; i < numbers.length; i += 1) {

   if (!uniqueNumFirst.includes(numbers[i])) {
        uniqueNumFirst.push(numbers[i]);
   }
        console.log(uniqueNumFirst);
   
}

/* second way*/

let uniqueNumSecond = numbers.filter(
  (number, index, array) => array.indexOf(number) === index
);

console.log(uniqueNumSecond);