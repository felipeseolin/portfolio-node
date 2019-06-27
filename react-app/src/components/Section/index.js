import React from 'react';
import './styles.scss';

const Section = ({idSec, title, description, classes, children}) => (
    <>
        <section id={idSec} className={classes}>
            <h2 className="title font-teal">{title}</h2>
            <p className="description">{description}</p>
            {children}
        </section>
    </>
);

export default Section;
