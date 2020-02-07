import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../images/shopping-cart.svg';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

const CartIcon = ({ toggleCartHidden }) => (
    <div className="cart" onClick={toggleCartHidden}>
        <ShoppingIcon className="cart__icon" />
        <span className="cart__count">10</span>
    </div>
);

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(null, mapDispatchToProps)(CartIcon);