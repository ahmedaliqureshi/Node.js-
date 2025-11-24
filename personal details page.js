import readline from "readline-sync";
let fullname = readline.question('🙎what is you are name:');
console.log(`My name is ${fullname}`);
let age = readline.questionInt('🍰what is you are age:');
console.log(`my age is ${age}`);
let choice = readline.question('do you like coding [y/n]: '); 
console.log(`${choice}`);
if (choice==='yes')
    console.log(`${choice}`);
else 
    console.log('No'); 
console.log(`summary 
    name: ${fullname},
    age: ${age},
    choice: ${choice}`);