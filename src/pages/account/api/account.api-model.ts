export interface NewAccount {
  type: string;
  name: string;
}

export interface Account extends NewAccount {
  id: string;
  iban: string;
  balance: number;
  lastTransaction: string;
}

export interface AccountError {
  type: string;
  name: string;
}
