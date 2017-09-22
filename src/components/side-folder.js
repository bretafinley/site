import React from 'react';

import IconFactory from './icon-factory';

function SideFolder(props) {
    return (
        <a className="list-group-item" href={`/folder/${props.category}/${props.folder}`}>
            <IconFactory icon="dirindent" />
            {props.folder}
        </a>
    );
}

export default SideFolder;