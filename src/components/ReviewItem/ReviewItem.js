import { faTrashAlt, faTrashCan, faTrashRestore } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItem.css';

const ReviewItem = (props) => {
    const { product, handleRemoveItem } = props;
    const { img, shipping, name, quantity, price } = product;


    return (
        <div className="review-item-container">
            <div className="review-img">
                <img src={img} alt="" />
            </div>
            <div className="review">
                <div className="review-details">
                    <p title={name}>{name.length > 20 ? name.slice(0, 20) + "..." : name}</p>
                    <p>Price: <span style={{ color: 'goldenrod' }}>${price}</span></p>
                    <p>Shipping: {shipping}</p>
                    <p> <small>Quantity: {quantity}</small> </p>
                </div>
                <div className="review-delete">
                    <button onClick={() => handleRemoveItem(props.product)}>
                        <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;