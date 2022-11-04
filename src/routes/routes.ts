import { Router } from "express";
import { newProduct, working } from "../controllers/product";

const router = Router();

router.get('/', working);

router.post('/product', newProduct);

export default router;