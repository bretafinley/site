import React from 'react'
import Link from 'gatsby-link'

const IndexPage = ({data}) => {
  const pages = data.allMarkdownRemark.edges.map((d) => {
    const front = d.node.frontmatter;
    return (<div><Link to={front.path}>{front.title}</Link><br /></div>);
  });
  return (
    <div>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <Link to="/page-2/">Go to page 2</Link>
      <div>{pages}</div>
    </div>
  );
}

export default IndexPage

export const postQuery = graphql`
query IndexQurey {
  allMarkdownRemark {
    edges {
      node {
        id
        frontmatter {
          title
          path
        }
      }
    }
  }
}`
