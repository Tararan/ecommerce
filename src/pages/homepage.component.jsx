import React from 'react';
import Menu from '../components/menu/menu.component';

const HomePage = ({ history }) => (
    <div className="container">
        <div className="homepage">
            {/* directory-menu is menu */}
            <Menu />
        </div>
    </div>
)

export default HomePage;