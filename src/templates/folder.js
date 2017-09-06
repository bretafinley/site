import React from 'react';
import Link from 'gatsby-link';

import BlogCard from '../components/blog-card';
import ProjectCard from '../components/project-card';

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