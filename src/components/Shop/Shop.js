import React, { useEffect, useState } from 'react';
import { addToLocalStorage, getLocalStorage } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({});

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const handleAddToCart = (id) => {
        addToLocalStorage(id);
        handleGetData();
    }
    const handleGetData = () => {
        const getCart = getLocalStorage();
        if (getCart) {
            setCart(getCart);
        }
    }
    useEffect(() => {
        handleGetData();
    }, [])
    return (
        <div className="shop-container">
            <div className="product-container">
                {!products.length ? <p>Loading...</p> :
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div >
    );
};

export default Shop;