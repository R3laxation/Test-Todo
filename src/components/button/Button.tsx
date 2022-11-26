import React from 'react';
import {ButtonPropsType} from "./types";
import styles from './Button.module.scss';

export const Button: React.FC<ButtonPropsType> = (
    {
        red, light, className, width,
        ...restProps
    }
) => {

    const finalClassName = `${red ? styles.red : styles.default}  ${light ? styles.light : styles.default} ${className}`

    return (
        <button
            className={finalClassName}
            style={{width}}
            {...restProps} // отдаём кнопке остальные пропсы если они есть (children там внутри)
        />
    );
};

