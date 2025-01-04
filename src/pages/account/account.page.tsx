import { AppLayout } from '@/layouts';
import { AccountFormComponent } from './components/account-form.component';
import { useNavigate } from 'react-router-dom';
import classes from "./account.page.module.css";

import { NewAccount, saveAccount } from './api';

export const AccountPage: React.FC = () => {
    const navigate = useNavigate();

    const handleSubmit = async (account: NewAccount) => {
        try {
            await saveAccount(account);
            navigate("/account-list");
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <AppLayout>
            <div className={classes.root}>
                <div className={classes.headerContainer}>
                    <h1>Cuenta Bancaria</h1>
                </div>
                <AccountFormComponent onSubmit={handleSubmit} />
            </div>
        </AppLayout>
    );
};