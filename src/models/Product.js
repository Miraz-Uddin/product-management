import mongoose from "mongoose";

const collection = "Product";

const Schema = mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String },
  createdAt: { type: Date, default: Date.now },
});

const Product = new mongoose.model(collection, Schema);

export function getCollectionName() {
  return collection;
}

export default Product;
