import React from 'react';

const ProductData = async (productNum) => {
    const response = await fetch(`https://dummyjson.com/products/${productNum}`);
    const data = await response.json();
    return data;
}

export default ProductData;

