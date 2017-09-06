import React from 'react';

import IndexDefault from './index-default';

export default function Template({data}) {
    return <IndexDefault data={data} />
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
                    category
                    folder
                    tags
                }
            }
        }
    }
}`
