import React from 'react';
import {FaTag, FaFolder} from 'react-icons/lib/fa';

import {getUniqueIdentifiers} from '../../util/utilities';
import SideCategory from '../side-category';

function SideCard(props) {
    const renderedCategories = handleArray(props.categories);
    const processedFolders = processFolders(props.folders);
    console.log(processedFolders)
    const foo = renderFolders(processedFolders);
    console.log(foo)
    const renderedTags = handleArray(props.tags);
    processFolders(props.folders)
    return (
        <div className="side-index">
            <div>
            <h5><FaFolder /> Folders</h5>
            {foo}
            </div>
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

function handleArray(arr) {
    return arr.map((d)=>{
        return <a className="list-group-item" href="#">{d}</a>
    });
}

function processFolders(folders) {
    let category_folders = {};
    folders.forEach((folder) => {
        let levels = folder.split("/");
        if(!category_folders[levels[0]]) {
            category_folders[levels[0]] = [];
        }

        category_folders[levels[0]].push(levels[1]);
    });

    return category_folders;
}

function renderFolders(processedFolders) {
    let cats = [];
    for(let key in processedFolders) {
        cats.push(<SideCategory category={key} folders={processedFolders[key]} />);
    }

    return cats;
}

export default SideCard;

