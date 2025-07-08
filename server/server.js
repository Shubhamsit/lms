import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { connectDB } from './configs/mongodb.js';

// initalise express


console.log(process.env.MONGODB_URI);


const app=express();

// middleware

app.use(cors());

// Route

app.get('/',(req,res)=>{

    res.send("Api working");
    



});

// Port

const PORT=process.env.PORT||5000

 connectDB().then(()=>{


app.listen(PORT,()=>{

console.log(`Server is running  on  port ${PORT}`);


})


 }).catch((error)=>{


    console.log("error in connection",error);
    



 })

