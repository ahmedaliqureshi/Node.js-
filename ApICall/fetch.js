import axios from "axios"; 

async function apicall() {
    try {
        let response = await fetch.get ("https://ai.suhail/app");
        console.log(response.data); 
    } catch (error)
    
     {
       console.log(error);  
    }
}
apicall()