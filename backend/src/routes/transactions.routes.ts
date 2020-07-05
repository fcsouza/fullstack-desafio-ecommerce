import { Router } from 'express';
import multer from 'multer';

import { getCustomRepository } from 'typeorm';

import ProductsRepository from '../repositories/ProductsRepository';

import CreateProductService from '../services/CreateProductService';
import UpdateProductService from '../services/UpdateProductService';
import DeleteProductService from '../services/DeleteProductService';

import ImportProductsService from '../services/ImportProductsService';

import uploadConfig from '../config/upload';

const upload = multer(uploadConfig);

const productsRouter = Router();

productsRouter.post('/', async (request, response) => {
  const { title, type, rating, price } = request.body;

  const createProduct = new CreateProductService();

  const product = await createProduct.execute({
    title,
    type,
    rating,
    price,
  });

  return response.json(product);
});

productsRouter.get('/', async (request, response) => {
  const productsRepository = getCustomRepository(ProductsRepository);

  const products = await productsRepository.find();

  return response.json( products );
});

productsRouter.get('/:productId', async (request, response) => {
  const { productId } = request.params;

  const productsRepository = getCustomRepository(ProductsRepository);

  const product = await productsRepository.findOne(productId);


  return response.json( product );
});


productsRouter.put('/:productId', async (request, response) => {
  const { productId } = request.params;

  const updateTransaction = new UpdateProductService();

  const product = await updateTransaction.execute(productId,request.body);

  return response.json(product);
});


productsRouter.delete('/:id', async (request, response) => {
  const { id } = request.params;

  const deleteProduct = new DeleteProductService();

  await deleteProduct.execute(id);

  return response.status(204).send();
});

productsRouter.post(
  '/import',
  upload.single('file'),
  async (request, response) => {
    const importTransactions = new ImportProductsService();

    const transactions = await importTransactions.execute(request.file.path);

    return response.json(transactions);
  },
);

export default productsRouter;
