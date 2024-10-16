// const asyncHandler=(fn)=>async(req,res,next)=>{
//        try {
//            await fn(req,res,next)
//        } catch (err) {
//             res.status(err.code||500).json({
//               success:false,
//               message:err.message
//             })
//        }
// }
// export default asyncHandler ;


const asyncHandler =(reqHandler)=>{
     (req,res,next)=>{
      Promise.resolve(reqHandler(req,res,next)).reject((error)=>{
        next(error)
      })
     }
}

export default asyncHandler ;