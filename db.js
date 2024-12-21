import {mongoose,Schema} from 'mongoose'
const {ObjectId}=Schema.Types



const userSchema=new Schema({
    email:{type:String,unique:true},
    password:String,
    firstName:String,
    lastName:String

})
const adminSchema=new Schema({
    email:{type:String,unique:true },
    password:String,
    firstName:String,
    lastName:String
    
})
const courseSchema=new Schema({
    title:String,
    desc:String,
    price:Number,
    imgUrl:String,
    createrId:ObjectId
    
})
const purchaseSchema=new Schema({
    userID:ObjectId,
    courseId:ObjectId
    
})

const userModel=mongoose.model('user',userSchema)
const adminModel=mongoose.model('admin',adminSchema)
const courseModel=mongoose.model('course',courseSchema)
const purchaseModel=mongoose.model('purchase',purchaseSchema)

export default {
    userModel,
    adminModel,
    courseModel,
    purchaseModel
}