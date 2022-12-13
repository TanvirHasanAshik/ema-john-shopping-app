import { faMoneyCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useProducts } from '../../hooks/useProducts';
import { getLocalStorage, removeSingleProduct } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css';

const Orders = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useState({});

    useEffect(() => {
        const getCart = getLocalStorage();
        if (getCart) {
            setCart(getCart);
        }
    }, []);

    const handleRemoveItem = (product) => {
        removeSingleProduct(product);
        const getCart = getLocalStorage();
        if (getCart) {
            setCart(getCart);
        }
    }

    const newProducts = products.filter(product => {
        for (const item in cart) {
            if (item === product.id) {
                product.quantity = cart[item];
                return product;
            }
        }
    });

    return (
        <div className="shop-container">
            <div className="order-container">
                {
                    newProducts.map(product => <ReviewItem
                        product={product}
                        key={product.id}
                        handleRemoveItem={handleRemoveItem}
                    ></ReviewItem>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <Link to='/shipment'>
                        <button className="btn-brand">Proceed Check Out <FontAwesomeIcon icon={faMoneyCheck}></FontAwesomeIcon>
                        </button>
                    </Link>
                </Cart>
            </div>
        </div >
    );
};

export default Orders;