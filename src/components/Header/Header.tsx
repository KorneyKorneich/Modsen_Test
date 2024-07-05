import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CrossIcon from "src/assets/icons/Cross.svg";
import MenuIcon from 'src/assets/icons/Menu.svg';
import {CartIcon} from 'src/assets/icons/Cart';
import styles from './Header.module.scss';
import {CART, HOME, SHOP} from "src/shared/providers/routerProvider/routes.ts";
import ToggleSwitch from "src/components/ToggleSwitcher/ToggleSwitcher.tsx";

const Header: React.FC = () => {
    const navigate = useNavigate();
    const [isProfileOpened, setIsProfileOpened] = useState(false);

    const onHomeRedirectClick = (path: string) => {
        if (isProfileOpened) {
            setIsProfileOpened(!isProfileOpened);
        }
        navigate(path);
    };

    const onMenuButtonClick = () => {
        setIsProfileOpened(!isProfileOpened);
    };

    return (
        <>
            <header className={styles.Header}>
                <nav className={styles.Nav}>
                    <a className={styles.HomeLink} onClick={() => onHomeRedirectClick(HOME)}>
                        <h2 className={styles.ShopName}>
                            Modsen S<span className={styles.ShopNameSpan}>HOPPE</span>
                        </h2>
                    </a>
                    <div className={styles.HeaderButtonsWrapper}>
                        <div className={styles.ShopButton} onClick={() => onHomeRedirectClick(SHOP)}>
                            Shop
                        </div>
                        <ToggleSwitch />
                        <div className={styles.CartButton} onClick={() => navigate(CART)}>
                            <CartIcon />
                        </div>
                        <div className={styles.MenuButton} onClick={onMenuButtonClick}>
                            {!isProfileOpened ? <MenuIcon /> : <CrossIcon />}
                        </div>
                    </div>
                </nav>
            </header>
            {/*<Sidebar*/}
            {/*    isProfileOpened={isProfileOpened}*/}
            {/*    setIsProfileOpened={setIsProfileOpened}*/}
            {/*/>*/}
        </>
    );
};

export default Header;
