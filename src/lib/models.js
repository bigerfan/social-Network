import mongoose, { Schema } from "mongoose"


const userSchema = new Schema({
    username: {
        type: String,
        min: 4,
        required: true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        min:6
    },
    bio:{
        type:String
    },
    avatar:{
        type:String
    },
    activity:{
        type:Array,
        required:true,
    }
})

const postSchema = new Schema({
    creator:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    postImg:{
        type:String,
        required:true
    }
},{timestamps:true})

const sessionSchema = new Schema({
    id:{
        type:String
    },
    userId:{
        type:String
    },
    expiresAt:{
        type:Date
    },
    fresh:{
        type:Boolean
    }
})


export const Post = mongoose.models?.Post || mongoose.model('Post',postSchema)
export const Session = mongoose.models?.Session || mongoose.model('Session',sessionSchema)
export const User = mongoose.models?.User || mongoose.model('User',userSchema)