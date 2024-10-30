import mongoose from "mongoose";
import { Schema } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";


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

// when i have to save data pre i have to add another function
userSchema.pre("save",async function(next){
  if(!this.isModified("password")) return next()
    this.password=bcrypt.hash(this.password,10); //10 rounds
    next() ;
})

userSchema.methods.isPasswordCorrect = async function(password){
return await bcrypt.compare(password,this.password) ;    // it will compare string and encrypted passwords

}

userSchema.methods.generateAccessToken=async function(){
  // generating access tokens
 return  await jwt.sign({    //payload
    _id:this._id,
    email:this.email,
    username:this.username,
    fullname:this.fullname
   },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn:process.env.ACCESS_TOKEN_EXPIRAY
    }
  )
}

userSchema.methods.generateRefreshToken=async function(){
  return  await jwt.sign({    //payload
    _id:this._id,
   },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn:process.env.REFRESH_TOKEN_EXPIRAY
    }
  )
}

export const User = mongoose.model("User",userSchema) ;