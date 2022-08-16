/* 3. Find biggest difference between neighboring numbers in the data stream */

/* first way*/

const numbers = [1, 3, 5, 6, 8, 10, 15, 20, -6, -8];

let diffArray = [];
let taskResult = -1

for (i = 0; i < numbers.length; i += 2) {
    let diffNumb = Math.abs(numbers[i + 1] - numbers[i]);
    if (diffNumb > taskResult) {
      diffArray.push(diffNumb);
    } 
}

const biggestDiffFirst = Math.max.apply(null, diffArray);
console.log(biggestDiffFirst);


/* second way*/


const biggestDiffSecond = numbers.reduce((maxNumb, number, i, numbers) => {
  let diffNumbSecond = Math.abs(numbers[i + 1] - number);
  if (diffNumbSecond > maxNumb) {
    return diffNumbSecond;
  } 
  return maxNumb;
}, -1);

console.log(biggestDiffSecond);



