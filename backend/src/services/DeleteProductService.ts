import { getRepository } from 'typeorm';

import AppError from '../errors/AppError';

import Product from '../models/Product';

class DeleteProductService {
  public async execute(id: string): Promise<void> {
    const productsRepository = getRepository(Product);

    const product = await productsRepository.findOne(id);

    if (!product) {
      throw new AppError('Product does not exist');
    }

    await productsRepository.remove(product);
  }
}

export default DeleteProductService;
