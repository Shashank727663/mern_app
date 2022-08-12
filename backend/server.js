const express=require('express');
const cors=require('cors');
require('dotenv').config();
const mongoose=require('mongoose');

const app=express()
const port =process.env.port || 5000
app.use(cors())
app.use(express.json())
const uri=process.env.URI;
mongoose.connect(uri,{useNewUrlParser:true,useUnifiedTopology: true,});
const connection=mongoose.connection;
connection.once('open',()=>{
    console.log("mongodb connection established succesfully..")
})

const exRouter=require('./routes/exercises');
const usRouter=require('./routes/users');
app.use('/exercises',exRouter);
app.use('/users',usRouter);
app.get('/' , (req,res)=>{
    // Server will send GeeksforGeeks as response
    res.send("this server is up."); 
 })
app.listen(port,()=>{
    console.log(`server is up at ${port}`)
})

