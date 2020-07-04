import { getCustomRepository } from 'typeorm';

import AppError from '../errors/AppError';

import ProductsRepository from '../repositories/ProductsRepository';

import Product from '../models/Product';

interface Request {
  title: string;
  type: string;
  rating: number;
  price: number;
}

class CreateProductService {
  public async execute({
    title,
    type,
    rating,
    price,
  }: Request): Promise<Product> {
    const productsRepository = getCustomRepository(ProductsRepository);

    const product = productsRepository.create({
      title,
      type,
      rating,
      price
    });

    await productsRepository.save(product);

    return product;
  }
}

export default CreateProductService;
