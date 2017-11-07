
import React from 'react';
import Link from 'gatsby-link';

import {LINK_EMAIL, LINK_RESUME, LINK_LINKEDIN, LINK_GITHUB, LINK_TWITTER, LINK_FACEBOOK} from '../util/constants';
import IconFactory from '../components/icon-factory';

function About() {
  return (
    <div>
      <h2 className="page-title card">About</h2>
      <div className="about-body">
        <p>
        Hi! My name is Bret Finley. I'm a software devloper living in beautiful Boise, Idaho.
        I love to program in Java, JavaScript, and C. I'm always trying to learn more about
        programming and Computer Science in general.
        </p>
         When I'm not programming, I love playing video games, reading fiction (especially
         Lovecraft), going to movies, and snowboarding on Bogus Basin.
        <div className="about-links">
          <div className="row">
            <div className="col-md-6">
              <IconFactory icon="file" /> <a href={LINK_RESUME} target="_blank">Resume</a>
            </div>
            <div className="col-md-6">
              <IconFactory icon="email" /> <a href={LINK_EMAIL} target="_blank">Email</a>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <IconFactory icon ="linkedin" /> <a href={LINK_LINKEDIN} target="_blank">LinkedIn</a>
            </div>
            <div className="col-md-6">
              <IconFactory icon="github" /> <a href={LINK_GITHUB} target="_blank">GitHub</a>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <IconFactory icon="facebook" /> <a href={LINK_FACEBOOK} target="_blank">Facebook</a>
            </div>
            <div className="col-md-6">
              <IconFactory icon="twitter" /> <a href={LINK_TWITTER} target="_blank">Twitter</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
