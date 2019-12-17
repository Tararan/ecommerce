import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../images/witch-hat.svg';

const Header = () => (
    <div className="header">
        <Link to="/" class="header__logo">
            <Logo className="header__logo-img" />
        </Link>
        <div className="header__menu">
            <Link className="header__menu-link" to='shop'>
                shop
            </Link>
            <Link className="header__menu-link" to='shop'>
                contact
            </Link>
        </div>
    </div>
)

export default Header;