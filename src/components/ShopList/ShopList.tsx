import styles from './ShopList.module.scss'
import {ShopItem} from "src/components/ShopItem/ShopItem.tsx";

interface ShopListProps {
}


export const ShopList = (props: ShopListProps) => {
    const {} = props
    return (
        <>
            <div className={styles.shop_list_container}></div>
            <div className={styles.article_title}>
                <h3>Shop the latest</h3>
                <p>View all</p>
            </div>
            <div className={styles.shop_list}>
                <ShopItem />
                <ShopItem />
                <ShopItem />
                <ShopItem />
                <ShopItem />
                <ShopItem />
            </div>
        </>
    );
};
