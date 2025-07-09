import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { connectDB } from './configs/mongodb.js';
import { clerkWebhooks } from './controllers/webhooks.js';
import bodyParser from 'body-parser';


// initalise express


console.log(process.env.MONGODB_URI);


const app=express();

// middleware

app.use(cors());

// Route

app.get('/',(req,res)=>{

    res.send("Api working Shubham");
    



});

app.get('/check',(req,res)=>{

    res.json({name:"shubham"});
    



});

app.post('/clerk', bodyParser.raw({ type: 'application/json' }), clerkWebhooks); ✅

// app.post('/clerk', express.json(), clerkWebhooks);

// Port

const PORT=process.env.PORT||5000

 connectDB().then(()=>{


app.listen(PORT,()=>{

console.log(`Server is running  on  port ${PORT}`);


})


 }).catch((error)=>{


    console.log("error in connection",error);
    



 })

