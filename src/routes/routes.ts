import { Router } from "express";
import { deleteProduct, findAllProducts, findProductById, newProduct, updateProduct, working } from "../controllers/product";

const router = Router();

router.get('/', working);

router.post('/product', newProduct);

router.get('/product', findAllProducts);

router.get('/product/:product_id', findProductById);

router.put('/product/:product_id', updateProduct);

router.delete('/product/:product_id', deleteProduct)

export default router;