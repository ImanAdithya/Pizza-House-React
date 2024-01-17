const Order = require('../model/Order');

const OrderController = {
    saveOrder: async function (req, res, next) {
        try {
            const { orderId, customerName, subtotal, itemCart } = req.body;

            const newOrder = {
                orderId,
                customerName,
                subtotal,
                itemCart,
            };

            const savedOrder = await Order.create(newOrder);

            // Respond with the saved order
            res.status(200).json(savedOrder);

        } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'Something went wrong!' });
        }
    },
};

module.exports = OrderController;
