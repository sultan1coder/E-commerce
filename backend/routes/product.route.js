import express from "express";
import router from "./auth.route.js";
import { getAllProducts } from "../controllers/product.controller.js";
import { adminRoute, protectRoute } from "../middlewares/auth.middleware.js";

const Router = express.Router;

router.get("/", protectRoute, adminRoute, getAllProducts)

export default Router;