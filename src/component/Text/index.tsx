import React, { PropsWithChildren } from "react";
import cx from "classnames";

import styles from "./text.module.scss";

export enum FontType {
    HEADING_XXL = "heading_xxl",
    HEADING_XL = "heading_xl",
    HEADING_L = "heading_lg",
    HEADING_M = "heading_md",
    HEADING_S = "heading_sm",
    SUBHEADING_L = "subheading_lg",
    SUBHEADING_M = "subheading_md",
    SUBHEADING_S = "subheading_sm",
    TITLE = "title",
    BODY = "body",
    LABEL_L = "label_lg",
    LABEL_M = "label_md",
    LABEL_S = "label_sm",
}

export enum ColorType {
    WHITE = "white",
    BLACK = "black",
    COOL_BLACK = "cool_black",
    GREY = "grey",
    PRIMARY = 'primary',
    SECONDARY='secondary',
    TERTIARY='tertiary'
}

export enum FontFamily {
    ROBOTO = "roboto",
}

type TagType = keyof Pick<
    JSX.IntrinsicElements,
    "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "label"
>;

type TextProps = {
    className?: string;
    color?: ColorType;
    font?: FontType;
    weight?: number | string;
    type?: TagType;
    onClick?: (e: any) => void;
    htmlFor?: string;
    family?: string;
    style?: any;
};

export const Text: React.FC<PropsWithChildren<TextProps>> = ({
    type: Element = "p",
    color,
    font = FontType.BODY,
    weight = 400,
    className,
    children,
    onClick,
    htmlFor,
    family = FontFamily.ROBOTO,
    style,
}) => (
    <Element
        className={cx(
            className,
            styles[`text__${font}`],
            styles[`text__${color}`],
            styles[`text__${weight}`],
            styles[`text__${family}`]
        )}
        onClick={onClick}
        htmlFor={htmlFor}
        style={style}
    >
        {children}
    </Element>
);
