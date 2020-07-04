import { getCustomRepository } from 'typeorm';
import fs from 'fs';

import Product from '../models/Product';

import ProductsRepository from '../repositories/ProductsRepository';

interface JSONProduction {
  title: string;
  type: string;
  rating: number;
  price: number;
}

class ImportProductsService {
  async execute(filePath: string): Promise<Product[]> {
    const productRepository = getCustomRepository(ProductsRepository);

    const productsJson = fs.readFileSync(filePath, "utf-8");
    const productsObjects: JSONProduction[] = JSON.parse(productsJson);

    const createdProducts = productRepository.create(
      productsObjects.map(product => ({
        title: product.title,
        type: product.type,
        rating: product.rating,
        price: product.price
      })),
    );

    await productRepository.save(createdProducts);

    fs.promises.unlink(filePath);

    return createdProducts;
  }
}

export default ImportProductsService;
