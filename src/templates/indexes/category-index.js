import React from 'react';

import IndexDefault from './index-default';

export default function Template({data}) {
    return <IndexDefault data={data} />
}

export const postQuery = graphql`
query CategoryIndex($category: String!) {
    allMarkdownRemark(filter: {
        frontmatter: {
            category: {eq: $category}
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