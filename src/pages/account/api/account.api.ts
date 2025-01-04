import Axios from "axios";
import { NewAccount, Account } from "./account.api-model";

const baseUrl = `${import.meta.env.VITE_BASE_API_URL}/account-list`;

export const saveAccount = (account: NewAccount): Promise<Account> =>
  Axios.post<Account>(baseUrl, account).then(({ data }) => data);