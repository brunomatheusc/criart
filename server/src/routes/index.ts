import { Router } from 'express';

import userRoutes from './user.routes';
import sessionRoutes from './session.routes';
import productsRoutes from './products.routes';

const routes = Router();

routes.use('/sessions', sessionRoutes);
routes.use('/users', userRoutes);
routes.use('/products', productsRoutes);

export default routes;