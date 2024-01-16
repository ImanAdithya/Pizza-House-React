const dotenv=require('dotenv');
const mongoose=require('mongoose');

dotenv.config();

const MONGODB_URL=process.env.MONGODB_URL;

const db  = async ()=>{
    try{
     const conn = await mongoose.connect(MONGODB_URL);//Asnycrones Task ==> Promise Type
     console.info(`MongoDB Connected to :${conn.connection.host}`);

    }catch(err) {
        console.error("MongoDB connect error",err)
    }
}

module.exports=db;

