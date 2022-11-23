import { faArrowDown, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useProducts } from '../../hooks/useProducts';
import { addToLocalStorage, getLocalStorage } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
const Shop = () => {
    const [products, setProducts] = useProducts([]);
    const [cart, setCart] = useState({});

    const handleAddToCart = (id) => {
        addToLocalStorage(id);

        const getCart = getLocalStorage();
        if (getCart) {
            setCart(getCart);
        }
    }
    useEffect(() => {
        const getCart = getLocalStorage();
        if (getCart) {
            setCart(getCart);
        }
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
                <Cart cart={cart}>
                    <Link to='/orders'>
                        <button className="btn-brand">
                            Review Order <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                        </button>
                    </Link>
                </Cart>
            </div>
        </div >
    );
};

export default Shop;