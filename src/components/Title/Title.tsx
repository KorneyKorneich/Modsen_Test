import styles from "./Title.module.scss"
interface TitleProps {
}


export const Title = (props: TitleProps) => {
    const {} = props
    return (
        <>
            <div className={styles.title}>
                Modsen SHOPPE
            </div>
        </>
    );
};
