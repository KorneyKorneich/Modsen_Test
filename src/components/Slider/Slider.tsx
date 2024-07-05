import styles from './Slider.module.scss'
import { useState } from 'react';

interface SliderProps {
    images: string[]
}

export const Slider = (props: SliderProps) => {
    const {images} = props
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToNext = () => {
        const nextIndex = (currentIndex + 1) % images.length;
        setCurrentIndex(nextIndex);
    };

    const goToPrevious = () => {
        const nextIndex = (currentIndex - 1 + images.length) % images.length;
        setCurrentIndex(nextIndex);
    };

    return (
        <div className={styles.image_slider}>
            <button className={`${styles.arrow} ${styles.left}`} onClick={goToPrevious}>&lt;</button>
            <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} className={styles.slide} />
            <button className={`${styles.arrow} ${styles.right}`} onClick={goToNext}>&gt;</button>
        </div>
    );
};


