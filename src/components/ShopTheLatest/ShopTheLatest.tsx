import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styles from './ShopTheLatest.module.scss';
import {store} from "src/shared/store/rootStore.ts";
import ProductCard from "src/components/ProductCard/ProductCard.tsx";
import {SHOP} from "src/shared/providers/routerProvider/routes.ts";
import {ProductSchema} from "src/shared/types/projectSchema.ts";

export default function ShopTheLatest() {
    const navigate = useNavigate();
    const [products, setProducts] = useState<ProductSchema[]>([]);

    useEffect(() => {
        setTimeout(() => {
            setProducts(store.getState().products.products.slice(0, 6));
        }, 0);
    }, [products]);

    return (
        <div className={`${styles.ShopTheLatestWrapper} ${useSelector((state: any) => state.isMenuOpened.value) ? styles.isOpened : ''}`}>
            <div className={styles.HeadButtons}>
                <div className={styles.HeadLink}>Shop The Latest</div>
                <div className={styles.ViewAllLink} onClick={() => navigate(SHOP)}>View All</div>
            </div>
            {products.length > 0 && (
                <div className={styles.CardsContainer}>
                    {products.map(({id, image, price, title}) => {
                        return (
                            <ProductCard
                                key={id}
                                url={image}
                                price={price}
                                name={title}
                                id={id}
                            />
                        );
                    })}
                </div>
            )}
        </div>
    );
}
