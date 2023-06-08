import express from "express";
import { home } from "../controllers/HomeController.js";
import {
  deleteProduct,
  getAllProducts,
  getSingleProduct,
  modifyProduct,
  storeProduct,
} from "../controllers/ProductController.js";
const router = express.Router();

router.get("/", home);
router.get("/products", getAllProducts);
router.post("/products", storeProduct);
router.get("/products/:id", getSingleProduct);
router.put("/products/:id", modifyProduct);
router.delete("/products/:id", deleteProduct);

export default router;
