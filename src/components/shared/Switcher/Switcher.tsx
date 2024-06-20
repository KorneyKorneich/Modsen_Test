import { useState } from 'react';
import styles from './Switcher.module.scss';

export const Switcher = () => {
    const [isChecked, setIsChecked] = useState(false);

    const toggleSwitch = () => {
        setIsChecked(prev => !prev);
    };

    return (
        <div className={styles.toggle_switch}>
            <label className={styles.switch}>
                <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={toggleSwitch}
                />
                <span className={`${styles.slider} ${styles.round}`}></span>
            </label>
        </div>
    );
};

