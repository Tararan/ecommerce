import React from 'react';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
    <div className="cart-item">
        <img src={imageUrl} alt="cart-item" />
        <div className="cart-item__details">
            <span className="cart-item__details-info"> {name} </span>
            <span className="cart-item__details-info">  {quantity} × ${price} </span>

        </div>
    </div>
);

export default CartItem;