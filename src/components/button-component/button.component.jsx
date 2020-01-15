import React from 'react';

const Button = ({ text, isGoogleSignIn, ...otherProps }) => (
    <button className={`button ${isGoogleSignIn ? 'button--google' : ''}`} {...otherProps}>
        {`
            ${text ? text : 'Submit'}
        `}
    </button>
)

export default Button;