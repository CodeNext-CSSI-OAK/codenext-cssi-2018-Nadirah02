// Author: FirstName LastName
let readline = require("readline-sync");

console.log();
console.log("*****************************************************************");
console.log("                          HAUNTED HOUSE");
console.log("                 A game by Nadirah Pinney");
console.log("*****************************************************************");
console.log("You are standing in front of a spooky haunted house.");
console.log("You hear what sounds like screaming coming from inside the house.");
let enterHouse = readline.question("Will you enter the house? (yes or no) ");


if(enterHouse === "y" || enterHouse === "yes") {
  console.log("<><><><><><><><>><><><><><><><><><><><><>><><><><>");
  console.log(" You walk up to the door and knock 3 times");
  console.log("There is no answer so you open the door and its unlock...");
  console.log("you walk in and there is blood everywhere ");
  console.log(" you suddenly hear a loud thud from upstairs");
  console.log("<>><>><><><><><><>><><><<><><><><><><><><><><><<>><>");
  let location = readline.question("Will you go upstairs or run outside? ")
  if(location === "go upstairs") {
    console.log("<><><><><><><><><><><><><><><><><><><><><><><><><><>><><");
    console.log("You walk upstairs and you see a lady rocking back an forth in her chair looking a the window");
    console.log("You look around no one else is in here");
    console.log(" suddenly the door closes behind you. You go to try an open it but its lock");
    console.log("your now freaking out wishing you never came in here");
    console.log(" 'wHY arE YoU iN mY HoUSeEE' she asks");
    console.log(" your so terrfied you dont answer");
    console.log("she is facing you now. She looks like she's abut to attack you");
    console.log("<><><><><><><>>><><><><><><><>><><><><><><><><><><><><><><><><");
    let decision = readline.question(" Do you call for help or wait a few seconds ")
    if (decision === " call for help") {
      console.log("you start to scream for help but then she suddenly grabs your neck and chokes you  ");
      console.log(" you try to fight back but shes too strong and eventually you pass out");
    }else {
      
    }
  }else {
    console.log(" you run outside and try to call 911 but then suddenly someone comes behind you and stabs you");
    console.log(" its the worse pain you ever feel. You fall down and hold your stomach");
    console.log("you look up and a old women is hovering you laughing with your blood all over her face");
    console.log("tHaTs wHaT yOu gEt fOr dIstuRbinG mY pLaNs");
    console.log(" you think plans? what plans, you were just trying to be helpful");
    console.log(" guess you wont now cuz your slowly dying");
    console.log(" She continues to laugh while darkness starts to close in and you slowly painfully slip away from life");
  }
} else {
    console.log("Your boring thats the end of the game then :|");


}

  // your code here


console.log("Thanks for playing!");
