import Axios from "axios";
import { Movement } from "./movement-list.api-model";
import { Account } from "@/pages/account-list/api/account-list.api-model";

const baseUrl = import.meta.env.VITE_BASE_API_URL;

export const getMovementListFromAccount = (accountId: string): Promise<Movement[]> =>
    Axios.get<Movement[]>(`${baseUrl}/movements`, {
      params: { accountId }
    }).then(({ data }) => data);

export const getAccountDetails = (accountId: string): Promise<Account> =>
  Axios.get<Account>(`${baseUrl}/account/${accountId}`).then(
    ({ data }) => data
  );

export const getAllMovements = (): Promise<Movement[]> =>
  Axios.get<Movement[]>(`${baseUrl}/movements`).then(({ data }) => data);
