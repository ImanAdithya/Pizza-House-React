const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    name: { type: String, required: true },
    des: { type: String, required: true },
    price: { type: String, required: true },
    image: { type: String}
});

const itemCartSchema = new mongoose.Schema({
    product: { type: productSchema, required: true },
    itemCount: { type: Number, required: true }
});

const orderSchema = new mongoose.Schema({
    orderId: { type: String, required: true },
    customerName: { type: String, required: true },
    subtotal: { type: Number, required: true },
    itemCart: { type: [itemCartSchema], required: true }
});

const OrderModel = mongoose.model('Order', orderSchema);

module.exports = OrderModel;
