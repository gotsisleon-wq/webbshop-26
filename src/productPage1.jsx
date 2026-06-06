import React from "react";
import Product from "./components/Product";
import ProductData from "./components/ProductData";

const ProductPage = () => {
    const productData = ProductData(1);

    const id = productData ? productData.id : null;
    if (!productData) {
        return <div>Loading...</div>;
    }
    return (
        id &&
        <div key={1}>
            <h1>{productData.title}</h1>
            <h3>Rating: {productData.rating}</h3>
            <p>{productData.description}</p>
            <h3>${productData.price}</h3>
        </div>
    );
}

export default ProductPage;