
import mongoose from "mongoose" ;
import express from "express";
import dotenv from 'dotenv' ;

dotenv.config({path:'./env'}) ;



import connectDB from "./db/index.js";
connectDB() ;

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