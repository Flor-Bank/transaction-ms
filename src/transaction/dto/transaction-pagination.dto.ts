import { IsEnum, IsOptional } from 'class-validator';
import {
  TransactionStatus,
  TransactionStatusList,
} from '../enum/transaction.enum';
import { PaginationDto } from 'src/common/dto/pagination.dto';

export class TransactionPaginationDto extends PaginationDto {
  @IsOptional()
  @IsEnum(TransactionStatusList, {
    message: `Valid status are ${TransactionStatusList}`,
  })
  status: TransactionStatus;
}
