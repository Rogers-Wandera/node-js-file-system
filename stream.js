const fs = require("fs");
const path = require("path");

const rs = fs.createReadStream(path.join(__dirname,"src","files","lorem.txt"),{encoding: "utf8"});
const ws = fs.createWriteStream(path.join(__dirname,"src","files","new-lorem.txt"));

// rs.on("data",(dataChunk) => {
//     ws.write(dataChunk);
// })

rs.pipe(ws)


setTimeout(() => {
    //deleting the file after 6 seconds
    fs.unlinkSync(path.join(__dirname,"src","files","new-lorem.txt"))
},6000)