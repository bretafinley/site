import React from 'react';
import Link from 'gatsby-link';
import {FaFolder, FaTag, FaGithub, FaCalendar} from 'react-icons/lib/fa';
import moment from 'moment';

import Tag from '../tag';

function ProjectCard(props) {
    const {title, subtitle, post_date, subject_url, category, folder, path, tags } = props.frontmatter;
    const renderedTags = handleTags(tags);
    const formattedDate = moment(post_date, "YYYYMMDD").format('l');
    const shortRepo = stripRepo(subject_url);
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
                <span className="card-attr attr-icon col-md-1"><FaGithub /></span>
                <span className="card-attr card-attr-name col-md-1">REPO:</span>
                <span className="card-attr col-md-10"><a href={subject_url}>/{shortRepo}</a></span>
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

function stripRepo(repoURL) {
    const parts = repoURL.split("/");
    return parts.slice(-1)[0]; 
}

export default ProjectCard;