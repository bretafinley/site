import React from 'react';
import Link from 'gatsby-link';
import {FaFolder, FaTag, FaGit, FaCalendar} from 'react-icons/lib/fa';

import Tag from '../tag';

function ProjectCard(props) {
    const {title, subtitle, category, folder, path, tags } = props.frontmatter;
    const renderedTags = handleTags(tags);
    return (
        <div className="card">
            <h3>{title}</h3>
            <em className="subtitle">{subtitle}</em>
            <div className="row">
                <span className="card-attr card-attr-icon col-md-1"><FaFolder /></span>
                <span className="card-attr card-attr-name col-md-1">DIR:</span>
                <span className="card-attr col-md-10">
                    <ol className="breadcrumb">
                        <li><Link to="/projects">Projects</Link></li>
                        <li><Link to={`/category/${category}`}>{category}</Link></li>
                        <li class="active"><Link to={`/folder/${category}/${folder}`}>{folder}</Link></li>
                    </ol>
                </span>
            </div>
            <div className="row">
                <span className="card-attr attr-icon col-md-1"><FaTag /></span>
                <span className="card-attr card-attr-name col-md-1">TAGS:</span>
                <span className="card-attr col-md-10">{renderedTags}</span>
            </div>
            <div className="row">
                <span className="card-attr attr-icon col-md-1"><FaGit /></span>
                <span className="card-attr card-attr-name col-md-1">REPO:</span>
                <span className="card-attr col-md-10"><a href="#">/site</a></span>
            </div>
            <div className="row">
                <span className="card-attr attr-icon col-md-1"><FaCalendar /></span>
                <span className="card-attr card-attr-name col-md-1">DATE:</span>
                <span className="card-attr col-md-10">2017-09-05</span>
            </div>
            <hr />
            <blockquote>
                <p className="card-excerpt">{props.excerpt}</p>
            </blockquote>
            <Link className="btn btn-default" to={path}>READ MORE</Link>
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

export default ProjectCard;