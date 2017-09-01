import React from 'react';
import Link from 'gatsby-link'

function BlogCard(props) {
    return (
        <div>
            <h2>{props.title}</h2>
            <div>File To: \Blog\</div>
            <p>stuff stuff</p>
            <Link to={props.path}>Read More</Link>
        </div>
    );
}

export default BlogCard;