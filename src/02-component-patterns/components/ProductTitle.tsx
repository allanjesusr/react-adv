import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from '../styles/styles.module.css';

export const ProductTitle = ({ title }: { title?: string }) => {
    // const { product } = useContext( ProductContext );
    // let titleShow: string 

    // if ( title ) {
    //     titleShow = title
    // } else {
    //     titleShow = product.title;
    // }

    // return (
    //     <span className={ styles.productDescription }>{ titleShow }</span>
    // );

    const { product } = useContext( ProductContext );
    
    return (
        <span className={ styles.productDescription }>{ title ? title : product.title  }</span>
    );
}
