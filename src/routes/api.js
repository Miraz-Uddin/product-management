import express from "express";
import { home } from "../controllers/HomeController.js";
import {
  getAllProducts,
  storeProduct,
} from "../controllers/ProductController.js";
const router = express.Router();

router.get("/", home);
router.get("/products", getAllProducts);
router.post("/products", storeProduct);

export default router;
