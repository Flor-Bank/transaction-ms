import { IsEnum, IsNumber, IsPositive, IsString } from 'class-validator';
import {
  TransactionStatus,
  TransactionStatusList,
  TransactionType,
  TransactionTypeList,
} from '../enum/transaction.enum';

export class CreateTransactionDto {
  @IsString()
  fromAccount: string;
  @IsString()
  toAccount: string;
  @IsNumber()
  @IsPositive()
  amount: number;
  @IsEnum(TransactionStatusList, {
    message:
      'Transaction status is invalid, only valid ${TransactionStatusList}',
  })
  status: TransactionStatus;
  @IsEnum(TransactionTypeList, {
    message: 'Transaction status is invalid, only valid ${TransactionTypeList}',
  })
  type: TransactionType;
}
