import express from "express";
import router from "./auth.route";
import { getAllProducts } from "../controllers/product.controller.js";
import { productRoute } from "../middlewares/auth.middleware.js";

const Router = express.Router;

router.get("/", productRoute, getAllProducts)

export default Router;