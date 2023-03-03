const express = require ("express");
//import { IgApiClient } from 'instagram-private-api';
//import { sample } from 'lodash';
const diretorio = require("path");
const { IgApiClient } = require('instagram-private-api');
const { AccountRepository } = require("instagram-private-api/dist/repositories/account.repository");
const { log } = require("console");
const app = express();
var sexo =""
var teze =""
app.use(express.json());
const ig =  new IgApiClient();

const username = "loversecretanonymous";
const pass = "Cientista232@"
ig.state.generateDevice(username);
const repository = new AccountRepository(ig)
ig.state.proxyUrl = teze;
ig.account.login(username,pass);

app.use(express.urlencoded({extended:true}));
app.get("/",function(req,res)
{
    res.sendFile(__dirname+"/main.html");
});


app.post('/', async (req,res) =>
{
    request = req.body.text
    request1 = req.body.insta
    var insta = request1;
    var text = request;
    const userId = await ig.user.getIdByUsername(insta);
    console.log(userId);
    const thread = ig.entity.directThread([userId.toString()]);
    await thread.broadcastText(text);
    console.log(text);
    console.log(insta);

});


app.listen(8080,function(){console.log("Server Rodando")});