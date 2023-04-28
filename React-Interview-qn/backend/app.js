const express=require('express');
const user=require('./routes/userRoute');
const cookieParser = require('cookie-parser')
const cors= require('cors');
const app=express();
app.use(express.json());
app.use(cookieParser());

app.use(cors());
app.use('/api/v1',user)






module.exports= app