// 3. By pressing each button function should make check for reminder of current time in milliseconds and value 
// button 1 - 137
// button 2 - 221
// button 3 - 333
// button 4 - 777
// button 5 - 919
// if left over of operation equals to 0 show console.log 'Yes you are lucky'. otherwise 'No, you should never play lottery ;('

const btnFirst = document.getElementById("137");
const btnSec = document.getElementById("221");
const btnThird = document.getElementById("333");
const btnForth = document.getElementById("777");
const btnFif = document.getElementById("919");





btnFirst.addEventListener("click", () => onCompare("137"));
btnSec.addEventListener("click", () => onCompare("221"));
btnThird.addEventListener("click", () => onCompare("333"));
btnForth.addEventListener("click", () => onCompare("777"));
btnFif.addEventListener("click", () => onCompare("919"));


function onCompare(oper) {
    const date = new Date().getTime();
    console.log(date);
  switch (date % oper === 0) {
    case true:
      console.log("Yes you are lucky");
      break;
    default:
      console.log("No, you should never play lottery ;(");
  }
}


