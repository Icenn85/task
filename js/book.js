const obj = {
  1: "Monday",
  2: "Tuesday",
  3: "Wednesday",
  4: "Thursday",
  5: "Friday",
  6: "Saturday",
  7: "Sunday",
};

// console.log(obj);

const year = {
    1: "January",
    2: "Fabruary",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December",
}

// console.log(year);

const user = {
  name: "Ivan",
  surname: "Ivanov",
  patronymic: "Ivanivich",
}

// console.log(user['name'], user['surname'], user['patronymic']);

const date = {
  year: 2022,
  month: 09,
  day: 13,
};

// console.log(date.year, date.month, date.day);

let obj1 = { x: 1, y: 2, z: 3 };
let keys = Object.keys(obj1);

let key = "y";

// console.log(keys);
// console.log(keys.length);
// console.log(obj1[key]);


// let obj2 = { x: 1, y: 2, z: 3 };
// console.log(obj2['x']);

let obj3 = { x: 1, y: 2, z: 3 };
let keys3 = Object.keys(obj3);

// console.log(keys3.length);

// let arr = ["a", "b", "c"];
// console.log(arr.length);

// let arr = [1, 2, 3];
// console.log(arr[arr.length - 1]);

// let arr = [];

// arr[0] = "a";
// arr[1] = "b";
// arr[2] = "c";

// console.log(arr);

let arr = [];

arr[3] = "a";
arr[8] = "b";

// console.log(arr.length);

function multiply(a) {
  return function (b) {
    return function (c) {
      return a * b * c;
    };
  };
}
let mc1 = multiply(1);
let mc2 = mc1(2);
let res = mc2(3);
console.log(res);

let res2 = multiply(1)(2)(3);
console.log(res2);