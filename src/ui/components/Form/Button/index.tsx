import React from "react";
import styles from "./styles.module.scss";

interface IButtonProps {
    children?: React.ReactNode;
    className?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined; 
    prefixIcon?: React.ReactElement;
    suffixIcon?: React.ReactElement;
    style?: React.CSSProperties;
    onlyIcon?: boolean;
    disabled?: boolean;
}

function Button({ children, className, prefixIcon, suffixIcon, onlyIcon, style, disabled, onClick }: IButtonProps) {
    let buttonClassName = `${styles.button}`;
    buttonClassName += onlyIcon ? ` ${styles.onlyIcon}` : ` ${styles.default}`;
    if (className) buttonClassName += ` ${className}`;

    return (
        <div>
            <button
                onClick={onClick}
                disabled={disabled} style={style} className={buttonClassName}>
                    {prefixIcon}
                    {children}
                    {suffixIcon}
            </button>
        </div>
    );
}

export default Button;