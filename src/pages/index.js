import React from 'react'
import Link from 'gatsby-link'

import BlogCard from '../components/blog-card';
import ProjectCard from '../components/project-card';

const IndexPage = ({data}) => {
  const pages = data.allMarkdownRemark.edges.map((d) => {
    const front = d.node.frontmatter;
    if(front.post_type == "Project") {
      return <ProjectCard title={front.title} path={front.path} />
    } else {
      return <BlogCard title={front.title} path={front.path} />
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
          path
        }
      }
    }
  }
}`
