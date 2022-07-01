const fs = require('fs');
const pdfParse = require('pdf-parse');
const path= require("path");
const express =require("express");
const bodyParser=require("body-parser");
const multer = require("multer")
const app=express();
const pdf=path.join(__dirname,"new.js");
var upload = multer();
const port=3000;

app.use(bodyParser.json());
app.use(bodyParser.raw());
app.use(bodyParser.urlencoded({ extended: true }));


app.post('/uploadPdf',upload.any('file'),async function(req,res){
    try{
   console.log(`Resquet file: ${JSON.stringify(req.file)}`)
    let pdfbuffer=null;
    let parsedPdf="";
    if(fs.existsSync(pdf)){
        pdfbuffer=fs.readFileSync("Resume.pdf");
        parsedPdf=await pdfParse(pdfbuffer);
    }
    res.status(200).json({result:parsedPdf});
}catch(error){
    res.send(error.message);
}
})


app.listen(port,()=>{
    console.log(`Port running on http://localhost:${port}`)
})