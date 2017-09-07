import React from 'react';

import {getUniqueIdentifiers} from '../../util/utilities';

function SideCard(props) {
    return (
        <div className="side-index">
            <h5>Categories</h5>
            <div className="list-group">
                <a className="list-group-item" href="#">Movies</a>
                <a className="list-group-item" href="#">Development</a>
                <a className="list-group-item" href="#">Reviews</a>
            </div>
            <h5>Folders</h5>
            <div className="list-group">
                <a className="list-group-item" href="#">Movies/Horror</a>
                <a className="list-group-item" href="#">Dev/Web</a>
                <a className="list-group-item" href="#">Reviews/Good</a>
            </div>
            <h5>Tags</h5>
            <div className="list-group">
                <a className="list-group-item" href="#">C</a>
                <a className="list-group-item" href="#">JavaScript</a>
                <a className="list-group-item" href="#">React</a>
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

export default SideCard;


