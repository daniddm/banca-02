export interface NewAccount {
  type: string;
  name: string;
}

export interface AccountError {
  type: string;
  name: string;
}

export const createEmptyAccount = (): NewAccount => ({
  type: "",
  name: "",
});

export const createEmptyError = (): AccountError => ({
  type: "",
  name: "",
});
