import { getCustomRepository, getRepository, In } from 'typeorm';
import csvParse from 'csv-parse';
import fs from 'fs';

import Product from '../models/Product';

import ProductsRepository from '../repositories/ProductsRepository';

interface CSVTransaction {
  title: string;
  type: string;
  rating: number;
  price: number;
}

class ImportProductsService {
  async execute(filePath: string): Promise<Product[]> {
    const productRepository = getCustomRepository(ProductsRepository);

    const productsReadStream = fs.createReadStream(filePath);

    const parses = csvParse({
      from_line: 2,
    });

    const parseCSV = productsReadStream.pipe(parses);

    const products: CSVTransaction[] = [];

    parseCSV.on('data', async line => {
      const [title, type, rating, price] = line.map((cell: string) =>
        cell.trim(),
      );

      if (!title || !type || !rating || !price) return;


      products.push({ title, type, rating, price });
    });

    await new Promise(resolve => parseCSV.on('end', resolve));

    const createdProducts = productRepository.create(
      products.map(product => ({
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
