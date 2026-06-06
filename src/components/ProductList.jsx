import React from 'react';
import Product from './Product';
import ProductData from './ProductData';



function ProductList() {

    return (
        <div className="product-list">
            <Product productNum={1} />
            <a href="C:\Users\leon\webbshop26\src\components\productPage1.jsx">Product 1</a>
            <Product productNum={138} />
            <a href="C:\Users\leon\webbshop26\src\components\productPage138.jsx">Product 138</a>
            <Product productNum={113} />
            <a href="C:\Users\leon\webbshop26\src\components\productPage113.jsx">Product 113</a>
        </div>
    );
}



export default ProductList;



//export default ProductList;