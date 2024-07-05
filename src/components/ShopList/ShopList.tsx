import styles from './ShopList.module.scss'
import {ProductSchema} from "src/shared/types/projectSchema.ts";
import {ShopItem} from "src/components/ShopItem/ShopItem.tsx";
import {Link} from "react-router-dom";
import {SHOP} from "src/shared/providers/routerProvider/routes.ts";

interface ShopListProps {
    products: ProductSchema[];
}


export const ShopList = (props: ShopListProps) => {
    const {products} = props
    return (
        <>
            <div className={styles.shop_list_container}></div>
            <div className={styles.article_title}>
                <h3>Shop the latest</h3>
                <Link className={styles.link} to={SHOP}>View all</Link>
            </div>
            <div className={styles.shop_list}>
                {products.map((product: ProductSchema) => {
                    return(
                        <ShopItem product={product} key={product.id} />
                    )
                })}
            </div>
        </>
    );
};
