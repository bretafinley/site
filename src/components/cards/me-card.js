import React from 'react';
import {FaEnvelope, FaLinkedin, FaGithub, FaTwitter, FaFacebook} from 'react-icons/lib/fa';

import {PROFILE_LINK, EMAIL_LINK, LINKEDIN_LINK, GITHUB_LINK, TWITTER_LINK, FACEBOOK_LINK} from '../../util/constants';

function MeCard(props) {
    return (
        <div className="me">
            <h4>Bret Finley</h4>
            <img src={PROFILE_LINK} alt="..." class="img-circle" />
            <div><em>Developer, Human</em></div>
            <div>Boise, Idaho</div>
            <div className="btn-group" role="group">
                <a className="btn" href={EMAIL_LINK} target="_blank"><FaEnvelope /></a>
            </div>
            <div className="btn-group" role="group">
                <a className="btn" href={LINKEDIN_LINK} target="_blank"><FaLinkedin /></a>
                <a className="btn" href={GITHUB_LINK} target="_blank"><FaGithub /></a>
            </div>
            <div className="btn-group" role="group">
                <a className="btn" href={TWITTER_LINK} target="_blank"><FaTwitter /></a>
                <a className="btn" href={FACEBOOK_LINK} target="_blank"><FaFacebook /></a>
            </div>
        </div>
    );
}

export default MeCard;