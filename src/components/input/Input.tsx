import React, {ChangeEvent, KeyboardEvent} from 'react';
import {InputTextPropsType} from "./types";
import styles from './Input.module.scss';

export const Input: React.FC<InputTextPropsType> = (
    {
        type, onChange,
        onChangeText, onKeyPress,
        onEnter,error,
        className, spanClassName,
        resetError, ...restProps
    }
) => {

    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange // если есть пропс onChange
        && onChange(e) // то передать ему е (поскольку onChange не обязателен)

        onChangeText && onChangeText(e.currentTarget.value)
        resetError?.();
    };

    const onKeyPressCallback = (e: KeyboardEvent<HTMLInputElement>) => {
        onKeyPress && onKeyPress(e);
        onEnter // если есть пропс onEnter
        && e.key === 'Enter' // и если нажата кнопка Enter
        && onEnter() // то вызвать его
        resetError && resetError();
    };


    const finalSpanClassName = `${error ? styles.error : ''} ${spanClassName}`
    const finalInputClassName = `${className} ${styles.superInput} ${error ? styles.errorInput : ''}`

    return (
        <>
            <input
                type={'text'}
                onChange={onChangeCallback}
                onKeyPress={onKeyPressCallback}
                className={finalInputClassName}

                {...restProps} // отдаём инпуту остальные пропсы если они есть (value например там внутри)
            />
            {error && <span className={finalSpanClassName}>{error}</span>}
        </>
    );
};

