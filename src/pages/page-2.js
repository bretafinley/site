import React from 'react'
import Link from 'gatsby-link'

const SecondPage = () =>
  <div>
    <h1>Hi people</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link><br />
    <Link to="/page-3/">Go to third page</Link>
  </div>

export default SecondPage
