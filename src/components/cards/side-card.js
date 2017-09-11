import React from 'react';
import {FaTag, FaFolder} from 'react-icons/lib/fa';

import {getUniqueIdentifiers} from '../../util/utilities';
import SideCategory from '../side-category';

function SideCard(props) {
    const renderedFolders = handleFolders(props.folders);
    const renderedTags = handleTags(props.tags);

    return (
        <div className="side-index">
            <h5 id="folders-header"><FaFolder /> Folders</h5>
            {renderedFolders}
            <hr />
            <h5><FaTag /> Tags</h5>
            <div className="list-group">
                {renderedTags}
            </div>
        </div>
    );
}

function handleTags(arr) {
    arr.sort((a, b) => {
        return a.length - b.length;
    });
    return arr.map((d, i)=>{
        return <a className="list-group-item" key={i} href={`/tag/${d}`}>{d}</a>
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
        rendered.push(<SideCategory key={key} category={key} folders={category_folders[key]} />);
    }

    return rendered;
}

export default SideCard;

