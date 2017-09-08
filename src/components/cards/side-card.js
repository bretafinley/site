import React from 'react';

import {getUniqueIdentifiers} from '../../util/utilities';

function SideCard(props) {
    console.log(props)
    const renderedCategories = handleArray(props.categories);
    const renderedFolders = handleArray(props.folders);
    const renderedTags = handleArray(props.tags);
    return (
        <div className="side-index">
            <h5>Categories</h5>
            <div className="list-group">
                {renderedCategories}
            </div>
            <h5>Folders</h5>
            <div className="list-group">
                {renderedFolders}
            </div>
            <h5>Tags</h5>
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
        console.log(d)
        return <a className="list-group-item" href="#">{d}</a>
    });
}

export default SideCard;

