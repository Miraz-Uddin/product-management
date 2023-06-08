import express from "express";
import { login } from "../controllers/AuthController.js";
import { home } from "../controllers/HomeController.js";
import {
  deleteProduct,
  getAllProducts,
  getSingleProduct,
  modifyProduct,
  storeProduct,
} from "../controllers/ProductController.js";
import { getProfileData } from "../controllers/ProfileController.js";
import verifyToken from "../utils/token/verifyToken.js";

const router = express.Router();
router.get("/", home);
router.get("/products", getAllProducts);
router.post("/products", storeProduct);
router.get("/products/:id", getSingleProduct);
router.put("/products/:id", modifyProduct);
router.delete("/products/:id", deleteProduct);
router.get("/login", login);
router.get("/profile", verifyToken, getProfileData);

export default router;
