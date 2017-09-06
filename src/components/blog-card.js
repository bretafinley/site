import React from 'react';
import Link from 'gatsby-link'

import Tag from './tag';

function BlogCard(props) {
    const {title, subtitle, category, folder, path, tags } = props.frontmatter;
    const renderedTags = handleTags(tags);
    return (
        <div className="card">
            <h3>{title}</h3>
            <em className="subtitle">{subtitle}</em>
            <span className="folder-title">DIR: </span>
            <ol className="breadcrumb">
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to={`/category/${category}`}>{category}</Link></li>
                <li class="active"><Link to={`/folder/${category}/${folder}`}>{folder}</Link></li>
            </ol><br />
            <span className="tag-title">TAGS: </span>{renderedTags}<br />
            <span>DATE: </span>2017-09-05
            <hr />
            <blockquote>
                <p className="card-excerpt">{props.excerpt}</p>
            </blockquote>
            <button className="btn btn-default"><Link to={path}>READ MORE</Link></button>
        </div>
    );
}

function handleTags(tags) {
    return tags.map((tag) => {
        return (
            <Tag text={tag} />
        );
    });
}

export default BlogCard;