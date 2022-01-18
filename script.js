////very easy /////
function min(x, y) {
  if (x < y) {
    return x;
  } else {
    return y;
  }
}
console.log(min(20, 40));

//////very easy /////

let student = [
  ["osiel", "tom", "alex"],
  ["Torres", "smith", " lopez"],
  ["20", "10", "6"],
];
console.log(
  `hello my name is ${student[0][1]} ${student[1][1]} and my age is ${student[2][1]}`
);
//////medium/////
const month = prompt("Enter a number 1-12 to get a month");

if (month == 1) {
  console.log("January");
} else if (month == 2) {
  console.log("February");
} else if (month == 3) {
  console.log("March");
} else if (month == 4) {
  console.log("April");
} else if (month == 5) {
  console.log("May");
} else if (month == 6) {
  console.log("June");
} else if (month == 7) {
  console.log("July");
} else if (month == 8) {
  console.log("August");
} else if (month == 9) {
  console.log("September");
} else if (month == 10) {
  console.log("October");
} else if (month == 11) {
  console.log("November");
} else if (month == 12) {
  console.log("December");
} else {
  console.log(" Try again!");
}

/////hard/////

const tomH = 9;
const tomM = 8;
const jerryH = 10;
const jerryM = 45;

const BMItom = tomH / tomM ** 2;
const BMIjerry = jerryH / (jerryH * tomH);
const markHiherBMI = tomM > jerryM;
console.log(BMItom, BMIjerry);
console.log(BMItom, BMIjerry, markHiherBMI);
