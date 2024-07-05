import React from 'react';
import styles from './ProductCard.module.scss';
import {CartIcon} from 'src/assets/icons/Cart.tsx';
import EyeIcon from 'src/assets/icons/Eye.svg';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {PRODUCT} from "src/shared/providers/routerProvider/routes.ts";
import {addToCart} from "src/shared/slices/cart/cartSlice.ts";

interface Props {
    name: string;
    price: number;
    url: string;
    id: number;
}

const ProductCard: React.FC<Props> = ({ name, price, url, id }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleAddToCart = (productId: number, quantity: number) => {
        dispatch(addToCart({ productId, quantity }));
    };

    return (
        <div className={styles.CardContentWrapper}>
            <div className={styles.TextWrapper}>
                <div className={styles.Image} style={{ backgroundImage: `url(${url})` }} />
                <h3 className={styles.Name}>{name}</h3>
                <p className={styles.Price}>$ {price}</p>
            </div>
            <div className={styles.AddToCartButton}>
                <button className={styles.HoverButton} onClick={() => handleAddToCart(id, 1)}>
                    <CartIcon />
                </button>
                <button className={styles.HoverButton} onClick={() => navigate(`${PRODUCT}/${id}`)}>
                    <EyeIcon />
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
