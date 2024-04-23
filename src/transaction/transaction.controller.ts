import {
  Controller,
  HttpStatus,
  NotImplementedException,
  ParseUUIDPipe,
} from '@nestjs/common';
import { MessagePattern, Payload, RpcException } from '@nestjs/microservices';
import { TransactionService } from './transaction.service';
import { TransactionPaginationDto } from './dto/transaction-pagination.dto';
/* import { CreateTransactionDto } from './dto/create-transaction.dto'; */

@Controller()
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  @MessagePattern('transaction.create')
  create(/* @Payload() createTransactionDto: CreateTransactionDto */) {
    // return this.transactionService.create();
    throw new RpcException(NotImplementedException);
  }

  @MessagePattern('transaction.findAll')
  findAll(@Payload() transactionPaginationDto: TransactionPaginationDto) {
    return this.transactionService.findAll(transactionPaginationDto);
  }

  @MessagePattern('transaction.findOne')
  async findOne(@Payload('id', ParseUUIDPipe) id: string) {
    const transaction = await this.transactionService.findOne(id);

    if (!transaction) {
      throw new RpcException({
        status: HttpStatus.NOT_FOUND,
        message: `The transaction that you requested was not found`,
      });
    }
  }

  @MessagePattern('changeTransactionStatus')
  changeTransactionStatus() {
    /* return this.transactionService.changeTransactionStatus(); */
    throw new NotImplementedException();
  }
}
