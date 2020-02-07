import React from 'react';
import uniqid from 'uniqid';
import CollectionItem from '../collection-item/collection-item.component';

const CollectionPreview = ({ title, items }) => (
    <div className="collection-preview">
        <div className="container">
            <h1 className="collection-preview__title"> {title.toUpperCase()} </h1>
            <div className="collection-preview__container">
                {
                    items
                        .filter((item, idx) => idx < 4)
                        .map((item) => (
                            <CollectionItem key={uniqid()} item={item} />
                        ))
                }
            </div>
        </div>
    </div>
)

export default CollectionPreview;