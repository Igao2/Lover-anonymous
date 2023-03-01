const express = require ("express");
const diretorio = require("path");
const app = express();
app.use(express.json()); 
app.use(express.urlencoded({extended:true}));
app.get("/",function(req,res)
{
    res.sendFile(__dirname+"/main.html");
});
app.post('/',(req,res) =>
{
    request = req.body.text;
    request1 = req.body.insta;
    var insta = request1;
    var text = request;
    console.log(text);
    console.log(insta);

});

app.listen(8080,function(){console.log("Server Rodando")});