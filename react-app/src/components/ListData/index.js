import React from 'react';
import './styles.scss';

const ListData = ({title, children, editdel}) => (
    <div className="list-data flex flex-column">
        <h3>{title}</h3>
        {children}
        <div className="flex">
            <a href={editdel}>Editar</a>
            <a href={editdel}>Deletar</a>
        </div>
    </div>
);

export default ListData;
