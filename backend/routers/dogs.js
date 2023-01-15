const { Double } = require('bson');
const express = require('express');
const axios = require('axios')
const ObjectId = require('mongodb').ObjectId;

const router = express.Router();

let dbo = require('../db/connection');

router.get('/all', async (req, res) => {
    const dbConnect = dbo.getDb(); //polaczenie z baza danych

    //wyslanie zapytania do bazy danych
    //await = oczekiwanie kodu na informacje z bazy danych
    let result = await dbConnect
    .collection('dogInfo')
    .find({}) //(find all)
    .toArray(function (err, result) {
        res.json(result);
      }); 
})

router.get('/', async (req, res) => { //wyszukiwanie psa po imieniu
  const dbConnect = dbo.getDb();
  
  let result = await dbConnect
      .collection('dogInfo')
      .findOne({ name: req.query.name })
      res.json(result)

});

router.post('/addDog', async (req, res) => { //dodawanie nowego psa
    const dbConnect = dbo.getDb();
    console.log(req)
    const newDog = {
        name: req.query.name,
        photo: req.query.photo,
        desc: req.query.desc,
        breed: req.query.breed,
        age: req.query.age,
        sex: req.query.sex,
        weight: req.query.weight
      }
      console.log(newDog)
    let result = await dbConnect
    .collection('dogInfo')
    .insertOne(newDog)
    res.sendStatus(201)
})

module.exports = router;