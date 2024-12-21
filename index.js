import express from "express";
import mongoose from 'mongoose'
import userRouter from "./router/user.js";
import courseRouter from "./router/course.js";
import adminRouter from "./router/admin.js";

import dotenv from 'dotenv'
dotenv.config();
const connection_string=process.env.connection_string;

console.log("connected to mongoose successfully")

const app=express();


app.use('/api/v1/user',userRouter)
 //any request coming onto '/user' endpoint will be directed here
app.use('/api/v1/course',courseRouter)
app.use('/api/v1/admin',adminRouter)

async function main(){
    await mongoose.connect(connection_string)
    app.listen(3000)

}
main()

