import React from 'react';
import { connect } from 'react-redux';
import uniqid from 'uniqid';
import CartItem from '../cart-item/cart-item.component';
import Button from '../button-component/button.component';

const CartDropdown = ({ cartItems }) => (
    <div className="cart-dropdown">
        <div className="cart-dropdown__items">
            {
                cartItems.map(cartItem => (
                    <CartItem key={uniqid} item={cartItem} />
                ))
            }
        </div>
        <Button text="go to checkout" />
    </div>
);

const mapStateToProps = ({ cart: { cartItems } }) => ({
    cartItems
});

export default connect(mapStateToProps)(CartDropdown);
