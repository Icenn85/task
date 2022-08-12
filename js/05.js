/* 3. Find biggest difference between neighboring numbers in the data stream */

/* first way*/

const numbers = [1, 3, 5, 6, 8, 10, 15];

let biggestNumb = numbers[1] - numbers[0];
let currDiff = biggestNumb;
let maxDiff = currDiff;


for (i = 0; i < numbers.length - 1; i += 1) {
    biggestNumb = numbers[i + 1] - numbers[i];

    if (currDiff > 0) {
      currDiff += biggestNumb;
    } else {
        currDiff = biggestNumb;
    }

    if (currDiff > maxDiff) {
        maxDiff = currDiff;
    }
}

console.log(maxDiff);