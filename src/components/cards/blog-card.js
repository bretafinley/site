
import React from 'react';
import Link from 'gatsby-link'
import moment from 'moment';

import Tag from '../tag';
import IconFactory from '../icon-factory';

function BlogCard(props) {
  const {title, subtitle, post_date, category, folder, path, tags } = props.frontmatter;
  const renderedTags = handleTags(tags);
  const formattedDate = moment(post_date, "YYYYMMDD").format('l');
  return (
    <div className="card">
      <h3>{title}</h3>
      <em className="subtitle">{subtitle}</em>
      <div className="row">
        <span className="card-attr card-attr-icon col-md-1"><IconFactory icon="calendar" /></span>
        <span className="card-attr card-attr-name col-md-11">{formattedDate}</span>
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

export default BlogCard;
