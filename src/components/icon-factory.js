
import React from 'react';
import * as ICONS from 'react-icons/lib/fa';

import * as constants from '../util/constants'

function IconFactory(props) {
    let i = props.icon.toLowerCase();
    switch(i) {
        case constants.ICON_EMAIL:
            return <ICONS.FaEnvelope />;
        case constants.ICON_GITHUB:
            return <ICONS.FaGithub />;
        case constants.ICON_FOLDER:
            return <ICONS.FaFolder />;
        case constants.ICON_FILE:
            return <ICONS.FaFile />;
        case constants.ICON_TAG:
            return <ICONS.FaTag />;
        case constants.ICON_CALENDAR:
            return <ICONS.FaCalendar />;
        case constants.ICON_FACEBOOK:
            return <ICONS.FaFacebook />;
        case constants.ICON_TWITTER:
            return <ICONS.FaTwitter />;
        case constants.ICON_LINKEDIN:
            return <ICONS.FaLinkedin />;
        case constants.ICON_DIRINDENT:
            return <ICONS.FaAngleRight />;
        default:
            return <span>NO ICON</span>;
    }
}

export default IconFactory;