const { Schema, model } = require("mongoose");
const ProductReview = require("./ProductReview");

const productSchema = new Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    category: { type: String, required: true },
    reviews: [{ type: Schema.Types.ObjectId, ref: "ProductReview" }],

});

const Product = model("Product", productSchema);

module.exports = Product;