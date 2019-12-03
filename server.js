var http = require('http')
const express = require('express')
const app = express()
const server = http.Server(app)
const bodyParser = require("body-parser")
const mongoose = require("mongoose")

app.use(bodyParser.urlencoded({ extended: true }));
require('./models/model')
const control = require('./controllers/contoll')
var db,
  uri =
  'mongodb+srv://jojo:1234@cluster0-g6hod.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on("error", e => {
  console.log("Can't connect to dbms");
});


app.listen(3000, ()=>{
    console.log('express server started at port 3000')
})

app.use('/stoic',control)