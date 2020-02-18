import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../images/witch-hat.svg';
import { auth } from '../../firebase/firebase.utils';
import Cart from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';


const Header = ({ currentUser, hidden }) => (
    <div className="header">
        <Link to="/" className="header__logo">
            <Logo className="header__logo-img" />
        </Link>
        <div className="header__menu">
            <Link className="header__menu-link" to='shop'>
                shop
            </Link>
            <Link className="header__menu-link" to='shop'>
                contact
            </Link>
            {
                currentUser ?
                    <div className="header__menu-link" onClick={() => auth.signOut()}> sign out</div>
                    :
                    <Link className="header__menu-link" to="login"> sign in</Link>
            }
            <Cart />
        </div>
        {
            hidden ? null :
                <CartDropdown />
        }
    </div>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);