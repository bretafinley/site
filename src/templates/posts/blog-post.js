
import React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import moment from 'moment';

import Tag from '../../components/tag';
import Comments from '../../components/comments';
import IconFactory from '../../components/icon-factory';

// strip data off of the object the callee passes in
export default function Template({data}) {
  // equivalent to post = data.markdownRemark;
  const { markdownRemark: post } = data;
  const renderedTags = handleTags(post.frontmatter.tags);
  const formattedDate = moment(post.frontmatter.post_date, "YYYYMMDD").format('ll');
  return (
    <div>
        <div className="post-titles">
          <h1 className="post-title">{post.frontmatter.title}</h1>
          <h3 className="post-subtitle">{post.frontmatter.subtitle}</h3>
        </div>
        <div className="post-meta">
          <div><IconFactory icon="calendar" /> {formattedDate}</div>
          <IconFactory icon="folder" /> <ol className="breadcrumb">
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to={`/category/${post.frontmatter.category}`}>{post.frontmatter.category}</Link></li>
            <li className="active"><Link to={`/folder/${post.frontmatter.category}/${post.frontmatter.folder}`}>{post.frontmatter.folder}</Link></li>
          </ol>
        </div>
        <div className="post-body">
          <img className="img-responsive post-img" src={post.frontmatter.image_url} />
          <div dangerouslySetInnerHTML={{__html: post.html}}></div>
        </div>
        <div className="post-tags">{renderedTags}</div>
        <Comments post={post} />
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

export const postQuery = graphql`
query BlogPostByPath($path: String!) {
  markdownRemark(frontmatter: {path: {eq: $path}}) {
    html
    id
    frontmatter {
      path
      title
      subtitle
      post_date
      image_url
      category
      folder
      tags
    }
  }
}`
