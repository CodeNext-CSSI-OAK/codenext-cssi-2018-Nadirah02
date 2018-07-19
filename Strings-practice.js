

/*function makeAbba(a,b) {
  return a + b + b + a;
  }

  console.log(makeAbba("hello",+ "bye")); */

   function comboString(a,b ) {
    if (a.length > b.lengh) {
      return b + a + b;
    }
    return a + b + a;
  }


function lastTwo(str) {

   let lastChar = str.charAt(str.length - 1);
   let secondLastChar = str.charAt(str.length - 2);
   let firstPart = str.substring(0, str.length - 2);
   return firstPart + lastChar + secondLastChar;

}



  console.log(comboString("bye","goodbye"));
