import { useState } from 'react';
import styles from './RangeInputComponent.module.scss';
import {MAX_PRODUCT_PRICE, MIN_PRODUCT_PRICE} from "src/shared/consts/price.ts";

interface Props {
    max: number;
    min: number;
    setMin: React.Dispatch<React.SetStateAction<number>>;
    setMax: React.Dispatch<React.SetStateAction<number>>;
}

export function RangeInputComponent({ max, min, setMin, setMax }: Props) {
    const [firstValue, setFirstValue] = useState(min);
    const [secondValue, setSecondValue] = useState(max);

    return (
        <div className={styles.ContentWrapper}>
            <div className={styles.RangeSlider}>
                <span className={styles.RangeSelected} style={{ left: `${min * 0.1 + 0.8}%`, width: `${(max - min) * 0.1}%` }} />
            </div>

            <div className={styles.RangeInputWrapper}>
                <input
                    className={styles.RangeInput}
                    type="range"
                    value={min}
                    min={MIN_PRODUCT_PRICE}
                    max={MAX_PRODUCT_PRICE}
                    onChange={(e) => {
                        const value = Number(e.target.value);
                        setFirstValue(value);
                        if (value > secondValue) setMax(value);
                        else setMin(value);
                    }}
                />
                <input
                    className={styles.RangeInput}
                    type="range"
                    value={max}
                    min={MIN_PRODUCT_PRICE}
                    max={MAX_PRODUCT_PRICE}
                    onChange={(e) => {
                        const value = Number(e.target.value);
                        setSecondValue(value);
                        if (value > firstValue) setMax(value);
                        else setMin(value);
                    }}
                />
            </div>
        </div>
    );
}
