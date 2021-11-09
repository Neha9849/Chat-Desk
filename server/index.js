const express = require("express");
const connectDB = require('./config/db')

const app = express()
//connect to db
connectDB();
//middlewares
app.use(express.json());
//routes
app.get('/',(req,res)=>{
  res.send('home')
})
app.use('/api/users',require('./routes/api/users'))
app.use('/api/auth',require('./routes/api/auth'))
//port
const PORT = process.env.PORT || 5000;
//strt server
app.listen(PORT,()=>{
  console.log('server started')
})
