const fs = require("fs");
const path = require("path");

const folderPath = path.join(__dirname, "src");

// creating folder
if(!fs.existsSync(path.join(folderPath,"new"))){
    fs.mkdir(path.join(folderPath, "new"), (err) => {
        if(err) throw err;
        console.log("folder created")
    })
}

// removing folder
setTimeout(() => {
    if(fs.existsSync(path.join(folderPath,"new"))){
        fs.rmdir(path.join(folderPath, "new"), (err) => {
            if(err) throw err;
            console.log("folder removed")
        })
    }
},3000)