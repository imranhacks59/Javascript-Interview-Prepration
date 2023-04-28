const mongoose=require('mongoose');
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const crypto=require('crypto');

const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
    },
    password:{
        tpye:String,
        select:false
    },

    // resetPasswordToken: String,
    // resetPasswordExpire: Date,

})


// bcrypt
userSchema.pre("save", async function(next){
    // use if password not modified this should be hashed again
    if(!this.isModified("password")){
        next();
    }
    this.password = await bcrypt.hash(this.password,10) //10 is salt value how your password willbe strong

})
// userSchema.pre("save", function (next) {
//     const user = this
  
//     if (this.isModified("password") || this.isNew) {
//       bcrypt.genSalt(10, function (saltError, salt) {
//         if (saltError) {
//           return next(saltError)
//         } else {
//           bcrypt.hash(user.password, salt, function(hashError, hash) {
//             if (hashError) {
//               return next(hashError)
//             }
  
//             user.password = hash
//             next()
//           })
//         }
//       })
//     } else {
//       return next()
//     }
//   })

// userSchema.methods.getJWTToken = function(){
//     return jwt.sign({id:this._id},process.env.JWT_SECRET,{ //yaha se secret token generate ho jayega agar kisi ke hath laga to koi bhi login kr skta hai token se to nivhle line me usko expires kar denge kuch time jaise kisi website ham dekhte hai waha se jane ke bad ho jata hai
//         expiresIn: process.env.JWT_EXPIRE,
//     })
// }
// userSchema.methods.comparePassword = async function(enteredPassword){
//     return await bcrypt.compare(enteredPassword,this.password);
// }

// // Hashing and adding resetPasswordToken to userSchema
// userSchema.methods.getResetPasswordToken = function(){
//     // generating token
//     const resetToken = crypto.randomBytes(20).toString("hex");
  
//     // Hashing and adding resetPasswordToken to userSchema
//     this.resetPasswordToken = crypto 
//     .createHash("sha256") //sha256 is algorithm
//     .update(resetToken)
//     .digest("hex");
  
//     this.resetPasswordExpire = Date.now() + 15*60*1000;
  
//     return resetToken;
//   }

module.exports=mongoose.model('user',userSchema);