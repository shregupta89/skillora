import {Router} from 'express'

const adminRouter=Router()


adminRouter.post('/signup',function(req,res){
    res.json({
        messgae:"helo from admin signup"
    })
})
adminRouter.post('/signin',function(req,res){
    res.json({
        message:"helo from admin signin"
    })
})

adminRouter.post('/course',function(req,res){
    res.json({
        message:"helo from admin course purchases"
    })
})

adminRouter.put('/course',function(req,res){
    res.json({
        message:"helo from admin course purchases"
    })
})

//all the courses taht created
adminRouter.get('/course/bulk',function(req,res){
    res.json({
        message:"helo from admin course purchases"
    })
})

export default adminRouter