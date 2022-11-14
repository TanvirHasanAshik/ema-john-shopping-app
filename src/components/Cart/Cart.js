import React, { useEffect, useState } from 'react';
import './Cart.css';
const Cart = (props) => {
    const { cart } = props;
    let quantity = 0;
    for (const key in cart) {
        const value = cart[key];
        quantity = quantity + value;
    }
    /* load data from fake db */
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    let total = 0;
    let shipping = 0;
    let tax = 0;

    for (const cartId in cart) {
        const cartPd = products.find(product => product.id === cartId);
        console.log(cartPd ? cartPd : 0);
        total = total + cartPd?.price * cart[cartId];
    }
    if (total >= 1000) {
        shipping = 0;
    } else if (total > 0 && total < 1000) {
        shipping = 100;
    }
    tax = parseFloat((total * 0.1).toFixed(2));
    const grandTotal = total + shipping + tax;
    return (
        <div className="cart">
            <h4 style={{ textAlign: 'center' }}>Order Summary</h4>
            <div className="cart-data">
                <p>Selected Item: {quantity}</p>
                <p>Total Price:{total}</p>
                <p>Total Shipping Charge: {shipping}</p>
                <p>Tax:{tax}</p>
                <h4>Grand Total:{grandTotal}</h4>
            </div>
        </div >
    );
};

export default Cart;