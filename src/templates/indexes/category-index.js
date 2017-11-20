
import React from 'react';

import IndexDefault from './index-default';

export default function Template(props) {
  const data = props.data;
  const cat = props.pathContext.category;
  return (
    <div>
      <h2 className="card page-title">Category: {cat}</h2>
      <IndexDefault data={data} />
    </div>
  );
}

export const postQuery = graphql`
query CategoryIndex($category: String!) {
  allMarkdownRemark(
    sort: { fields: [frontmatter___post_date], order: DESC },
    filter: { 
      frontmatter: { 
        category: { eq: $category },
        published: { eq: true }
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
          post_date
          published
          subject_url
          category
          folder
          tags
        }
      }
    }
  }
}`
