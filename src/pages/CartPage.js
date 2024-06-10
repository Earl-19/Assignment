import React, { useState, useEffect } from 'react';

function CartPage() {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        fetch('/api/cart')
            .then(response => response.json())
            .then(data => {
                console.log('Fetched cart items:', data); // Debug log
                setCartItems(data);
            })
            .catch(error => console.error('Error fetching cart items:', error));
    }, []);

    return (
        <div>
            <h1>Your Cart</h1>
            {cartItems.length > 0 ? (
                <ul>
                    {cartItems.map((item, index) => (
                        <li key={index}>
                            {item.name} - ${item.price} x {item.quantity}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Your cart is empty.</p>
            )}
        </div>
    );
}

export default CartPage;
