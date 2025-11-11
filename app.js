// let readline = require('readline-sync');
import readline from "readline-sync";

let fullname = readline.question('what is you are name:');
console.log(`My name is ${fullname}`);
let age = readline.questionInt('what is you are age:');
console.log(`my age is ${age}`);
if(age>100){
    console.log(`you are ${age} is above eligible`);
}
else (age<100)
{
    console.log(`you are ${age} is eligible`);
}
//console.log(`my age is ${age}`);
let phoneno = readline.question('what is you are phone no:');
console.log(`my phone number is ${phoneno}`); 
let email = readline.questionEMail('type you are email:');
console.log(`my email is ${email}`);


