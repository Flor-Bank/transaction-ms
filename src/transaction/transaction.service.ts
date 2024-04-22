import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { RpcException } from '@nestjs/microservices';

@Injectable()
export class TransactionService extends PrismaClient implements OnModuleInit {
  private readonly logger = new Logger('Transaction Service');
  async onModuleInit() {
    await this.$connect();
    this.logger.log('Connected to MongoDB');
  }
  async create(createTransactionDto: CreateTransactionDto) {
    try {
      const transaction = await this.transaction.create({
        data: createTransactionDto,
      });
      return transaction;
    } catch (error) {
      throw new RpcException({
        status: 400,
        message: error.message,
      });
    }
  }

  findAll() {
    return this.transaction.findMany({});
  }

  findOne(id: string) {
    return this.transaction.findFirst({
      where: { id },
    });
  }
  changeTransactionStatus() {
    return 'This action changes the status of a transaction';
  }
}
