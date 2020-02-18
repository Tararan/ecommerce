import React from 'react';
import { connect } from 'react-redux';
import uniqid from 'uniqid';
import { withRouter } from 'react-router-dom';
import CartItem from '../cart-item/cart-item.component';
import Button from '../button-component/button.component';
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

const CartDropdown = ({ cartItems, history, dispatch }) => (
    <div className="cart-dropdown">
        <div className="cart-dropdown__items">
            {
                cartItems.length ?
                    (
                        cartItems.map(cartItem => (
                            <CartItem key={uniqid} item={cartItem} />
                        ))
                    ) : (
                        <span className="cart-dropdown__items-empty"> Your cart is empty</span>
                    )
            }
        </div>
        <Button
            onClick={() => {
                history.push('/checkout')
                dispatch(toggleCartHidden());
            }}
            text="go to checkout"
        />
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});
// Connect will pass dispatch into the components as a prop if we don't supply second argument to connect
export default withRouter(
    connect(mapStateToProps)(CartDropdown)
);
