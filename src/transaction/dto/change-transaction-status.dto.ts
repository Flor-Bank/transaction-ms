import { IsEnum, IsUUID } from 'class-validator';
import {
  TransactionStatus,
  TransactionStatusList,
} from '../enum/transaction.enum';

export class ChangeTransactionStatusDto {
  @IsUUID(4)
  id: string;
  @IsEnum(TransactionStatusList, {
    message: `Valid status are ${TransactionStatusList}`,
  })
  status: TransactionStatus;
}
