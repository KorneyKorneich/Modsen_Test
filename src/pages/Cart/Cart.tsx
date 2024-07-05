import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import EyeIcon from '../../assets/icons/Eye.svg';
import styles from './Cart.module.scss';
import Header from "src/components/Header/Header.tsx";
import Footer from "src/components/Footer/Footer.tsx";
import {ProductSchema} from "src/shared/types/projectSchema.ts";
import {PRODUCT} from "src/shared/providers/routerProvider/routes.ts";
import {store} from "src/shared/store/rootStore.ts";
import {addToCart, CartItem, updateCartItem} from "src/shared/slices/cart/cartSlice.ts";

export function Cart() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cart: CartItem[] = useSelector((state: any) => state.cart.items);
    const products: ProductSchema[] = useSelector((state: any) => state.products.products);
    const isMenuOpened = useSelector((state: any) => state.isMenuOpened.value);

    const cartItemsWithProducts = cart.map((item) => {
        const product = products.find((p) => p.id === item.productId);
        return { ...item, product };
    });

    function handleUpdateCartItem(productId: number, quantity: number) {
        dispatch(updateCartItem({ productId, quantity }));
    }

    function handleAddToCart(product: ProductSchema, quantity: number) {
        dispatch(addToCart({ productId: product.id, quantity }));
    }

    return (
        <div className={styles.CartWrapper}>
            <Header />
            <div className={`${styles.ContentWrapper} ${isMenuOpened ? styles.hidden : ''}`}>
                <p className={styles.CartTitle}>
                    {store.getState().cart.items.length === 0 ? 'Cart is empty' : 'Cart'}
                </p>
                {cartItemsWithProducts.length > 0 && (
                    <div className={styles.ProductsWrapper}>
                        {cartItemsWithProducts.map((item) => (
                            <div key={item.product?.id} className={styles.CardContentWrapper}>
                                <div className={styles.TextWrapper}>
                                    <div className={styles.Image} style={{ backgroundImage: `url(${item.product?.image})` }} />
                                    <h3 className={styles.Name}>{item.product?.title}</h3>
                                    <p className={styles.Price}>${item.product?.price}</p>
                                </div>
                                <div className={styles.AddToCartButton}>
                                    <button className={styles.HoverButton} onClick={() => navigate(PRODUCT + '/' + item.product?.id)}>
                                        <EyeIcon />
                                    </button>
                                </div>
                                <div className={styles.ItemQuantityWrapper}>
                                    <button className={styles.ItemQuantityButton} onClick={() => handleUpdateCartItem(item.productId, item.quantity + 1)}>+</button>
                                    <p className={styles.ItemQuantityLabel}>{item.quantity}</p>
                                    <button className={styles.ItemQuantityButton} onClick={() => handleUpdateCartItem(item.productId, item.quantity - 1)}>-</button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
}
