//import mongosse
import {Schema, model} from "mongoose";

const dataSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    course:{
        type:String,
        required:true
    }

},{timestamps:true})

const data = model('user', dataSchema)

export default data
