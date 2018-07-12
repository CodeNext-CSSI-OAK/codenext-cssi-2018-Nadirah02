// Author: Nadirah Pinney
let readline = require('readline-sync');

console.log('bLeOp bLeEp! HeLlO im A cHanGe!');
let cents =   Number(readline.question('Please enter cents as a postive integer: ' ));
console.log(cents + ' cents makes: ');
let quarters = Math.floor(cents/25);
console.log(quarters + ' quarters');
cents = cents - quarters * 25
let dimes = Math.floor(cents/10);
console.log(dimes + ' dimes');
cents = cents %10;
