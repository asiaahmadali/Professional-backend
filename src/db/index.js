import mongoose from "mongoose";
import { DBNAME } from "../contants.js";
import express from "express";



const connectDB = async()=>{
    try {
       const connectionInstance =  await mongoose.connect(`${process.env.MONGODB_URL}/${DBNAME}`) ;
     console.log(`\n Mongodb connected!! db host"${connectionInstance.connection.host}`);
     
    } catch (error) {
         console.log(error) ;
         throw error ;
    }
}


export default connectDB ;