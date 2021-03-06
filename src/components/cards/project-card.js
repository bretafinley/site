
import React from 'react';
import Link from 'gatsby-link';
import moment from 'moment';

import Tag from '../tag';
import IconFactory from '../icon-factory';

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
        <span className="card-attr card-attr-icon col-md-1"><IconFactory icon="calendar" /></span>
        <span className="card-attr card-attr-name col-md-11">{formattedDate}</span>
      </div>
      <div className="row">
        <span className="card-attr card-attr-icon col-md-1"><IconFactory icon="github" /></span>
        <span className="card-attr card-attr-name col-md-11"><a href={subject_url}>{shortRepo}</a></span>
      </div>
      <div className="row">
        <span className="card-attr card-attr-icon col-md-1"><IconFactory icon="folder" /></span>
        <span className="card-attr card-attr-name col-md-11">
            <ol className="breadcrumb folder-links">
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to={`/category/${category}`}>{category}</Link></li>
              <li className="active"><Link to={`/folder/${category}/${folder}`}>{folder}</Link></li>
            </ol>
        </span>
      </div>
      <div className="row">
        <span className="card-attr card-attr-icon col-md-1"><IconFactory icon="tag" /></span>
        <span className="card-attr card-attr-name col-md-11">{renderedTags}</span>
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
  return tags.map((tag, index) => {
    return (
      <Tag key={index} text={tag} />
    );
  });
}

function stripRepo(repoURL) {
  const parts = repoURL.split("/");
  return `${parts.slice(-2)[0]}/${parts.slice(-1)[0]}`; 
}

export default ProjectCard;
