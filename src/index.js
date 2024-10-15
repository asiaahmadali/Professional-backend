import mongoose from "mongoose" ;
import DBNAME from './contants' ;
import express from "express";

const app = express() ;
;(async()=>{
    try {
      await mongoose.connect(`${process.env.MONGODB_URL}/${DBNAME}`) ;
      app.on('error',(error)=>{
        console.log(error) ;
        throw error ;
      })

      app.listen(process.env.PORT,()=>{
       console.log(`app is listening at : ${process.env.PORT}`);
   
      })

    } catch (error) {
      console.log(error) ;
      throw error ;
    }
})()