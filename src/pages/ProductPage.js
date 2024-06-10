import React, { useState, useEffect } from 'react';

function ProductPage() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('/api/products')
            .then(response => response.json())
            .then(data => {
                console.log('Fetched products:', data); // Debug log
                setProducts(data);
            })
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    return (
        <div>
            <h1>Products</h1>
            <ul>
                {products.map(product => (
                    <li key={product.product_id}>{product.name} - ${product.price}</li>
                ))}
            </ul>
        </div>
    );
}

export default ProductPage;
