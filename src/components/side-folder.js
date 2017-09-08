import React from 'react';
import {FaAngleRight} from 'react-icons/lib/fa';

function SideFolder(props) {
    return (
        <a className="list-group-item side-folder" href={`/folder/${props.category}/${props.folder}`}>
            <FaAngleRight />
            {props.folder}
        </a>
    );
}

export default SideFolder;