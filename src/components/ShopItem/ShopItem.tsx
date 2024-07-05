import styles from './ShopItem.module.scss'
import {ProductSchema} from "src/shared/types/projectSchema.ts";

interface ShopItemProps {
    product: ProductSchema
}


export const ShopItem = (props: ShopItemProps) => {
    const {product} = props
    return (
        <>
            <div className={styles.card_container}>
                <img className={styles.card_img} alt={product.title}
                         src={product.image}/>
                <div className={styles.card_description}>
                    <div className={styles.card_title}>{product.title}</div>
                    <div className={styles.card_price}>{product.price}</div>
                </div>


            </div>


        </>
    );
};
