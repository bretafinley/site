import React from 'react'
import Link from 'gatsby-link'

import BlogCard from '../components/blog-card';

const Blog = ({data}) => {
  const blogs = data.allMarkdownRemark.edges.map((d) => {
    const excerpt = d.node.excerpt;
    const front = d.node.frontmatter;
    return <BlogCard title={front.title} subtitle={front.subtitle} excerpt={excerpt} path={front.path} folder={front.folder} />
  });
  return (
    <div>{blogs}</div>
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
        excerpt
        frontmatter {
          title
          subtitle
          path
          post_type
          folder
          tags
        }
      }
    }
  }
}`
