import express from "express";
import { createProduct, deleteProduct, getAllProducts, getFeaturedProducts, getRecommendedProducts } from "../controllers/product.controller.js";
import { adminRoute, protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/", protectRoute, adminRoute, getAllProducts);
router.get("/featured", getFeaturedProducts);
router.get("/recommendations", getRecommendedProducts);
router.post("/", adminRoute, protectRoute, createProduct);
router.delete("/:id", adminRoute, protectRoute, deleteProduct);

export default router;