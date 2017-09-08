import React from 'react';
import {FaTag, FaFolder} from 'react-icons/lib/fa';

import {getUniqueIdentifiers} from '../../util/utilities';
import SideCategory from '../side-category';

function SideCard(props) {
    const renderedFolders = handleFolders(props.folders);
    const renderedTags = handleTags(props.tags);

    return (
        <div className="side-index">
            <h5><FaFolder /> Folders</h5>
            {renderedFolders}
            <h5><FaTag /> Tags</h5>
            <div className="list-group">
                {renderedTags}
            </div>
            <h5>Recent Posts</h5>
            <div className="list-group">
                <a className="list-group-item" href="#">The Dark Knight Review</a>
                <a className="list-group-item" href="#">Why R Developers Can't Get Dates</a>
                <a className="list-group-item" href="#">React Reactions</a>
            </div>
        </div>
    );
}

function handleTags(arr) {
    return arr.map((d)=>{
        return <a className="list-group-item" href="#">{d}</a>
    });
}

function handleFolders(folders) {
    let category_folders = {};
    folders.forEach((folder) => {
        let levels = folder.split("/");
        if(!category_folders[levels[0]]) {
            category_folders[levels[0]] = [];
        }

        category_folders[levels[0]].push(levels[1]);
    });

    let rendered = [];
    for(let key in category_folders) {
        rendered.push(<SideCategory category={key} folders={category_folders[key]} />);
    }

    return rendered;
}

export default SideCard;

