import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Product.module.scss';
import {store} from "src/shared/store/rootStore.ts";
import Header from "src/components/Header/Header.tsx";
import {ProductDescription} from "src/components/ProductDescription/ProductDescription.tsx";
import ProductCard from "src/components/ProductCard/ProductCard.tsx";
import {ProductSchema} from "src/shared/types/projectSchema.ts";
import Footer from "src/components/Footer/Footer.tsx";
import {ImagesWrapper} from "src/components/ImageWrapper/ImageWrapper.tsx";

export function ProductPage() {
    const { productId } = useParams<{ productId: string }>();
    const [products, setProducts] = useState<ProductSchema[]>([]);
    const [product, setProduct] = useState<ProductSchema | undefined>();

    useEffect(() => {
        setTimeout(() => {
            const productsFromStore = store.getState().products.products.slice(0);
            setProducts(productsFromStore);
            const selectedProduct = productsFromStore.find((prod) => prod.id === Number(productId));
            setProduct(selectedProduct);
        }, 0);
    }, [productId]);

    return (
        <div className={styles.ProductPageWrapper}>
            <Header />
            <div className={styles.ContentWrapper}>
                <div className={styles.DescriptionWrapper}>
                    <ImagesWrapper product={product} />
                    <ProductDescription product={product} />
                </div>
                <p className={styles.SimilarItemsTitle}>Similar items</p>
                <div className={styles.SimilarItemsWrapper}>
                    {products.map(({ id, image, price, title, category }) => {
                        if (category === product?.category && id !== Number(productId)) {
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
                    })}
                </div>
            </div>
            <Footer />
        </div>
    );
}
