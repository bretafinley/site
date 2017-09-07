import React from 'react';
import Link from 'gatsby-link';

import BlogCard from '../../components/cards/blog-card';
import ProjectCard from '../../components/cards/project-card';
import * as constants from '../../util/constants';

export default function TemplateDefault(props) {
    const pages = props.data.allMarkdownRemark.edges.map((d) => {
        const front = d.node.frontmatter;
        const excerpt = d.node.excerpt;

        switch(front.post_type) {
            case constants.BLOG_TYPE:
                return <BlogCard frontmatter={front} excerpt={excerpt} />
            case constants.PROJECT_TYPE:
                return <ProjectCard frontmatter={front} excerpt={excerpt} />
            default:
                return <div>NO CARD</div>
        }
    });

    return (
        <div>
            <div className="col-md-12">{pages}</div>
        </div>
    );
}