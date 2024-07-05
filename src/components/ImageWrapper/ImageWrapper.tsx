import  { useState } from 'react';
import styles from './ImageWrapper.module.scss';
import {ProductSchema} from "src/shared/types/projectSchema.ts";

interface Props {
    product: ProductSchema | undefined;
}

export function ImagesWrapper({ product }: Props) {
    const productImages = Array(4).fill(product?.image);
    const [selectedMobileImageIndex, setSelectedMobileImageIndex] = useState(0);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    return (
        <div className={styles.imagesWrapperContent}>
            <div className={styles.imagesContainer}>
                {productImages.map((item, index) => (
                    index !== selectedImageIndex && (
                        <img className={styles.smallImage} key={index} src={item} onClick={() => setSelectedImageIndex(index)} alt={`Product image ${index}`} />
                    )
                ))}
            </div>
            <img className={styles.largeImage} src={productImages[selectedImageIndex]} alt="Selected product image" />
            <div className={styles.mobileImagesWrapper}>
                {productImages.map((item, index) => (
                    <div className={`${styles.largeImageMobile} ${index === selectedMobileImageIndex ? 'active' : ''}`} key={index}>
                        <img src={item} alt={`Product image ${index}`} />
                        <button className={styles.largeImageButton} onClick={setPrevIndex}>{"<"}</button>
                        <button className={styles.largeImageButton} onClick={setNextIndex}>{">"}</button>
                    </div>
                ))}
            </div>
            <div className={styles.imageScaleWrapper}>
                <div className="scale" style={{ transform: `translateX(${selectedMobileImageIndex * 100}%)` }} />
            </div>
        </div>
    );

    function setNextIndex() {
        setSelectedMobileImageIndex((prevIndex) => (prevIndex === 4 ? 0 : prevIndex + 1));
    }

    function setPrevIndex() {
        setSelectedMobileImageIndex((prevIndex) => (prevIndex === 0 ? 4 : prevIndex - 1));
    }
}
