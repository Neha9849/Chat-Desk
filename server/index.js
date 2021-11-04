const express = require('express');
const mongoose = require('mongoose')
const PORT= process.env.PORT || 5000;
const app = express();
//middlewares
app.use(express.json())
//connect to database
db= require('./config/key').mongoURI;
mongoose.connect(db,{useNewUrlParser: true})
.then(()=>console.log('connected to db'))
.catch(err=>console.log(err))

app.listen(PORT,()=>console.log('server running'))