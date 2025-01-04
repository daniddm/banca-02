import React from "react";
import { MovementVm } from './movement-list.vm';
import { getAccountDetails, getAllMovements, getMovementListFromAccount } from './api/movement-list.api';
import { AppLayout } from '@/layouts';
import classes from './movement-list.page.module.css';
import { MovementListTableComponent } from './component/movement-list-table.component';
import { useNavigate, useParams } from 'react-router-dom';
import { mapMovementListFromApiToVm } from './movement-list.mapper';
import { AccountVm } from '../account-list/account-list.vm';
import { mapAccountListFromApiToVm } from '../account-list/account-list.mapper';

export const MovementListPage: React.FC = () => {
    const [movementList, setMovementList] = React.useState<MovementVm[]>([]);
    const [account, setAccount] = React.useState<AccountVm | null>(null);

    const [isLoading, setIsLoading] = React.useState(false);
    const { id } = useParams();
    const navigate = useNavigate();

    React.useEffect(() => {
        if (id) {
            Promise.all([
                getMovementListFromAccount(id),
                getAccountDetails(id)
            ])
                .then(([movements, accountData]) => {
                    setMovementList(mapMovementListFromApiToVm(movements));
                    setAccount(mapAccountListFromApiToVm([accountData])[0]);
                })
                .finally(() => setIsLoading(false));
        } else {
            getAllMovements()
                .then((movements) => {
                    setMovementList(mapMovementListFromApiToVm(movements));
                })
                .finally(() => setIsLoading(false));
        }


    }, [id, navigate]);

    return (
        <AppLayout>
            <div className={classes.root}>
                <div className={classes.headerContainer}>
                    <h1>Saldos y Últimos movimientos</h1>
                    <div className={classes.accountInfo}>
                        <h1>SALDO DISPONIBLE</h1>
                        <div className={`${ classes.dataCell } ${ classes.alignRight }`}>
                            {movementList.length > 0
                                ? `${ movementList[0].balance } €`
                                : '0 €'
                            }
                        </div>
                    </div>
                </div>
                {isLoading ? (
                    <div>Loading...</div>
                ) : (
                    <MovementListTableComponent movementList={movementList} account={account} />
                )}
            </div>
        </AppLayout>
    );
};