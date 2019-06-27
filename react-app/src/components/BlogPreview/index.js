import React from 'react';
import './styles.scss';

const BlogPreview = ({link, title, text}) => (
    <>
        <div className="blogPreview">
            <a href={process.env.PUBLIC_URL + link} className="flex flex-column font-white">
                <h3>{title}</h3>
                <p>{text}</p>
            </a>
        </div>
    </>
);

export default BlogPreview;
