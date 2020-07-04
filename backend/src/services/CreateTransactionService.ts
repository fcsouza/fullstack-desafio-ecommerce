import { getCustomRepository, getRepository } from 'typeorm';

import AppError from '../errors/AppError';

import TransactionsRepository from '../repositories/TransactionsRepository';

import Transaction from '../models/Transaction';
//import Category from '../models/Category';

interface Request {
  title: string;
  type: string;
  rating: number;
  price: number;
}

class CreateTransactionService {
  public async execute({
    title,
    type,
    rating,
    price,
  }: Request): Promise<Transaction> {
    const transactionsRepository = getCustomRepository(TransactionsRepository);

    const transaction = transactionsRepository.create({
      title,
      type,
      rating,
      price
    });

    await transactionsRepository.save(transaction);

    return transaction;
  }
}

export default CreateTransactionService;
