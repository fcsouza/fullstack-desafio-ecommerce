import { getCustomRepository } from 'typeorm';

import ProductsRepository from '../repositories/ProductsRepository';

import AppError from '../errors/AppError';

import Product from '../models/Product';

interface Request {
  title: string;
  type: string;
  rating: number;
  price: number;
}

class UpdateProductService {
  public async execute(id:string, body
  : Request): Promise<Product> {

    const productsRepository = getCustomRepository(ProductsRepository);

    const product = await productsRepository.findOne(id);

    if (!product) {
      throw new AppError('Product does not exist');
    }

    await productsRepository.update(id, body);
    const updated = await productsRepository.findOne(id);

    return updated!;
  }
}

export default UpdateProductService;
