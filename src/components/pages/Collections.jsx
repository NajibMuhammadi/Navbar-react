import './collections.css';
import ProductImages from './products/produktImage/produktImage';
import ProduktInfo from './products/produktInfo/ProduktInfo';


function Collections() {
    return (
        <div className='main'>
            <div className='main__product-content'>
                <ProductImages />
                <ProduktInfo />
            </div>
        </div>
    )
}

export default Collections
