import mongoose from "mongoose" ;
import { Schema } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt" ;


const userSchema = new Schema({
  username:{
    type:string,
    required:true,
    unique:true,
    lowercase:true,
    trim:true,
    index:true
  },
  email:{
    type:string,
    required:true,
    unique:true,
    lowercase:true,
    trim:true,
  },
  fullname:{
    type:string,
    required:true,
    trim:true,
    index:true
  },
  avatar:{
    type:string,  // cloudinary url
    required:true,
  },
  coverImage:{
    type:string    //cloudinary url
  },
  watchHistory:[
    {
      type:Schema.Types.ObjectId,
      ref:"Video"
    }
  ],

  password:{
    type:String,
    required:[true,"password is required"],
  
  },

  refreshTokens:{
    type:String, 
  }


},
{
  timestamps:true
}) ;


userSchema.pre("save",async function(next){
    if(this.isModified("password")) return next() ;
    this.password=bcrypt.hash(this.password,10) ;
    next() ;
})


userSchema.methods.isPasswordCorrect = async function(){
  return await bcrypt.compare(password,this.password) ;
}

userSchema.methods.generateAccessToken = async function(){
  return await jwt.sign({
    _id :this._id,
    username:this.username,
    email:this.email,
    fullname:this.fullname
  },
  process.env.ACCESS_TOKEN_SECRET,
  {
    expiresIn : process.env.ACCESS_TOKEN_EXPIRAY
  }
)
}