import { useState, useEffect } from "react";

const searchUI = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [products, setProducts] = useState([]);


    useEffect(() => {
        const timer = setTimeout(async () => {
            try {
                const req = await fetch(`https://dummyjson.com/products/search?q=${searchTerm}`)

                if (!req.ok) throw new Error('Search failure');

                const data = await req.json();

                setProducts(data.products);


            } catch (error) {
                console.error("Error fetching search results:", error);
            }
        }, 500);

        return (
            <div>
                <h2> Smart Sök </h2>
                <input type="text" placeholder="Skriv för att söka..." />
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                <ul>
                    {products.map(item => (
                        <div key={item.id} className="card">{item.title}
                            <img className="card-img" src={item.thumbnail} alt={item.title} />
                            <h5 className="card-body">{item.title}</h5>
                            <p className="card-text">{item.description}</p>
                        </div>
                    ))}
                </ul>

            </div>


        )
    }, [searchTerm]);


}
export default searchUI;