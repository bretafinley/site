import React from 'react'
import Link from 'gatsby-link'

import BlogCard from '../components/cards/blog-card';

const Blog = ({data}) => {
  const blogs = data.allMarkdownRemark.edges.map((d) => {
    const excerpt = d.node.excerpt;
    const front = d.node.frontmatter;
    return <BlogCard frontmatter={front} excerpt={excerpt} />
  });
  return (
      <div>
        <h2 className="page-title">Blog</h2>
        {blogs}
      </div>
  );
};

export default Blog;

export const blogQuery = graphql`
query BlogIndexQuery {
  allMarkdownRemark(filter: {
    frontmatter: {
      post_type: {eq: 1}
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
          category
          folder
          tags
        }
      }
    }
  }
}`
