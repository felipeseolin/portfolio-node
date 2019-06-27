import React from 'react';

const SubSection = ({children, idSubSec, title, description}) => (

    <div id={idSubSec}>
        <h3 className="font-green-haze">{title}</h3>
        <p className="description">{description}</p>
        {children}
    </div>
);

export default SubSection;
