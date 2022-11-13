import React from 'react';
import './Cart.css';
const Cart = (props) => {
    const { cart } = props;
    let quantity = 0;
    for (const key in cart) {
        const value = cart[key];
        quantity = quantity + value;
    }
    return (
        <div className="cart">
            <h4 style={{ textAlign: 'center' }}>Order Summary</h4>
            <div className="cart-data">
                <p>Selected Item: {quantity}</p>
            </div>
        </div >
    );
};

export default Cart;