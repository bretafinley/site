import React from 'react';
import Link from 'gatsby-link';

function Tag(props) {
    return (
        <span className="tag"><Link to="/">{props.text}</Link></span>
    );
}

export default Tag;