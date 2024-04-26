import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { RpcException } from '@nestjs/microservices';
import { TransactionPaginationDto } from './dto/transaction-pagination.dto';
import { ChangeTransactionStatusDto } from './dto/change-transaction-status.dto';

@Injectable()
export class TransactionService extends PrismaClient implements OnModuleInit {
  private readonly logger = new Logger('Transaction Service');
  async onModuleInit() {
    await this.$connect();
    this.logger.log('Connected to MongoDB');
  }
  async create(createTransactionDto: CreateTransactionDto) {
    try {
      return {
        message: 'Transaction created successfully',
      };
      // const transaction = await this.transaction.create({
      //   data: createTransactionDto,
      // });
      // return transaction;
    } catch (error) {
      throw new RpcException({
        status: 400,
        message: error.message,
      });
    }
  }

  async findAll(transactionPaginationDto: TransactionPaginationDto) {
    const totalPages = await this.transaction.count({
      where: {
        status: transactionPaginationDto.status,
      },
    });

    const currentPage = transactionPaginationDto.page;
    const perPage = transactionPaginationDto.limit;
    return {
      data: await this.transaction.findMany({
        skip: (currentPage - 1) * perPage,
        take: perPage,
        where: {
          status: transactionPaginationDto.status,
        },
      }),
      meta: {
        total: totalPages,
        page: currentPage,
        lastPage: Math.ceil(totalPages / perPage),
      },
    };
  }

  findOne(id: string) {
    return this.transaction.findFirst({
      where: { id },
    });
  }
  async changeTransactionStatus(
    changeTransactionStatusDto: ChangeTransactionStatusDto,
  ) {
    const { id, status } = changeTransactionStatusDto;
    const transaction = await this.findOne(id);
    if (transaction.status === status) {
      return transaction;
    }
    //update transaction status
    return this.transaction.update({
      where: { id },
      data: {
        status: status,
      },
    });
  }
}
