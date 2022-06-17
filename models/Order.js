const { Schema, model } = require("mongoose");

const orderSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: "User" },
    products: [{ type: Schema.Types.ObjectId, ref: "Product" }],
    status: { type: String, required: true, default: "pending" },
})

const Order = model("Order", orderSchema);

module.exports = Order;