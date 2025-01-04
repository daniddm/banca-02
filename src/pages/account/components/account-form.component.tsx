import React from "react";
import { NewAccount, AccountError } from "../vm/account.vm";
import classes from "./account-form.component.module.css";

interface Props {
    onSubmit: (account: NewAccount) => void;
    initialAccount?: NewAccount;
}

export const AccountFormComponent: React.FC<Props> = (props) => {
    const { onSubmit } = props;
    const [account, setAccount] = React.useState<NewAccount>({
        type: "",
        name: "",
    });
    const [errors, setErrors] = React.useState<AccountError>({
        type: "",
        name: "",
    });

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (validateForm()) {
            onSubmit(account);
        }
    };

    const validateForm = (): boolean => {
        const newErrors = {
            type: "",
            name: "",
        };
        let isValid = true;

        if (!account.type) {
            newErrors.type = "Debe seleccionar un tipo de cuenta";
            isValid = false;
        }

        if (!account.name) {
            newErrors.name = "Debe introducir un alias";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleInputChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = event.target;
        setAccount((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    return (
        <form onSubmit={handleSubmit} className={classes.formContainer}>
            <div className={classes.formGroup}>
                <label htmlFor="type">Tipo de cuenta:</label>
                <select
                    id="type"
                    name="type"
                    value={account.type}
                    onChange={handleInputChange}
                    className={classes.select}
                    required
                >
                    <option value="">Seleccionar</option>
                    <option value="1">Cuenta Corriente</option>
                    <option value="2">Cuenta de Ahorro</option>
                </select>
                {errors.type && <p className={classes.error}>{errors.type}</p>}
            </div>

            <div className={classes.formGroup}>
                <label htmlFor="name">Alias:</label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    value={account.name}
                    onChange={handleInputChange}
                    className={classes.input}
                    required
                />
                {errors.name && <p className={classes.error}>{errors.name}</p>}
            </div>
            <div className={classes.dividerLine}></div>


            <div className={classes.buttonContainer}>
                <button type="submit" className={classes.button}>
                    GUARDAR
                </button>
            </div>
        </form>
    );
};