import { InputHTMLAttributes } from "react";

import styles from "./styles.module.scss";

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
    id: string;
    label?: string;
    labelStyle?: React.CSSProperties;
    prefixIcon?: React.ReactElement;
    style?: React.CSSProperties;
}

export function TextInput({ id, label, labelStyle, prefixIcon, style, ...props }: TextInputProps) {
    return (
        <div className={styles.wrapper}>
            {label && <label htmlFor={id} style={labelStyle}>{label}</label>}

            <div className={styles.inputContainer} style={style}>
                {prefixIcon &&
                    <label htmlFor={id} className={styles.iconInput}>
                        {prefixIcon}
                    </label>
                }

                <input
                    id={id}
                    {...props}
                />
            </div>
        </div>
    );
}