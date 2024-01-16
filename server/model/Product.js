const mongoose=require('mongoose');

const ProductModel=mongoose.Schema(
    {
        "foodId": {
            require:true,
            type:String,
            unique:true,
            index:true  // for better perfomance
        },
        "name": {
            require:true,
            type:String
        },
        "des": {
            require:true,
            type:String
        },
        "price": {
            require:true,
            type:String
        },
        "image": {
            require:true,
            type:String
        }
    },
    {versionKey:false}

);

const Product=mongoose.model('Product',ProductModel);

module.exports=Product;