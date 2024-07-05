import { useDispatch } from "react-redux";
import { StarIcon } from "src/assets/icons/Star";
import { EnvelopeIcon } from "src/assets/icons/Envelope";
import { FacebookIcon } from "src/assets/icons/Facebook";
import { InstagramIcon } from "src/assets/icons/Instagram";
import { TwitterIcon } from "src/assets/icons/Twitter";
import styles from "./ProductDescription.module.scss";
import {ProductSchema} from "src/shared/types/projectSchema.ts";
import {addToCart} from "src/shared/slices/cart/cartSlice.ts";
import {isItemInCart} from "src/shared/utils/utils.ts";

interface Props {
    product: ProductSchema | undefined;
}

export function ProductDescription({ product }: Props) {
    const dispatch = useDispatch();

    const handleAddToCart = (productId: number, quantity: number) => {
        dispatch(addToCart({ productId, quantity }));
    };

    return (
        <div className={styles.DataWrapper}>
            <h2 className={styles.Name}>{product?.title}</h2>
            <h2 className={styles.Price}>$ {product?.price}</h2>
            <button
                className={styles.AddToCartButton}
                onClick={() => handleAddToCart(Number(product?.id), 1)}
            >
                {isItemInCart(Number(product?.id)) ? "В корзину" : "Из корзины"}
            </button>
            <div className={styles.RatingWrapper}>
                <div className={styles.ReviewsData}>
                    <StarIcon />
                    <p className={styles.RatingNumber}>{product?.price}</p>
                    <p className={styles.ReviewsText}>{product?.price + " customer reviews"}</p>
                </div>
                <p className={styles.ReviewsText}>{product?.description}</p>
                <div className={styles.SocialNetworksIconsWrapper}>
                    <EnvelopeIcon />
                    <FacebookIcon  />
                    <InstagramIcon />
                    <TwitterIcon />
                </div>
                <p className={styles.CategoriesText}>
                    Categories:
                    <span className={styles.CategoriesSpan}>{product?.category}</span>
                </p>
            </div>

        </div>
    );
}
