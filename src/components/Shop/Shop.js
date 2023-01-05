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

    const [cart, setCart] = useState({});
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(10);
    const [products, setProducts] = useState([]);

    const handleAddToCart = (id) => {
        addToLocalStorage(id);
        const getCart = getLocalStorage();
        if (getCart) {
            setCart(getCart);
        }
    }
    useEffect(() => {
        const url = `http://localhost:5000/products/?page=${page}&&size=${size}`;
        console.log(url)
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data));

    }, [page, size]);
    useEffect(() => {
        fetch('http://localhost:5000/productCount')
            .then(res => res.json())
            .then(data => {
                const pages = data.productCount / 10;
                const totalPage = Math.ceil(pages);
                setPageCount(totalPage);
            })
    }, [])
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
                        key={product._id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
                <div className='pagination'>
                    {
                        [...Array(pageCount).keys()]
                            .map(number => <button
                                onClick={() => setPage(number)}
                            >{number + 1}</button>)
                    }
                    <select onClick={(e) => setSize(e.target.value)}>
                        <option value="">Select Any option</option>
                        <option value="10">10</option>
                        <option value="15">15</option>
                        <option value="20">20</option>
                        <option value="25">25</option>
                    </select>
                </div>
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