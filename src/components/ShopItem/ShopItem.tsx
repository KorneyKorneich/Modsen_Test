import styles from './ShopItem.module.scss'

interface ShopItemProps {
}


export const ShopItem = (props: ShopItemProps) => {
    const {} = props
    return (
        <>
            <div className={styles.card_container}>
                <img className={styles.card_img} alt={"jewelry"}
                         src={"data:image/jpeg;base64,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"}/>
                <div className={styles.card_description}>
                    <div className={styles.card_title}>Pipipupu</div>
                    <div className={styles.card_price}>2000</div>
                </div>


            </div>


        </>
    );
};