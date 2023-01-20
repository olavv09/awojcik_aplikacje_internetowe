const express = require('express');
const axios = require('axios')
const router = express.Router();
var MD5 = require("crypto-js/md5");


let dbo = require('../db/connection');

router.get('/login', async (req, res) => {
    const dbConnect = dbo.getDb(); 
    let result = await dbConnect.collection('Accounts').findOne({username: req.query.username}) 
    if(result==null){
        res.send("Nie ma takiego użytkownika")
    }
    else if(req.query.password == result.password){

        res.send("prawidlowe haslo");
    }
    else{
        res.send("bledne haslo");
    }
})
router.get('/registration', async (req,res)=>{
    const dbConnect = dbo.getDb(); 
    let result = await dbConnect.collection('Accounts').findOne({username: req.query.username}) 
    
    if(result!= null){
        res.send("Istnieje użytkownik o takim loginie");

    }
    else if(result==null){
    
    const newAccount = {
        
        username:req.query.username,
        password:MD5(req.query.password).toString()
        
    }
    
    let result2 = await dbConnect.collection('Accounts').insertOne(newAccount)
    res.send("Konto zostało założone");
    }
    //wpisanie loginu
    //wpisanie hasła 
    //sprawdzenie czy podana nazwa użytkownika nie jest zajeta
    //zapisanie uzytkownika do bazy

})





module.exports = router;