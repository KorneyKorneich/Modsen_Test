import styles from './Navbar.module.scss'
import SearchIcon from "../../assets/icons/search.svg"
import CartIcon from "../../assets/icons/cart.svg"
import {Switcher} from "src/components/shared/Switcher/Switcher.tsx";

interface NavbarProps {
}


export const Navbar = (props: NavbarProps) => {
    const {} = props
    return (
        <>
            <div className={styles.navbarContainer}>
                <div className={styles.switcher}>
                    <Switcher />
                </div>
                <div className={styles.searchIcon}>
                    <SearchIcon/>
                </div>
                <div className={styles.cartIcon}>
                    <CartIcon/>
                </div>
            </div>

        </>
    );
};
