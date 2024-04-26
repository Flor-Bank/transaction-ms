import { IsNumber, IsString } from 'class-validator';

export class TransactionItemDto {
  @IsString()
  transactionTypeId: string;

  @IsNumber()
  amount: number;
}
