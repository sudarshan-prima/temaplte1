import React, { PropsWithChildren } from "react";

import { Card } from ".";

export enum BorderType {
    DASHED = "dashed",
    SOLID = "solid",
    DOTTED = "dotted"
}
// export enum SizeType {
//     S = "small",
//     M = "medium",
//     L = "large",
// }

type ProductCardProps =  {
    className?: string;
    size?: string;
    variant: string;
};

export const ProductCard: React.FC<PropsWithChildren<ProductCardProps>> = ({
    className,
    children,
    size ,
    variant,
    ...rest
}) => (
   
    <Card type='product' variant={variant}>
        <h2>hello</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo provident dolorem sapiente?</p>
    </Card>
);

