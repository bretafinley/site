import React from 'react';
import Helmet from 'react-helmet';
import ReactDisqusThread from 'react-disqus-thread';

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
        id
        frontmatter {
            path
            title
        }
    }
}`