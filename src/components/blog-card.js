import React from 'react';
import Link from 'gatsby-link'

import Tag from './tag';

function BlogCard(props) {
    const {title, subtitle, folder, path, tags } = props.frontmatter;
    const renderedTags = handleTags(tags);
    return (
        <div className="card">
            <h2>{title}</h2>
            <em className="subtitle">{subtitle}</em>
            <span className="folder-title">DIR: </span>
            <ol className="breadcrumb">
                <li><Link to="/blog">Blog</Link></li>
                <li class="active"><Link to={folder}>{folder}</Link></li>
            </ol>
            <div><span className="tag-title">TAGS: </span>{renderedTags}</div>
            <p className="card-excerpt">{props.excerpt}</p>
            <Link to={path}>READ MORE</Link>
        </div>
    );
}

function handleTags(tags) {
    return tags.map((tag) => {
        return (
            <Tag text={tag+";"} />
        );
    });
}

export default BlogCard;