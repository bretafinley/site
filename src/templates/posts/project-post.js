import React from 'react';
import Helmet from 'react-helmet';

// strip data off of the object the callee passes in
export default function Template({data}) {
    // equivalent to post = data.markdownRemark;
    const { markdownRemark: post } = data;
    return (
        <div className="post">
            <h1 className="post-title">{post.frontmatter.title}</h1>
            <h3 className="post-subtitle">{post.frontmatter.subtitle}</h3>
            <div className="post-body" dangerouslySetInnerHTML={{__html: post.html}}></div>
        </div>
    );
}

export const postQuery = graphql`
query ProjectPostByPath($path: String!) {
    markdownRemark(frontmatter: {path: {eq: $path}}) {
        html
        id
        frontmatter {
            path
            title
            subtitle
            post_date
            subject_url
            category
            folder
            tags
        }
    }
}`

