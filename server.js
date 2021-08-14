require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const user_routes = require('./routes/routes')
// const post_routes = require('./routes/post')
const cors = require('cors')
const port = process.env.PORT || 3000
const app = express()
var options = {
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
  }
  app.use(cors(options));

app.get('/',(req,res)=>{
    res.send("Hello World")
})


mongoose.connect(
    process.env.DATABASE_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

const db = mongoose.connection;
db.on('error', (error)=>{console.log(error)});
db.once('open', ()=>{console.log('Connected to Database')});
app.use(express.json())
app.use('/api/user',user_routes)



app.listen(port,()=>{
    console.log(`Server listening to port ${port}`)
})