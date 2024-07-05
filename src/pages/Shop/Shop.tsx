import { useState, useEffect } from 'react';
import { LoupeIcon } from 'src/assets/icons/Loupe';
import styles from './Shop.module.scss';
import { MAX_PRODUCT_PRICE, MIN_PRODUCT_PRICE } from "src/shared/consts/price.ts";
import { store } from "src/shared/store/rootStore.ts";
import { RangeInputComponent } from "src/components/RangeInputComponent/RangeInputComponent.tsx";
import ProductCard from "src/components/ProductCard/ProductCard.tsx";
import { ProductSchema } from "src/shared/types/projectSchema.ts";
import Header from "src/components/Header/Header.tsx";
import Footer from "src/components/Footer/Footer.tsx";

export default function Shop() {
    const [products, setProducts] = useState<ProductSchema[]>([]);
    const [minPrice, setMinPrice] = useState(MIN_PRODUCT_PRICE);
    const [maxPrice, setMaxPrice] = useState(MAX_PRODUCT_PRICE);
    const [shopByValue, setShopByValue] = useState("none");
    const [sortByValue, setSortByValue] = useState("none");
    const [productNameInput, setProductNameInput] = useState("");

    useEffect(() => {
        setProducts(store.getState().products.products.slice(0, store.getState().products.products.length));
    }, []);

    return (
        <div className={styles.ShopPage}>
            <Header />
            <div className={styles.ContentWrapper}>
                <p className={styles.Text}>Shop</p>
                <div className={styles.ShopContent}>
                    <div className={styles.FiltersWrapper}>
                        <div className={styles.HighElementsWrapper}>
                            <div className={styles.SearchBarWrapper}>
                                <input className={styles.SearchBar} placeholder="Search..." onChange={(e) => setProductNameInput(e.target.value)} />
                                <LoupeIcon />
                            </div>
                            <select className={styles.FilterSelect} onChange={(e) => setShopByValue(e.target.value)}>
                                <option hidden={shopByValue !== "none"}>{shopByValue === "none" ? "Shop By" : "none"}</option>
                                {createShopByOptions()}
                            </select>
                            <select className={styles.FilterSelect} onChange={(e) => setSortByValue(e.target.value)}>
                                <option hidden={sortByValue !== "none"}>{sortByValue === "none" ? "Sort By" : "none"}</option>
                                {createSortByOptions()}
                            </select>
                            <RangeInputComponent
                                max={maxPrice}
                                min={minPrice}
                                setMin={setMinPrice}
                                setMax={setMaxPrice}
                            />
                        </div>
                    </div>
                    {products.length > 0 && (
                        <div className={styles.CardsWrapper}>
                            {products.map(({ id, image, price, title, category }) => {
                                if (checkFilters(category, title, price)) {
                                    return (
                                        <ProductCard
                                            key={id}
                                            url={image}
                                            price={price}
                                            name={title}
                                            id={id}
                                        />
                                    );
                                }
                                return null;
                            })}
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );

    function createShopByOptions() {
        return Array.from(
            new Set(products.map(product => product.category))
        ).map(element => <option key={element}>{element}</option>);
    }

    function createSortByOptions() {
        return Array.from(
            new Set(products.map(product => Math.ceil(product.price)))
        )
            .sort((a, b) => b - a)
            .map(element => <option key={element}>{element}</option>);
    }

    function checkFilters(category: string, title: string, price: number) {
        return (
            price <= maxPrice &&
            price >= minPrice &&
            title.toLowerCase().includes(productNameInput.toLowerCase()) &&
            (shopByValue !== "none" ? category === shopByValue : true)
        );
    }
}
