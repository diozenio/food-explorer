import { ReactNode, CSSProperties } from "react";

import styles from "./styles.module.scss";

interface AnchorProps {
    children: ReactNode;
    onClick: React.MouseEventHandler<HTMLSpanElement> | undefined;
    style?: CSSProperties;
}

export function Anchor({ children, onClick, style }: AnchorProps) {
    return (
        <span
            className={styles.anchor}
            style={style}
            onClick={onClick}
        >
            {children}
        </span>
    );
}