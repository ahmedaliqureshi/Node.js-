// import the required packages
import chalk from "chalk";
import readlineSync from "readline-sync";

// print a welcome message
console.log(chalk.blue.bold("👋 Welcome to the Simple JS App!\n"));

// ask user details
const name = readlineSync.question(chalk.green("What is your name? "));
const age = readlineSync.questionInt(chalk.yellow("How old are you? "));
const likesCoding = readlineSync.keyInYN(chalk.cyan("Do you like coding? "));

// show a summary
console.log(chalk.magenta("\n--- Summary ---"));
console.log(chalk.white(`Name: ${chalk.bold(name)}`));
console.log(chalk.white(`Age: ${chalk.bold(age)}`));
console.log(
  chalk.white(
    `Likes Coding: ${likesCoding ? chalk.green("Yes 😄") : chalk.red("No 😢")}`
  )
);

// small goodbye message
console.log(chalk.blueBright("\nThanks for using this program, have a great day! 🚀"));


