import React from 'react';

import SideFolder from './side-folder';

function SideCategory(props) {
    const renderedFolders = handleForlders(props.category, props.folders);
    return (
        <div>
            <div className="list-group">
                <a className="list-group-item" href={`/category/${props.category}`}>{props.category}\</a>
                {renderedFolders}
            </div>
        </div>
    );
}

function handleForlders(category, folders) {
    return folders.map((folder) => {
        return <SideFolder category={category} folder={folder} />
    });
};

export default SideCategory;