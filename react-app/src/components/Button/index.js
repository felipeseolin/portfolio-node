import React from 'react';
import './styles.scss';

const Button = ({id, classes, type, children}) => (
    <>
        <button
            id={id}
            className={classes}
            type={type}
        >
            {children}
        </button>
    </>
);

export default Button;
