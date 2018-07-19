// Author: FirstName LastName
let readline = require("readline-sync");

// global variables
let firstName, lastName, momMaidenName, cityBorn, firstCrush, street, fantasyName;

/******************************************************************************
                                  getNewFirstName()

  This function returns the user's new first name. To do so, concatenate the
  first 3 letters of their real first name and the first 2 letters of their
  real last name.
*******************************************************************************/

function getNewFirstName() {
  return firstName.substring(0,3) + lastName.substring(0,2).toLowerCase();
}

/******************************************************************************
                                  getNewLastName()

  This function returns the user's new last name. To do so, concatenate the
  first 2 letters of their mom's maiden name and the first 3 letters of the
  city where they were born.
*******************************************************************************/

function getNewLastName() {
    return momMaidenName.substring(0,2) + cityBorn.substring(0,3).toLowerCase();
}

/******************************************************************************
                                  getTitle()

  This function returns the user's title. To do so, concatenate the last three
  letters of their real last name, reversed, and the person of their firstCrush.
*******************************************************************************/

function getTitle() {
  //return lastName.substring(0,3) + firstCrush.substring().toLowerCase();

  let last = lastName.charAt(lastName.length -1).toUpperCase();
  let secondToLast = lastName.charAt(lastName.length -2);
  let thirdTolast = lastName.charAt(lastName.length -3);
    return last + secondToLast + thirdTolast + firstCrush.toLowerCase();
}

/******************************************************************************
                                  getHonorific()

  This function returns the user's full honorific. To do so, concatenate their
  title, " of ", and the name of the street they live on.
*******************************************************************************/

function getHonorific() {
  return getTitle() + "of " + street.toLowerCase();
}

/******************************************************************************
                                     run()

  This function runs the program. At the very least it should ask the user
  to answer a series of questions, each setting one of the global variables
  to what the user typed in. It should then call the functions above to produce
  the user's fantasy name (set fantasyName to that), and display it for the user
  to see.
*******************************************************************************/

function run() {
  firstName = readline.question("What is your first name: ")
  lastName = readline.question("What is your last name: ")
  momMaidenName = readline.question("What is yout moms maiden name: ")
  cityBorn = readline.question("What city were you born in: ")
  firstCrush = readline.question("Who's your crush: ")
  street = readline.question("What street do you live on: ")
  console.log(getNewFirstName() + " " + getNewLastName() + ","  + getHonorific());
}

// Run the program!
run();
