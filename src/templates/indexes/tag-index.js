import React from 'react';

import IndexDefault from './index-default';

export default function Template(props) {
    const data = props.data;
    const tag = props.pathContext.tag;
    return (
        <div>
            <h2 className="page-title">Tag: {tag}</h2>
            <IndexDefault data={data} />
        </div>
    );
}

export const postQuery = graphql`
query TagIndex($tag: String!) {
    allMarkdownRemark(filter: {
        frontmatter: {
            tags: {eq: $tag}
        }
    }){
        edges {
            node {
                id
                excerpt(pruneLength: 250)
                frontmatter {
                    title
                    subtitle
                    path
                    post_type
                    subject_url
                    category
                    folder
                    tags
                }
            }
        }
    }
}`
