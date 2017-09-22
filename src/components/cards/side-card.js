import React from 'react';

import {getUniqueIdentifiers} from '../../util/utilities';
import IconFactory from '../../components/icon-factory';
import SideCategory from '../side-category';

function SideCard(props) {
    const renderedFolders = handleFolders(props.folders);
    const renderedTags = handleTags(props.tags);

    return (
        <div className="side-index">
            <div className="card">
                <h5 className="side-header"><IconFactory icon="folder" /> Folders</h5>
                {renderedFolders}
            </div>
            <div className="card">
                <h5 className="side-header"><IconFactory icon="tag" /> Tags</h5>
                <div className="list-group side-tags">
                    {renderedTags}
                </div>
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

