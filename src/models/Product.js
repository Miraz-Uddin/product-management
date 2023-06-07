import mongoose from "mongoose";

const Schema = mongoose.Schema({
  name: { type: String, required: true, default: `Product Name: ${Date.now}` },
  price: { type: Number, required: true, default: 100 },
  description: { type: String },
  createdAt: { type: Date, default: Date.now },
});

const Product = new mongoose.model("Product", Schema);

export default Product;
