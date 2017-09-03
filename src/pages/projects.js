import React from 'react';
import Link from 'gatsby-link';

import ProjectCard from '../components/project-card';

const Projects = ({data}) => {
  console.log(data)
  const projects = data.allMarkdownRemark.edges.map((d) => {
    const excerpt = d.node.excerpt;
    const front = d.node.frontmatter;
    return <ProjectCard title={front.title} subtitle={front.subtitle} excerpt={excerpt} path={front.path} folder={front.folder} />
  });
  return (
    <div>{projects}</div>
  );
};
  
export default Projects;

export const projectQuery = graphql`
query ProjectIndexQuery {
  allMarkdownRemark(filter: {
    frontmatter: {
      post_type: {eq: 2}
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