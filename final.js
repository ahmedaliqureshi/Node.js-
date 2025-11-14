import { rename } from "fs";
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
        console.log('file is created');

        //4th read file 
        let output= await fs.readFile(fileNam,"utf-8");
        console.log(output);

        // 5th rename file 
        await fs.reNameFile(fileNam,reNameFile);
        console.log('file renamed');

        // 6h delete file 
        await fs.unlink(reNameFile); 
        console.log('file deleted');

        //7th list files
        await fs.readdir(filePathsLS);
        console.log('lsit');

        //8th update file 
        await fs.appendFile(fileName, '\n hello hi bye');
        console.log('file updated');

    } catch (error) {
        console.log(error);
    }
}   
allMethods();