import React from 'react';

const CollectionItem = ({ name, price, imageUrl }) => (
    <div className="collection-item">
        <div className="collection-item__image" style={{ backgroundImage: `url(${imageUrl})` }} />
        <div className="collection-item__footer">
            <span className="collection-item__footer-name">{name}</span>
            <span className="collection-item__footer-price">{price}</span>
        </div>
    </div>
)

export default CollectionItem;