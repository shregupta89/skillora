import { Router } from 'express';

//userRouter will andle requests cooming to /user
const userRouter=Router()

//app will not be used here
userRouter.post('/signup',function(req,res){
    res.json({
        messgae:"helo from user signup"
    })
})
userRouter.post('/signin',function(req,res){
    res.json({
        message:"helo from user signin"
    })
})

userRouter.get('/purchases',function(req,res){
    res.json({
        message:"helo from user course purchases"
    })
})

export default userRouter;