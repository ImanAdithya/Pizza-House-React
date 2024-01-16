const mongoose=require('mongoose');

const UserModel=mongoose.Schema(
    {
        "userName": {
            require:true,
            type:String,
            unique:true,
            index:true  // for better perfomance
        },
        "email": {
            require:true,
            type:String
        },
        "role": {
            require:true,
            type:String
        },
        "password": {
            require:true,
            type:String
        }
    },
    {versionKey:false}

);

const User=mongoose.model('User',UserModel);

module.exports=User;