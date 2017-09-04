import React from 'react'
import Link from 'gatsby-link'

import BlogCard from '../components/blog-card';
import ProjectCard from '../components/project-card';

const IndexPage = ({data}) => {
  const pages = data.allMarkdownRemark.edges.map((d) => {
    const front = d.node.frontmatter;
    const excerpt = d.node.excerpt;
    if(front.post_type == "Project") {
      return <ProjectCard frontmatter={front} excerpt={excerpt} />
    } else {
      return <BlogCard frontmatter={front} excerpt={excerpt} />
    }
  });
  return (
    <div>{pages}</div>
  );
}

export default IndexPage;

export const postQuery = graphql`
query IndexQurey {
  allMarkdownRemark {
    edges {
      node {
        id
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
