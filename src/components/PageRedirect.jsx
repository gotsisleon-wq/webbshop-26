import React from 'react';
import ProductData from './components/ProductData';


function PageRedirect() { //Använd state för att ändra vilken produkt som renderas beroende på productNum av den produkt som klickades på. clickHandler för att ändra productNum state?
    const [productNum, setProductNum] = React.useState(1);

    React.useEffect(() => {
        const fetchData = async () => {
            const data = await ProductData(productNum);
            setProductNum(data.id);
        };
        fetchData();
    }, [productNum]);
    return (productNum);
}

export default PageRedirect