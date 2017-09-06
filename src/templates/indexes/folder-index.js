import React from 'react';

import IndexDefault from './index-default';

export default function Template({data}) {
    return <IndexDefault data={data} />
}

export const postQuery = graphql`
query FolderIndex($category: String!, $folder: String!) {
    allMarkdownRemark(filter: {
        frontmatter: {
            category: {eq: $category},
            folder: {eq: $folder}
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