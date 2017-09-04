import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import './theme.css'

const Header = () => {
  return (
    <nav classNameName="navbar navbar-default">
    <div classNameName="container-fluid">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <Link className="navbar-brand" to="/">Bret Finley</Link>
      </div>
      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul className="nav navbar-nav">
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </div>
    </div>
  </nav>
  );
}

const TemplateWrapper = ({ children }) =>
  <div>
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </div>

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
