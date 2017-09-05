import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import './theme.css'
import './style.css'

const Header = () => {
  return (
    <div className="container">
    <nav className="navbar" role="navigation">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
      </div>

      <div className="collapse navbar-collapse navbar-ex1-collapse">
        <ul className="nav navbar-nav">
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </div>
    </nav>
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
      {children()}
    </div>
    </div>
  </div>

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
