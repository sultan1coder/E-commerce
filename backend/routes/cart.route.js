import express from "express";
import { addToCart, removeAllFromCart } from "../controllers/cart.controller.js";
import { adminRoute, protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/", protectRoute, getCartProducts)
router.post("/", protectRoute, addToCart)
router.delete("/", protectRoute, removeAllFromCart)
router.put("/", protectRoute, updateQuantity)

export default router;