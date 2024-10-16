
import mongoose from "mongoose" ;
import express from "express";
import dotenv from 'dotenv' ;

dotenv.config({path:'./env'}) ;
import connectDB from "./db/index.js";

import express from "express";

const app = express() ;

connectDB()
.then(()=>{
  app.listen(process.env.PORT || 8000,()=>{
    console.log(`server is runnig at port : ${process.env.PORT}`); 
  })
  app.on((error)=>{
    console.log(error);
    throw error ;
  })
})
.catch((error)=>{
  console.log("mongodb connection failed !!!",error);
}) ;

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