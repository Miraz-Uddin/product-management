import Product from "../models/Product.js";

/**
 * Retrieve all products
 */
export async function getAllProducts(req, res) {
  const allProducts = await Product.find().select("name price");
  return res.status(200).json({
    status: "success",
    total: allProducts?.length,
    data: allProducts,
  });
}

/**
 * Create a new Product
 */
export function storeProduct(req, res) {
  const newProduct = new Product(req.body);
  newProduct
    .save()
    .then((data) => {
      res.status(200).send({
        status: "success",
        data,
      });
    })
    .catch((err) => {
      console.log(err?.errors?.title?.message);
      res.status(404).send({
        status: "failed",
        data: {
          error: err?.errors?.title,
        },
      });
    });
}
