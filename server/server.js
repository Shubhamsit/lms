import express from "express";
import cors from "cors";
import "dotenv/config";
import { connectDB } from "./configs/mongodb.js";
import { clerkWebhooks, stripeWebhooks } from "./controllers/webhooks.js";
import bodyParser from "body-parser";
import educatorRouter from "./routes/educatorRoutes.js";
import { clerkMiddleware } from "@clerk/express";
import connectCloudinary from "./configs/cloudinary.js";
import courseRouter from "./routes/courseRoute.js";
import userRouter from "./routes/userRoutes.js";

// initalise express

console.log(process.env.MONGODB_URI);

const app = express();

app.post('/stripe',bodyParser.raw({type:'application/json'}),stripeWebhooks);



// middleware

app.use(cors());
app.use(express.json());
app.use(clerkMiddleware());



// Route

app.get("/", (req, res) => {
  res.send("Api working Shubham");
});



app.post("/clerk", clerkWebhooks);


app.use('/api/educator',educatorRouter);
app.use('/api/course',courseRouter);
app.use('/api/user',userRouter);

// Port

const PORT = process.env.PORT || 5000;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running  on  port ${PORT}`);
    });
  })

  .then(()=>{

 connectCloudinary();

  })
  .catch((error) => {
    console.log("error in connection", error);
  });




  app.use((req, res) => {
    res.status(404).json({ error: "Route not found", path: req.originalUrl });
  });
  