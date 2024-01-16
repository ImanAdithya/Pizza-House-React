const Product=require('../model/Product');



const ProductController={

    saveProduct: async function (req, res, next) {
        try {
            const ProductData = req.body;

            const product = await Product.create(ProductData);

            res.status(200).json(product);

        }catch (err){
            console.error(err);
            res.status(500).json({error: 'something went wrong !'});
        }
    },

    getAllProducts:async function (req, res, next) {
        try {
            const productList = await Product.find();

            res.status(200).json(productList);
        }catch (err){
            console.log(err);
            res.status(500).json({error:'something went wrong !'});
        }
    },


}

module.exports=ProductController