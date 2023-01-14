const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000
const dogsRouter = require('./routers/dogs')
const dbo = require('./db/connection')

app.set("view engine", "ejs")
app.set('views', './frontend/views')

app.use(express.static('./'))
app.use(cors())
app.use(express.json())
app.use('/dogs', dogsRouter)

app.get('/', (req, res) => {
   res.render('index')
});

app.get('/2', (req, res) => {
  res.render('index2')
});

app.get('/*', (req, res) => {
  res.render('404')
});

dbo.connectToServer(function (err) {
    if (err) {
      console.error(err)
      process.exit()
    }
  
    // start the Express server
    app.listen(port, () => {
      console.log(`Server is running on port: ${port}`);
    });
  });