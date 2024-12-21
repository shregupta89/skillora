import express from "express";
import userRouter from "./router/user.js";
import courseRouter from "./router/course.js";
const app=express();


app.use('/api/v1/user',userRouter)
//any request coming onto '/user' endpoint will be directed here
app.use('/api/v1/course',courseRouter)
app.listen(3000)

