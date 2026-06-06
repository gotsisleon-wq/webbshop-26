import Product from "./components/Product";
import React from "react";

//hämta IDt från produkten som klickades på och rendera den produkten på en ny sida. React router? Eller bara en state som ändras? Individuella sidor tills vidare

function ProductPage(props) {
    const [productId, setProductId] = React.useState(null);

    React.useEffect(() => {
        const fetchData = async () => {
            const data = await Product(props.id);
            console.log(data);
            setProductId(data.id);
        };
        fetchData();
    }, [props.id]);
    const id = productId;
    if (!productId) {
        return <div>Loading...</div>;
    }
    console.log(productId);
    return (
        <div key={id} className="product">
            <h1>{productId.title}</h1>
            <h3>Rating: {productId.rating}</h3>
            <p>{productId.description}</p>
            <p>${productId.price}</p>
        </div>
    );
}

export default ProductPage;