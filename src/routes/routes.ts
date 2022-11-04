import { Router } from "express";
import { findAllProducts, findProductById, newProduct, updateProduct, working } from "../controllers/product";

const router = Router();

router.get('/', working);

router.post('/product', newProduct);

router.get('/product', findAllProducts);

router.get('/product/:product_id', findProductById);

router.put('/product/:product_id', updateProduct);

export default router;