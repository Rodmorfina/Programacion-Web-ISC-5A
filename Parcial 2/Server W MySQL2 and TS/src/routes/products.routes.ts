import { Router } from "express";
import { ProductController } from "../controllers/products.controller.ts";

const productController = new ProductController();
const router = Router();

router.get('/', productController.getProducts);
router.get('/:id', productController.getProduct);
router.post('/', productController.createProduct);
router.put('/:id', productController.updateProduct);
router.delete('/:id', productController.deleteProduct);
router.patch('/:id/price', productController.changePriceProduct);

//Mandar el router a otro archivongo
export default router;