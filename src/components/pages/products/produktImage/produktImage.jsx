import './produktImage.css';
import BigImg from '../../../../assets/image-product-1.jpg'
import SmallImages from './smallImages/SmallImages';
import { useState } from 'react';


function ProductImages() {
    const [selectedImg, setSelectedImg] = useState(BigImg);

    const handleSmallImageClick = (image) => {
        setSelectedImg(image);
    }
    return (

        <div className='product__large-image'>
            <img className='product__large-img' src={selectedImg} alt="" />
            <SmallImages
                handleSmallImageClick={handleSmallImageClick}
            />
        </div>

    )
}

export default ProductImages;
