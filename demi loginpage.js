import readline from "readline-sync";
import chalk from 'chalk';
import { use } from "react";

// 1st we are going to clear the termianl which will give us that 
// clean look during the ouput \

console.clear();

//2nd we are going to create an sepration line betweeen the message 
// to make it more eye catching

console.log('======================================================= \n');
console.log('welcome to instagram page of CFI'); 
console.log('=======================================================\n');

//3rd we are going to ask the user to enter there info 
// we are asking them about the user name and password 

const username = readlineSync.question("enter youre user name:\n"); 
const password = readlineSync.question('enter youre password:\n');

//4th we are checking the credits 

if (username=="ahmed"&&password=="2234")
{
    console.log('login sucessful');
    consoel.log(`welcome back ${username}`);
}
else 
{
    console.log('login failed');
    console.log('invlaid username or password')
}
console.log('thank you for using instagram ');
