const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();


//Middleware

app.use(cors());
app.use(express.json());

//MongoDB connection
mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("Mongodb Connected"))
.catch((err)=> console.error("MongoDB error:",err));

//Default route

app.get('/',(req,res)=>{
    res.send('Task Manager API is running...');
});


//start server

const PORT = process.env.PORT||5000;
app.listen(PORT,()=>console.log("server is running on port ${PORT}"));