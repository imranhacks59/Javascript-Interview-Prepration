const app= require('./app');
const dotenv=require('dotenv');
const connectDatabase = require('./config/database');
// const cors= require('cors');

dotenv.config({path:"config/config.env"});
// app.use(cors());

connectDatabase();

const server=app.listen(process.env.PORT,()=>{
    console.log(`server is running on https://localhost${process.env.PORT}`)
});