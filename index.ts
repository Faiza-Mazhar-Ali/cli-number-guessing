import inquirer from "inquirer";

// 1) Computer will generate a random number -

// 2) User input for number-guessing game -

// 3) Compair the user input with computer generated number and show the result -


const randomNumber = Math.floor(Math.random() * 6 + 1 );

const answers = await inquirer.prompt([
  {
    name: "userGuessedNumber",
    type: "number",
    message: "Please inter any number from 1 to 6!",
  },
]);

//if else condition

if (answers.userGuessedNumber === randomNumber) {
  console.log("Congractulations! You have guessed the right number.");
} else {
  console.log("Sorry! You have guessed the wrong number.");
}
