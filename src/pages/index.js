
import React from 'react';
import Link from 'gatsby-link';

import BlogCard from '../components/cards/blog-card';
import ProjectCard from '../components/cards/project-card';
import * as constants from '../util/constants';

const IndexPage = ({data}) => {
  const pages = data.allMarkdownRemark.edges.map((d) => {
    const id = d.node.id;
    const front = d.node.frontmatter;
    const excerpt = d.node.excerpt;
    switch(front.post_type) {
      case constants.BLOG_TYPE:
        return <BlogCard key={id} frontmatter={front} excerpt={excerpt} />
      case constants.PROJECT_TYPE:
        return <ProjectCard key={id} frontmatter={front} excerpt={excerpt} />
      default:
        return <div>NO CARD</div>
    }
  });
  return (
    <div>
      <h2 className="card page-title">Home</h2>
      <div className="card">
        <h3>Hi There!</h3>
        <p>Welcome to my website: GhostsAndGlass.com. Here I have all of my current coding projects,
          thoughts, reviews, and rants. I love to code, read, and write, and this site is a tribute
          to all of that. Feel free to contact me via <a href="mailto:bretafinley@gmail.com">email</a> or
          connect with me on social media. 
        </p>
      </div>
      {pages}
    </div>
  );
}

export default IndexPage;

export const postQuery = graphql`
query IndexQurey {
  allMarkdownRemark(
    sort: { fields: [frontmatter___post_date], order: DESC }
  ) {
    edges {
      node {
        id
        excerpt(pruneLength: 250)
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
