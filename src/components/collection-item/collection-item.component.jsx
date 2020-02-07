import React from 'react';
import { connect } from 'react-redux';
import Button from '../button-component/button.component';
import { addItem } from '../../redux/cart/cart.actions';

const CollectionItem = ({ item, addItem }) => {
    const { name, price, imageUrl } = item;
    return (
        <div className="collection-item">
            <div className="collection-item__image" style={{ backgroundImage: `url(${imageUrl})` }} />
            <div className="collection-item__footer">
                <span className="collection-item__footer-name">{name}</span>
                <span className="collection-item__footer-price">{price}</span>
            </div>
            <Button onClick={() => addItem(item)} isWhite text="add to cart" />
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);