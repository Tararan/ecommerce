import React from 'react';

const FormGroup = ({ handleChange, label, ...otherProps }) => (
    <div className="form-group">
        <input className="form-group__input" onChange={handleChange} {...otherProps} />
        {
            label ?
                (<label className={
                    `form-group__label 
                    ${otherProps.value.length ?
                        'form-group__label--active'
                        : ''}`
                }>
                    {label}
                </label>)
                : null
        }
    </div>
)

export default FormGroup;