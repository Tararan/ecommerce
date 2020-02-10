import React from 'react';
// <Button isWhite isGoogleSignIn text="text" />

const Button = ({ text, isGoogleSignIn, isWhite, ...otherProps }) => (
    <button className={`button${isWhite ? ' button--white' : ''}
    ${isGoogleSignIn ? ' button--google' : ''}`}
        {...otherProps}>
        {`
            ${text ? text : 'Submit'}
        `}
    </button>
)

export default Button;