import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import styles from './Sidebar.module.scss';
import {HOME, SHOP} from "src/shared/providers/routerProvider/routes.ts";
import {switchMenuState} from "src/shared/slices/sidebarSlice.ts";

interface Props {
    isProfileOpened: boolean;
    setIsProfileOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Sidebar({ isProfileOpened, setIsProfileOpened }: Props) {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    function onRedirectClick(path: string) {
        dispatch(switchMenuState(!isProfileOpened));
        setIsProfileOpened(!isProfileOpened);
        navigate(path);
    }

    return (
        <div className={`${styles.Bar} ${useSelector((state: any) => state.isMenuOpened.value) ? styles.isOpened : ''}`}>
            <ul className={styles.ButtonsWrapper}>
                <li className={styles.Button} onClick={() => onRedirectClick(HOME)}>Home</li>
                <li className={styles.Button} onClick={() => onRedirectClick(SHOP)}>Shop</li>
                <li className={styles.Button} onClick={() => onRedirectClick(HOME)}>Contact</li>
            </ul>
        </div>
    );
}
