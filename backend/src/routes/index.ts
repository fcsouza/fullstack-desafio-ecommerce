import { Router } from 'express';

import productsRouter from './transactions.routes';

const routes = Router();

routes.use('/products', productsRouter);

export default routes;
