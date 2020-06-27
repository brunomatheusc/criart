import { Router } from 'express';
import ProductsController from '../controllers/ProductsController';

const productsRoutes = Router();

productsRoutes.post('/', ProductsController.create);
productsRoutes.get('/', ProductsController.all);
productsRoutes.get('/:productId', ProductsController.getProductById);

export default productsRoutes;