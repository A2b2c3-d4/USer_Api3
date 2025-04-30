const mongoose = require('mongoose');
const connectDB = async()=>{
    try{
       mongoose.connect(process.env.MONGO_URI);
       console.log("Connected to mongoDB server");
    }
    catch{
        console.log("MongoDB disconnected");
    }
}

module.exports = connectDB;