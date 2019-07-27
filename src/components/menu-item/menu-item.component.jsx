import React from "react";
 
const MenuItem = ({ title, imageUrl }) => (
    <div className="menu__item" lazy-img={ imageUrl }>
        <div className="menu__item-content">
            <h1 className="menu__item-content-title">
                { title }
            </h1>
            <p className="menu__item-content-subtitle">
                shop now
            </p>
        </div>
    </div>
);

export default MenuItem;