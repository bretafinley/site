import React from 'react';
import Link from 'gatsby-link';

import {resolveStringToLocation} from '../util/utilities';

function Tag(props) {
    const location = resolveStringToLocation(props.text);
    return (
        <span className="tag"><Link to={`/tag/${location}`}>{props.text};</Link></span>
    );
}

export default Tag;