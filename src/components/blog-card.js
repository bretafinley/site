import React from 'react';
import Link from 'gatsby-link'

function BlogCard(props) {
    const {title, subtitle, folder, path, tags } = props.frontmatter;
    const renderedTags = handleTags(tags);
    return (
        <div>
            <h2>{title}</h2>
            <em>{subtitle}</em>
            <div>File To: \Blog\{folder}</div>
            <div>{renderedTags}</div>
            <p>{props.excerpt}</p>
            <Link to={path}>Read More</Link>
        </div>
    );
}

function handleTags(tags) {
    return tags.map((tag) => {
        return (
            <em>{tag}</em>
        );
    });
}

export default BlogCard;