const characters = require('./utils/data.js');
const getCharById = require("./controllers/getCharacterById.js")
const getCharacterByDetails = require("./controllers/getCharacterByDetails.js")
var http = require("http");
const PORT = 3001;
module.exports =
http
    .createServer((req,res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    const id = req.url.split("/").pop();
   // console.log(id);
//http.createServer((req,res) =>{
   
   if (req.url.includes("/rickandmorty/character")){
    getCharById(res,id);
   }
   
   
   if(req.url.includes("/rickandmorty/detail")){
    getCharacterByDetails(res,id);
   }
})
.listen(PORT,"localhost");
