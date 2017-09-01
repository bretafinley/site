import React from 'react';
import Link from 'gatsby-link'

function ProjectCard(props) {
    return (
        <div>
            <h4>{props.title}</h4>
            <div>File To: \Blog\{props.folder}</div>
            <span>I'm a project</span>
            <p>stuff stuff</p>
            <Link to={props.path}>Read More</Link>
        </div>
    );
}

export default ProjectCard;