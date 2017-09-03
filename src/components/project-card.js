import React from 'react';
import Link from 'gatsby-link'

function ProjectCard(props) {
    return (
        <div>
            <h2>{props.title}</h2>
            <em>{props.subtitle}</em>
            <div>File To: \Blog\{props.folder}</div>
            <span>I'm a project</span>
            <p>{props.excerpt}</p>
            <Link to={props.path}>Read More</Link>
        </div>
    );
}

export default ProjectCard;