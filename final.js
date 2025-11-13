import fs from "fs/promises"
async function allMethods(){
    try {
        let folderName = "test"; 
        let fileNam = "hi.txt"; 
        let reNameFile =" bye.txt"; 
        let filecontent = "hello CFI CS students"; 
        let filePathsLS = "/home/ahmed/Node.js-" // get it by pwd

        // to create the folder we use fs, and for rest of the things

        //1st we are going to create the folder
        await fs.mkdir(folderName);
        console.log('folder is created'); 

        // 2nd we are going to delet the folder 
        await fs.rmdir(folderName); 
        console.log('folder is deleted');

        // 3rd we are goign to create the file
        await fs.writeFile(fileName,fileContent); 
        console.log()
    
  


    } catch (error) {
        console.log(error);
    }
}