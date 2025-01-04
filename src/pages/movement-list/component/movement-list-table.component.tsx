import React from "react";
import { MovementVm } from "../movement-list.vm";
import classes from "./movement-list-table.component.module.css";
import { MovementListItemComponent } from './movement-list-item.component';
import { AccountVm } from '@/pages/account-list/account-list.vm';

interface Props {
    movementList: MovementVm[];
    account: AccountVm | null;
}

export const MovementListTableComponent: React.FC<Props> = (props) => {
    const { movementList, account } = props;


    return (
        <>
            <div className={classes.accountHeader}>
                <span className={classes.accountAlias}>Alias: {account?.name}</span>
                <span className={classes.accountIban}>IBAN: {account?.iban}</span>
            </div>
            <div className={classes.gridContainer}>
                <div className={classes.headerTable}>
                    <span className={classes.headerCell}>FECHA</span>
                    <span className={classes.headerCell}>FECHA VALOR</span>
                    <span className={classes.headerCell}>DESCRIPCION</span>
                    <span className={classes.headerCell}>IMPORTE</span>
                    <span className={classes.headerCell}>SALDO DISPONIBLE</span>
                </div>

                {movementList.map((movement) => (
                    <MovementListItemComponent key={movement.id} movementItem={movement} />
                ))}
            </div>
        </>
    );
};
