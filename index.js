const express = require ("express");
//import { IgApiClient } from 'instagram-private-api';
//import { sample } from 'lodash';
const diretorio = require("path");
const pii = require("piii");
const { IgApiClient } = require('instagram-private-api');
const { AccountRepository } = require("instagram-private-api/dist/repositories/account.repository");
const { log } = require("console");
const { text } = require("express");
const app = express();
var sexo =""
var teze =""
app.use(express.json());
app.use(express.static('public'));
const ig =  new IgApiClient();

const username = "arrow_correio_elegante";
const pass = "Cientista232@"
ig.state.generateDevice(username);
const repository = new AccountRepository(ig)
ig.state.proxyUrl = teze;
ig.account.login(username,pass);

app.use(express.urlencoded({extended:true}));
app.get("/",function(req,res)
{
    res.sendFile(__dirname+"/root/main.html");
    //res.sendFile(__dirname+"/public/style.css");
});


app.post('/', async (req,res) =>
{
    
    request = req.body.text
    request1 = req.body.insta
    request2 = req.body.insta1
    var insta = request1;
    var insta1 = request2;
    var text = request;
    
    
    const userId = await ig.user.getIdByUsername(insta);
    console.log(userId);
    const thread = ig.entity.directThread([userId.toString()]);
    //const texto = "Usuário que enviou o correio: "+insta1+"\n Mensagem: "+"\n"+text;
    await thread.broadcastText(" O usuário "+insta1+" lhe enviou uma mensagem:\n"+text);
    console.log(insta);
   
   
    

});


app.listen(8080,function(){console.log("Server Rodando")});