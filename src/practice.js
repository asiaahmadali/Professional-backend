import mongoose from "mongoose";
import express from "express";
import { DB_NAME } from "./contants";

const app = express() ;

// ;(async()=>{
//      try {
//           await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`) ;
//           app.listen(process.env.PORT , (error)=>{
//             console.log(`server is listening at ${process.env.PORT}`);
            
//           });
//           app.on('error',(error)=>{
//             console.log(error);
//             throw error ;
            
//           })
//      } catch (error) {
//          console.log(error) ;
//          throw error ;
//      }
// })()