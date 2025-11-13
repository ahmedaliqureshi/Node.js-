// 1st import the fs form fs promises 
import fs from 'fs/promises'; 
// 2nd we are going to declare an function with async
async function sayhello(){
    //3rd we are going to create a try catch to catch any error 
    try{
        await fs.mkdir('cfiStudent'); 
        cosole.log('folder is created');

    } catch(error){
        console.log(error); 
    }
}

