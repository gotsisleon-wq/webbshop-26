import React from 'react';
import Product from './Product';
import ProductData from './ProductData';



function ProductList() {

    return (
        <div className="product-list">
            <Product productNum={1} />
            <Product productNum={138} />
            <Product productNum={113} />
        </div>
    );
}



export default ProductList;



//export default ProductList;