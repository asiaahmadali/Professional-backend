
import mongoose from "mongoose" ;
import express from "express";
import dotenv from 'dotenv' ;

dotenv.config({path:'./env'}) ;
import connectDB from "./db/index.js";



const app = express() ;

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server running at port: ${process.env.PORT || 8000}`);
    });
  })
  .catch((error) => {
    console.log("MongoDB connection failed!!!", error);
  });

// Error handling middleware (optional, for catching unhandled errors)
app.use((req, res, next) => {
  res.status(404).send("Not Found error occurs");
});

// General error handler for unexpected errors
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

// const app = express() ;
// ;(async()=>{
//     try {
//       await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`) ;
//       app.on('error',(error)=>{
//         console.log(error) ;
//         throw error ;
//       })

//       app.listen(process.env.PORT,()=>{
//        console.log(`app is listening at : ${process.env.PORT}`);
   
//       })

//     } catch (error) {
//       console.log(error) ;
//       throw error ;
//     }
// })()