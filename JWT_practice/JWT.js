//1st we are going to import the jwt package 
// import jwt from "jsonwebtoken"; 
// 2nd we are creating a async funciton in whcih are going to store 
// our sensitive data, and the reson we are using the asycn function 
// is because we want to run the lines of code one by one
// async is used to let the code be executed in linear manner rather then. rather then executing non linear manner which leads to unpredictable output 
async function encryptdata(){
//3rd we are creating an object with in the try catch block
//  which whill have the sensitve data 
    try {
        let userdata={ // name of the obeject= userdata 
        fname:'zyx', // name of the user 
        Age:22, // age of the user 
        isAlive:true, // is user alive or not
        isSleep:null, // is user online or not
    }
//4th we are going to now create an encryption function which 
// will take the values from our asycn function and then incrypt it
// this function is created outside of the object function as it is
// done after the data or when the object is created 
    let key= "lol123"; 
//5th in the variable, we are going to use the jwt and sign where user data
// and key are choosen to be encrypted 
//6th now we are declaring a funciton in which we are going to store the d
    let token = await jwt.sign(userdata,key,{expiresIn:500})
console.log(token); 
    } catch (error) {
        console.log(error.message,error.name0);
    }
}
//7th we are going to call the fucntion to ge the output 
//encryptdata();

// 1st we are going to import jwt package 
import jwt from "jsonwebtoken"; 
//2nd we are going to create a try catch block and we are going to create a asynch function and name decryptdata

async function decryptdata(){
try {
//3rd we are going to take the encrypted token that we optained form 
// previous program 
    let encryptToken= ""
//4th the key will be as same as previous 
    let key="lol123";
//5th create the await function in which we are put encryption token 
// and key will be same as before
    let user= await jwt.verify(encryptToken,key)
// 6th print the use data or object
    console.log(userdata)
    
    
} catch (error) {
    console.log(error.message, error.name);
}
}

decryptdata()
