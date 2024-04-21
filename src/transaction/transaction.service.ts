import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
// import { CreateTransactionDto } from './dto/create-transaction.dto';

@Injectable()
export class TransactionService extends PrismaClient implements OnModuleInit {
  private readonly logger = new Logger('Transaction Service');
  async onModuleInit() {
    await this.$connect();
    this.logger.log('Connected to MongoDB');
  }
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
