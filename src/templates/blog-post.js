import React from 'react';
import Helmet from 'react-helmet';

// strip data off of the object the callee passes in
export default function Template({data}) {
    // equivalent to post = data.markdownRemark;
    const { markdownRemark: post } = data;
    return (
        <div>
            <h1>{post.frontmatter.title}</h1>
            <div dangerouslySetInnerHTML={{__html: post.html}}></div>
        </div>
    );
}

export const postQuery = graphql`
query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: {path: {eq: $path}}) {
        html
        frontmatter {
            path
            title
        }
    }
}`