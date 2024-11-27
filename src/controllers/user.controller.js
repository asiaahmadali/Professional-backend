import asyncHandler from "../utils/asyncHandler.js";


const registerUser = asyncHandler(async(req,res)=>{
//    get user details from frontend
//    validation(user ny email empty tu nai diya?)
//    check if user already exist by username and email
//    check for images,check for avatar
//    upload them to cloudinary, avatar
//    create user object- create entry in db
//    remove password and refresh token fields from response   
//    check for user creation 
//    return res



//getting user info from request body using postman
   const{username,fullName,email,password} = req.body ;
   console.log(email);

   // user info validation 
   // jwt authentication
   
})

export default registerUser ;