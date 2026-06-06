import React from 'react';
import ProductData from './ProductData';

function Product(props) {

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
        <div key={id} className="product">
            <h3>{productData.title}</h3>
            <h4>Rating: {productData.rating}</h4>
            <p>{productData.description}</p>
            <p>${productData.price}</p>
        </div>
    );
}



export default Product;