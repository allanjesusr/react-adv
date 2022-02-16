import { Props as ProductCardProps } from "../components/ProductCard";
import { ButtonsProps } from "../components/ProductButtons";
import { ImageProps } from "../components/ProductImage";
import { TitleProps } from "../components/ProductTitle";


export interface Product {
    id: string;
    img?: string;
    title: string;
}

export interface ProductContextProps {
    counter: number;
    product: Product;
    increaseBy: (value: number) => void;
}

export interface ProductCardHOCProps {
    ({ children, product }: ProductCardProps ): JSX.Element,
    Buttons: (Props: ButtonsProps ) => JSX.Element,
    Image: ( Props: ImageProps ) => JSX.Element,
    Title: ( Props: TitleProps ) => JSX.Element,
}