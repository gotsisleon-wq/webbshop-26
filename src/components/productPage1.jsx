import React from "react";
import Product from "./components/Product";
import ProductData from "./components/ProductData";

const ProductPage = (props) => {
    const [productData, setProductData] = React.useState(null);

    React.useEffect(() => {
        const fetchData = async () => {
            const data = await ProductData(props.productNum);
            console.log(data);
            setProductData(data);
        };
        fetchData();
    }, [props.productNum]);
    const id = productData ? productData.id : null;
    if (!productData) {
        return <div>Loading...</div>;
    }
    console.log(productData);
    return (
        id &&
        <div key={id} className="product">
            <h1>{productData.title}</h1>
            <h3>Rating: {productData.rating}</h3>
            <p>{productData.description}</p>
            <h3>${productData.price}</h3>
        </div>
    );
}

export default ProductPage;