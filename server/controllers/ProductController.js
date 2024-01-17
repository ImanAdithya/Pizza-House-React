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

    updateProduct:async function (req, res, next) {
        try {
            const productId = req.body.foodId;
            const productData = req.body;

            const updatedProduct = await Product.findOneAndUpdate(
                {
                    foodId:productId
                }
                ,productData,
                {new:true});

            if (!updatedProduct){
                return res.status(404).json({error:'Product Not Found'});
            }

            res.status(200).json(updatedProduct);
        } catch (err) {
            console.error(err);
            res.status(500).json({error: 'something went wrong !'});
        }
    },

    deleteProduct:async function (req, res, next) {
        try {
            const productId = req.body.foodId;
            console.log("Product ID is "+productId);

            const product = await Product.deleteOne({id: productId});

            res.status(200).json(product);
        } catch (err) {
            console.error(err);
            res.status(500).json({error: 'something went wrong !'});
        }
    }


}

module.exports=ProductController