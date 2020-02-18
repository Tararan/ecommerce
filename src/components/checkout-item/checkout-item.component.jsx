import React from 'react';

const CheckoutItem = ({ cartItem: { name, imageUrl, price, quantity } }) => (
    <div className="checkout-item">
        <div style={{ backgroundImage: `url(${imageUrl})` }} className="checkout-item__img">
        </div>
        <span className="checkout-item__name">{name}</span>
        <span className="checkout-item__quantity">{quantity}</span>
        <span className="checkout-item__price">{price}</span>
        <span className="checkout-item__remove">X</span>
    </div>
);

export default CheckoutItem;