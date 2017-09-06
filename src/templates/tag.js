import React from 'react';
import Link from 'gatsby-link';

import BlogCard from '../components/blog-card';
import ProjectCard from '../components/project-card';

// this code gets repeated a lot
export default function Template({data}) {
    const pages = data.allMarkdownRemark.edges.map((d) => {
        const front = d.node.frontmatter;
        const excerpt = d.node.excerpt;
        if(front.post_type == 2) {
            return <ProjectCard frontmatter={front} excerpt={excerpt} />
          } else {
            return <BlogCard frontmatter={front} excerpt={excerpt} />
          }
    });

    return (
        <div>
            <div className="col-md-2"></div>
            <div className="col-md-8">{pages}</div>
            <div className="col-md-2"></div>
        </div>
    );
}

export const postQuery = graphql`
query TagIndex($tag: String!) {
    allMarkdownRemark(filter: {
        frontmatter: {
            tags: {eq: $tag}
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
