import React from 'react';
import './smallImages.css';
import SmallImgOne from '../../../../../assets/image-product-1.jpg';
import SmallImgTwo from '../../../../../assets/image-product-2.jpg';
import SmallImgThree from '../../../../../assets/image-product-3.jpg';
import SmallImgFour from '../../../../../assets/image-product-4.jpg';
import { useState } from 'react';

function SmallImages({ handleSmallImageClick }) {
    const [activeImage, setActiveImage] = useState(SmallImgOne);

    const handleClick = (image) => {
        setActiveImage(image);
        handleSmallImageClick(image);
    };

    return (
        <div className='product__small-images'>
            <img
                className={`product__small-img ${activeImage === SmallImgOne ? 'active' : ''}`}
                src={SmallImgOne}
                alt=""
                onClick={() => handleClick(SmallImgOne)}
            />
            <img
                className={`product__small-img ${activeImage === SmallImgTwo ? 'active' : ''}`}
                src={SmallImgTwo}
                alt=""
                onClick={() => handleClick(SmallImgTwo)}
            />
            <img
                className={`product__small-img ${activeImage === SmallImgThree ? 'active' : ''}`}
                src={SmallImgThree}
                alt=""
                onClick={() => handleClick(SmallImgThree)}
            />
            <img
                className={`product__small-img ${activeImage === SmallImgFour ? 'active' : ''}`}
                src={SmallImgFour}
                alt=""
                onClick={() => handleClick(SmallImgFour)}
            />
        </div>
    )
}

export default SmallImages;