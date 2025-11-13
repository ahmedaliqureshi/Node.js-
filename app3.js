import readline from "readline-sync";
let fullname = readline.question('🙎Enter name:');
console.log(`My name is ${fullname}`);
let age = readline.questionInt('🍰Enter age:');
console.log(`my age is ${age}`);
let choice = readline.question('do you like coding [y/n]: '); 
console.log(`${choice}`);
if (choice==='yes')
    console.log(`${choice}`);
else {
console.log('No'); 
}
let cityname = readline.question('🏙️enter the city name:');
console.log(`${cityname}`);
let profession= readline.question('🏠enter profession:'); 
console.log(`${profession}`);
let yearexp = readline.questionInt('enter the number:');
console.log(`${yearexp}`);
let food = readline.question('🍇favorite food:');
console.log(`${food}`);
let colour = readline.questionEMail('enter email:');
console.log(`${colour}`);
let gender = readline.question('enter gender(M/F/O):');
if (gender=='Male'||gender=='M'||gender=='male'||gender=='Female'||gender== 'female')
console.log(`${gender}`);
else
console.log('other gender');




