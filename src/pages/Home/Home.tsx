import styles from './Home.module.scss';
import { Slider } from "src/components/Slider/Slider.tsx";
import { ShopList } from "src/components/ShopList/ShopList.tsx";
import { useEffect, useState } from "react";
import { ProductSchema, useAppDispatch } from "src/shared/types/projectSchema.ts";
import { getProducts } from "src/shared/asyncReducers/getProducts.ts";
import {getProductsList} from "src/shared/slices/products/selectors/getProductsList.ts";
import {useSelector} from "react-redux";
import Footer from "src/components/Footer/Footer.tsx";
import Header from "src/components/Header/Header.tsx";

export const Home = () => {
    const dispatch = useAppDispatch();
    const products = useSelector(getProductsList);

    const [productsList, setProductsList] = useState<ProductSchema[]>([]);

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    useEffect(() => {
        if (products) {
            setProductsList(products);
        }
    }, [products]);

    const images = productsList.map(el => el.image);

    return (
        <div className={styles.homeContainer}>
            <Header />
            <Slider images={images} />
            <ShopList products={productsList} />
            <Footer />
        </div>
    );
};
