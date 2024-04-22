import {
  Controller,
  HttpStatus,
  NotImplementedException,
  ParseUUIDPipe,
} from '@nestjs/common';
import { MessagePattern, Payload, RpcException } from '@nestjs/microservices';
import { TransactionService } from './transaction.service';
/* import { CreateTransactionDto } from './dto/create-transaction.dto'; */

@Controller()
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  @MessagePattern('createTransaction')
  create(/* @Payload() createTransactionDto: CreateTransactionDto */) {
    return this.transactionService.create();
  }

  @MessagePattern('findAllTransaction')
  findAll() {
    return this.transactionService.findAll();
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
