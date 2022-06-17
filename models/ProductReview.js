const { Schema, model } = require("mongoose");

const productReviewSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: "User" },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
});

const ProductReview = model("ProductReview", productReviewSchema);

module.exports = ProductReview;