import axious from "axious"; 

async function apicall() {
    try {
        let response = await axious.get ("https://ai.suhail/app");
        console.log(response.data); 
    } catch (error)
    
     {
       console.log(error);  
    }
}
apicall()