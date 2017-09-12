import React from 'react';
import Link from 'gatsby-link';

import ProjectCard from '../components/cards/project-card';

const Projects = ({data}) => {
  const projects = data.allMarkdownRemark.edges.map((d, i) => {
    const excerpt = d.node.excerpt;
    const front = d.node.frontmatter;
    return <ProjectCard key={i} frontmatter={front} excerpt={excerpt} />
  });
  return (
    <div>
      <h2 className="card page-title">Projects</h2>
      {projects}
    </div>
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
          subject_url
          post_date
          category
          folder
          tags
        }
      }
    }
  }
}`