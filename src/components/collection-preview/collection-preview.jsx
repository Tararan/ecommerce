import React from 'react';
import uniqid from 'uniqid';
import CollectionItem from '../collection-item/collection-item.component';

const CollectionPreview = ({ title, items }) => (
    <div className="collection-preview">
        <h1 className="collection-preview__title"> {title.toUpperCase()} </h1>
        <div className="collection-preview__container">
            {
                items
                    .filter((item, idx) => idx < 4)
                    .map(({ ...otheritemProps }) => (
                        <CollectionItem key={uniqid()} {...otheritemProps} />
                    ))
            }
        </div>
    </div>
)

export default CollectionPreview;