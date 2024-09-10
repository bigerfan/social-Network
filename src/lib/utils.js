import mongoose from "mongoose"

export const connectToDB =async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
    } catch (error) {
        throw new Error(error)
    }
}