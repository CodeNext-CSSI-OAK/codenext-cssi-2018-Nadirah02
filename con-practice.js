// let readline = require("readline-sync");
// let ourNum = 5;
// let userNum = Number(readline.question("Please guess a number from 1 to 10: "));
//
// if (userNum === ourNum) {
//   console.log("You guessed it! Lucky!");
// } else if (userNum > ourNum) {
//   console.log("Sorry, your guess is too low!");
// if(iserNum - ourNum >= -3 && userNum - ourNum <= 3) {
//   console.log("Your warm! Try again");
// } else {
//   console.log("Your cold! try again!");
// }else
//   console.log("You guessed to high :(");
//
// } else {
//   console.log("You guessed too low :( ");
// }

let readline = require("readline-sync");
let ourNum = 5;
let userNum = Number(readline.question("Please guess a number from 1 to 10: "));
if (userNum === ourNum) {
  console.log("You guessed it! Lucky!");
} else if (userNum > ourNum){
  console.log("Sorry, your guess is too low!");
  if (userNum - ourNum >= -3 && userNum - ourNum <= 3) {
    console.log("You're warm! Try again!");
  } else {
    console.log("You're cold! Try again!");
  }
} else {
  console.log("Sorry, your guess is too high!");
  if (userNum - ourNum >= -3 && userNum - ourNum <= 3) {
    console.log("You're warm! Try again!");
  } else {
    console.log("You're cold! Try again!");
  }
}
