import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../images/witch-hat.svg';
import { auth } from '../../firebase/firebase.utils';

const Header = ({ currentUser }) => (
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
        </div>
    </div>
)

export default Header;