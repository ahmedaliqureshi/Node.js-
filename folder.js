// 1st we are going to improt async and fs 
import fs from 'fs/promises'; 
import readline from "readline-sync";
// 2nd we are going to declare a function which we can store 
async function makefolder(){
try {
 // 3rd we are going to use 
 let folder= readline.question('enter folder name');
 await fs.mkdir(folder);
} catch (error) {
    console.log(error);
}
}

makefolder();