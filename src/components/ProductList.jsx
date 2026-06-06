import React from 'react';
import Product from './Product';
import ProductData from './ProductData';



function ProductList() {

    return (
        <div className="product-list">
            <Product productNum={1} />
            <a href="./productPage1">Product 1</a>
            <Product productNum={138} />
            <a href="./productPage138">Product 138</a>
            <Product productNum={113} />
            <a href="./productPage113">Product 113</a>
        </div>
    );
}



export default ProductList;
