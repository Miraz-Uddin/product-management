import {
  Delete,
  Modify,
  Search,
  SearchById,
  Store,
} from "../services/ProductService.js";

/**
 * Retrieve all products
 */
export async function getAllProducts(req, res) {
  const { status, code, message, data } = await Search({}, "name price");
  res.status(code).send({ status, message, data });
}

/**
 * Retrieve a Specific Product by ID
 */
export async function getSingleProduct(req, res) {
  const { status, code, message, data } = await SearchById(req.params.id);
  res.status(code).send({ status, message, data });
}

/**
 * Create a new Product
 */
export async function storeProduct(req, res) {
  const { status, code, message, data } = await Store(req.body);
  res.status(code).send({ status, message, data });
}

/**
 * Update an Existing Product
 */
export async function modifyProduct(req, res) {
  const filterParam = { _id: req.params.id };
  const { status, code, message, data } = await Modify(filterParam, req.body);
  res.status(code).send({ status, message, data });
}

/**
 * Delete an Existing Product
 */
export async function deleteProduct(req, res) {
  const { status, code, message, data } = await Delete({ _id: req.params.id });
  res.status(code).send({ status, message, data });
}
