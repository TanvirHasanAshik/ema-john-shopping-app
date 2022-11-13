import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css';
const Product = (props) => {
    const { id, img, name, price, ratings, seller } = props.product;

    return (
        <div className="single-product">
            <img src={img} alt="" />
            <div className="card-info">
                <p className="product-name">{name}</p>
                <h3>Price: ${price}</h3>
                <p>seller: {seller}</p>
                <p>Rating: {ratings} Stars</p>
            </div>
            <button onClick={() => props.handleAddToCart(id)}>
                Add To Cart
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;