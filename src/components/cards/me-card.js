
import React from 'react';

import {LINK_PROFILE, LINK_EMAIL, LINK_LINKEDIN, LINK_GITHUB, LINK_TWITTER, LINK_FACEBOOK} from '../../util/constants';
import IconFactory from '../icon-factory';

function MeCard(props) {
  return (
    <div className="me">
      <h4>Bret Finley</h4>
      <img src={LINK_PROFILE} alt="..." className="img-circle" />
      <div><em>Developer, Human</em></div>
      <div>Boise, Idaho</div>
      <div className="btn-group" role="group">
        <a className="btn" href={LINK_EMAIL} target="_blank"><IconFactory icon="email" /></a>
      </div>
      <div className="btn-group" role="group">
        <a className="btn" href={LINK_LINKEDIN} target="_blank"><IconFactory icon="linkedin" /></a>
        <a className="btn" href={LINK_GITHUB} target="_blank"><IconFactory icon="github" /></a>
      </div>
      <div className="btn-group" role="group">
        <a className="btn" href={LINK_TWITTER} target="_blank"><IconFactory icon="twitter" /></a>
        <a className="btn" href={LINK_FACEBOOK} target="_blank"><IconFactory icon="facebook" /></a>
      </div>
    </div>
  );
}

export default MeCard;
