import React from 'react';
import Link from 'gatsby-link';
import {FaFile, FaEnvelope, FaGithub, FaLinkedin, FaFacebook, FaTwitter} from 'react-icons/lib/fa';

import {EMAIL_LINK, RESUME_LINK, LINKEDIN_LINK, GITHUB_LINK, TWITTER_LINK, FACEBOOK_LINK} from '../util/constants';

function About() {
  return (
    <div>
      <h2 className="page-title">About Me</h2>
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
              <FaFile /> <a href={RESUME_LINK} target="_blank">Resume</a>
            </div>
            <div className="col-md-6">
              <FaEnvelope /> <a href={EMAIL_LINK} target="_blank">Email</a>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <FaLinkedin /> <a href={LINKEDIN_LINK} target="_blank">LinkedIn</a>
            </div>
            <div className="col-md-6">
              <FaGithub /> <a href={GITHUB_LINK} target="_blank">GitHub</a>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <FaFacebook /> <a href={FACEBOOK_LINK} target="_blank">Facebook</a>
            </div>
            <div className="col-md-6">
              <FaTwitter /> <a href={TWITTER_LINK} target="_blank">Twitter</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
  

export default About;
