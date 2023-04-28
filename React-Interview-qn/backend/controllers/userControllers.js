const User = require('../model/userSchema')
const catchAsyncErrors=require('../middleware/catchAsyncErrors')

exports.registerUser=catchAsyncErrors( async(req,res,next)=>{
    const {name,email,password}=req.body
    
    const user= await User.create({
        name,email,password
    })
    
    // const token = user.getJWTToken();
    res.status(201).json({
        success:true,
        user,
        // token
    })
})

exports.loginUser=async(req,res,next)=>{
    const {email,password}=req.body
    
    if(!email||!password){
        return next('please enter your email and password',400)
    }
    
    const user=User.findOne({email}).select('+password');

    if(!user){
        return next('invalid user',401)
    }

    const isPasswordMached=user.comparePassword(password);
    if(!isPasswordMached){
        return next('password is incorrect',400)
    }

    res.status(200).json({
        success:true,
        user
    })
}