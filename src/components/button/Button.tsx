import React from 'react';
import {ButtonPropsType} from "./types";

export const Button: React.FC<ButtonPropsType> = (
    {
        red, light, className, width,
        ...restProps
    }
) => {

    return (
        <button

            style={{width}}
            {...restProps} // отдаём кнопке остальные пропсы если они есть (children там внутри)
        />
    );
};

