import { Injectable } from '@nestjs/common';
// import { CreateTransactionDto } from './dto/create-transaction.dto';

@Injectable()
export class TransactionService {
  create(/* createTransactionDto: CreateTransactionDto */) {
    return 'This action adds a new transaction';
  }

  findAll() {
    return `This action returns all transaction`;
  }

  findOne(id: number) {
    return `This action returns a #${id} transaction`;
  }
  changeTransactionStatus() {
    return 'This action changes the status of a transaction';
  }
}
