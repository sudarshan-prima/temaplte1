import React, { PropsWithChildren } from "react";
import cx from "classnames";

import styles from "./button.module.scss";

export enum VariantType {
    SOLID = "solid",
    OUTLINED = "outline",
}
export enum SizeType {
    S = "small",
    M = "medium",
    L = "large",
}

type ButtonProps =  {
    className?: string;
    variant?: VariantType;
    type: "submit" | "reset" | "button";
    size?: SizeType;
};

export const Button: React.FC<PropsWithChildren<ButtonProps>> = ({
    className,
    children,
    variant = VariantType.SOLID,
    type = "button",
    size = SizeType,
    ...rest
}) => (
    <button
        type={type}
        className={cx(
            styles.btn,
            styles[`btn_${variant}`],
            styles[`btn_${size}`],
            className
        )}
        {...rest}
    >
        {children}
    </button>
);

