import React, { PropsWithChildren } from "react";
import cx from "classnames";

import styles from "./card.module.scss";

export enum SizeType {
    S = "small",
    M = "medium",
    L = "large",
}

type CardProps =  {
    className?: string;
    variant?: string;
    type: "product" | "feedback" | "offer";
    size?: SizeType;
};

export const Card: React.FC<PropsWithChildren<CardProps>> = ({
    className,
    children,
    variant,
    type = "product",
    size = SizeType,
    ...rest
}) => (
    <div
        className={cx(
            // styles.card,
            styles[`card_${variant}`],
            styles[`card_${size}`],
            styles[`card_${type}`],
            className
        )}
        {...rest}
    >
        {children}
    </div>
);

