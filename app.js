// const fs = require("fs");
const fsPromises = require("fs").promises;
const path = require("path");
const process = require("process");

const filePath = path.join(__dirname, "src", "files");


const fileOps = async () =>  {
    try {
        const data = await fsPromises.readFile(path.join(filePath, "user.txt"), "utf8");
        console.log(data)
        await fsPromises.writeFile(path.join(filePath, "testing.txt"), "Hello promises");
        console.log("write successful")
        await fsPromises.appendFile(path.join(filePath, "testing.txt"), "\nIt really works");
        console.log("append success")
        await fsPromises.rename(path.join(filePath, "testing.txt"),path.join(filePath, "work.txt"))
    } catch (error) {
    
        console.log(error)
    }
}

fileOps();

// fs.readFile(path.join(filePath, "user.txt"), "utf8", (err,data) => {
//     if(err) {
//        throw err
//     }
//     console.log(data)
// })

// fs.writeFile(path.join(filePath, "greeting.txt"), "Hello Rogers", (err) => {
//     if(err) throw err
//     console.log("Write file success");

//     fs.appendFile(path.join(filePath, "greeting.txt"), "\nYou are making history", (err) => {
//         if(err) throw err
//         console.log("Edited file success")
//     })

//     fs.rename(path.join(filePath, "greeting.txt"), path.join(filePath, "greetings.txt"),err => {
//         if(err) throw err
//         console.log("Rename successful")
//     })
// })

process.on("uncaughtException", (err,origin) => {
    console.log(`There was an unCaught error ${err}`)
    console.log(`Origin ${origin}`)
    process.exit(1);
})
