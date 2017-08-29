const path = require('path');

exports.createPages = ({boundActionCreators, graphql}) => {
    // createPage is a property of boundActionCreators
    const { createPage } = boundActionCreators;

    const postTemplate = path.resolve('src/templates/blog-post.js');

    // remark generates the id for us
    return graphql(`{
        allMarkdownRemark {
            edges {
                node {
                    html
                    id
                    frontmatter {
                        path
                        title
                    }
                }
            }
        }
    }`).then(res => {
        if(res.errors) {
            return Promise.reject(res.errors);
        }

        // strip off d.node
        res.data.allMarkdownRemark.edges.forEach(({node}) => {
            createPage({
                path: node.frontmatter.path,
                component: postTemplate
            });
        });
    })
}