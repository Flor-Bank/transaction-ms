import { Controller, NotImplementedException } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
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

  @MessagePattern('findOneTransaction')
  findOne(@Payload() id: number) {
    return this.transactionService.findOne(id);
  }

  @MessagePattern('changeTransactionStatus')
  changeTransactionStatus() {
    /* return this.transactionService.changeTransactionStatus(); */
    throw new NotImplementedException();
  }
}
