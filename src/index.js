// require('dotenv').config()

import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
import connectDB from "./db/index.js";
import dotenv from "dotenv";
dotenv.config({
    path:'.env'
})

connectDB()
.then(()=>{
    app.listen(process.env.POST || 8000, ()=>{
        console.log(`server is runniong at port"${process.env.PORT}`);
    })
})
.catch((error)=>{
    console.log("MONGODB connection failed",error);
})











// import express from "express";
// const app=express();
// ( async()=> {
//     try{
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error",(error)=>{
//             console.log("err:", error);
//             throw(error)
//         })
//         app.listen(process.env.PORT,()=>{
//             console.log(`App is listening on port ${process.env.PORT}`)
//         })
//     }
//     catch(error){
//         console.log("error:",error)
//         throw(error)
//     }
// } )()