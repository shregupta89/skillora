import {Router} from 'express'

const courseRouter=Router()

courseRouter.post('/purchase',function(req,res){
    res.json({
        message:'purchase your course froom here'
    })
})

courseRouter.get('/preview',function(req,res){
    res.json({
        message:"all the courses"
    })
})

export default courseRouter