import express from "express";
const app=express();


app.use('/user/signup',function(req,res){
    res.json({
        messgae:"helo from user signup"
    })
})
app.use('/user/signin',function(req,res){
    res.json({
        messgae:"helo from user signin"
    })
})

app.use('/user/purchases',function(req,res){
    res.json({
        messgae:"helo from user course purchases"
    })
})

app.use('/course/purchase',function(req,res){
    res.json({
        messgae:'purchase your course froom here'
    })
})

app.use('/courses',function(req,res){
    res.json({
        messgae:"all the courses"
    })
})
app.listen(3000)

