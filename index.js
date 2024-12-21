import express from "express";
import userRouter from "./router/user.js";
import courseRouter from "./router/course.js";
import adminRouter from "./router/admin.js";
const app=express();


app.use('/api/v1/user',userRouter)
 //any request coming onto '/user' endpoint will be directed here
app.use('/api/v1/course',courseRouter)
app.use('/api/v1/admin',adminRouter)
app.listen(3000)

