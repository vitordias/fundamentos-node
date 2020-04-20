import TransactionsRepository from '../repositories/TransactionsRepository';
import Transaction from '../models/Transaction';

interface Request {
  type: 'income' | 'outcome';
  value: number;
  title: string;
}

class CreateTransactionService {
  private transactionsRepository: TransactionsRepository;

  constructor(transactionsRepository: TransactionsRepository) {
    this.transactionsRepository = transactionsRepository;
  }

  public execute({ title, value, type }: Request): Transaction {
    const balance = this.transactionsRepository.getBalance();

    switch (type) {
      case 'income':
        break;
      case 'outcome':
        // Valida o valor total
        if (balance.total - value < 0) {
          throw Error('string');
        }
        break;
      default:
        throw Error('This type is incorrect');
    }

    const transaction = this.transactionsRepository.create({
      title,
      value,
      type,
    });

    return transaction;
  }
}

export default CreateTransactionService;
