export enum TransactionStatus {
  OPENED = 'OPENED',
  CLOSED = 'CLOSED',
}

export enum TransactionType {
  FIXED_TERM_DEPOSITE = 'FIXED_TERM_DEPOSITE',
  LOAN = 'LOAN',
  TRANSFER = 'TRANSFER',
}

export const TransactionStatusList = [
  TransactionStatus.OPENED,
  TransactionStatus.CLOSED,
];

export const TransactionTypeList = [
  TransactionType.FIXED_TERM_DEPOSITE,
  TransactionType.LOAN,
  TransactionType.TRANSFER,
];
