import React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import moment from 'moment';
import ReactDisqusThread from 'react-disqus-thread';

import Tag from '../../components/tag';

{/* <ReactDisqusThread
				shortname="ghostsandglass"
				identifier={`ghostsandglass-blog-${post.id}`}
				title={post.frontmatter.title}
				url={`ghostsandglass.com`}
				category_id="123456"
				onNewComment={this.handleNewComment}/> */}

// strip data off of the object the callee passes in
export default function Template({data}) {
    // equivalent to post = data.markdownRemark;
    const { markdownRemark: post } = data;
    const renderedTags = handleTags(post.frontmatter.tags);
    const formattedDate = moment(post.frontmatter.post_date, "YYYYMMDD").format('ll');
    return (
        <div className="post">
            <h1 className="post-title">{post.frontmatter.title}</h1>
            <h3 className="post-subtitle">{post.frontmatter.subtitle}</h3>
            <div className="post-meta">
                <ol className="breadcrumb">
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to={`/category/${post.frontmatter.category}`}>{post.frontmatter.category}</Link></li>
                    <li className="active"><Link to={`/folder/${post.frontmatter.category}/${post.frontmatter.folder}`}>{post.frontmatter.folder}</Link></li>
                </ol>
                <br />
                <div>{renderedTags}</div><br />
                <div>{formattedDate}</div>
            </div>
            <hr />
            <div className="post-body" dangerouslySetInnerHTML={{__html: post.html}}></div>
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
            category
            folder
            tags
        }
    }
}`