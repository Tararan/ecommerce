import React from 'react';
import { connect } from 'react-redux';
import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cart.actions';

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    return (
        <div className="checkout-item">
            <div style={{ backgroundImage: `url(${imageUrl})` }} className="checkout-item__img">
            </div>
            <span className="checkout-item__name">{name}</span>
            <span className="checkout-item__quantity">
                <span className="checkout-item__quantity-arrow"
                    onClick={() => removeItem(cartItem)}>
                </span>
                <span className="checkout-item__quantity-value">
                    {quantity}
                </span>
                <span className="checkout-item__quantity-arrow"
                    onClick={() => addItem(cartItem)}>
                </span>
            </span>
            <span className="checkout-item__price">{price}</span>
            <span className="checkout-item__remove" onClick={() => clearItem(cartItem)}></span>
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);