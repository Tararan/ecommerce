import React from 'react';
import { connect } from 'react-redux';
import uniqid from 'uniqid';
import { createStructuredSelector } from 'reselect';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';

const CheckoutPage = ({ cartItems, total }) => (
    <div className="checkout">
        <div className="checkout__header">
            <div className="checkout__header-item">
                <span>Product</span>
            </div>
            <div className="checkout__header-item">
                <span>Description</span>
            </div>
            <div className="checkout__header-item">
                <span>Quantity</span>
            </div>
            <div className="checkout__header-item">
                <span>Price</span>
            </div>
            <div className="checkout__header-item">
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map(cartItem => (
                <CheckoutItem key={uniqid} cartItem={cartItem} />
            ))
        }
        <div className="checkout__total">
            <span>Total: ${total}</span>
        </div>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);