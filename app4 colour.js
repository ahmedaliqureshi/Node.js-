import readline from "readline-sync";
import chalk from 'chalk'; 

let fullname = chalk.blue(readline.question('🙎Enter name:'));
console.log(`My name is ${fullname}`);
let age = chalk.red(readline.questionInt('🍰Enter age:'));
console.log(`my age is ${age}`);
let choice = chalk.green(readline.question('do you like coding [y/n]: ')); 
if (choice=='yes'||choice=='y') 
    console.log(`yes`);
else {
console.log('No'); 
}
