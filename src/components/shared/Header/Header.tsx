import styles from './Header.module.scss'
import {Title} from "src/components/Title/Title.tsx";
import {Navbar} from "src/components/Navbar/Navbar.tsx";

interface HeaderProps {
}


export const Header = (props: HeaderProps) => {
    const {} = props
    return (
        <>
            <div className={styles.headerContainer}>
                <Title />
                <Navbar />
            </div>

        </>
    );
};
