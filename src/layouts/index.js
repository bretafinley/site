import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import MeCard from '../components/cards/me-card';
import SideCard from '../components/cards/side-card';
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import './theme.css'
import './style.css'

const Header = () => {
  return (
    <div className="nav-parent">
    <div className="container">
    <nav className="navbar" role="navigation">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <Link className="navbar-brand" to="/">Ghosts and Glass</Link>
      </div>

      <div className="collapse navbar-collapse navbar-ex1-collapse">
        <ul className="nav navbar-nav">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </div>
    </nav>
    </div>
    </div>
  );
}

const TemplateWrapper = ({ children }) =>
  <div>
    <Helmet
      title="Ghosts and Glass"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    
    <div>
    <Header />
    <div className="container">
      <div className="col-md-2">
        <MeCard />
      </div>
      <div className="col-md-8">
      {children()}
      </div>
      <div className="col-md-2">
        <SideCard />
      </div>
    </div>
    </div>
  </div>

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
