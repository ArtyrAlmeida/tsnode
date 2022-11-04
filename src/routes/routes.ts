import { Router } from "express";
import { findAllProducts, newProduct, working } from "../controllers/product";

const router = Router();

router.get('/', working);

router.post('/product', newProduct);

router.get('/product', findAllProducts)

export default router;