//importar o mongoose

import mongoose from "mongoose";
const connectionURL = process.env.LINK_URI!
export const connectionDB = async() =>{
    try {
        await mongoose.connect(connectionURL)
        console.log('DatabaseConnected')
    } catch (error) {
        
        console.log(error)
    }

}
