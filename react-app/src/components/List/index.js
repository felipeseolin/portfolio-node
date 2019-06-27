import React from 'react';
import './styles.scss';

const List = ({children, classes}) => (
    <>
        <ul className={classes}>
            {children}
        </ul>
    </>
);

export default List;
