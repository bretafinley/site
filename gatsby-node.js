const path = require('path');
const _ = require('lodash');

exports.createPages = ({boundActionCreators, graphql}) => {
    // createPage is a property of boundActionCreators
    const { createPage } = boundActionCreators;

    const templates = {
        "1": path.resolve('src/templates/blog-post.js'),
        "2": path.resolve('src/templates/project-post.js')
    };

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
                        post_type
                        category
                        folder
                        tags
                    }
                }
            }
        }
    }`).then(res => {
        if(res.errors) {
            return Promise.reject(res.errors);
        }

        let categories = [];
        let folders = [];
        let tags = [];

        // strip off d.node
        res.data.allMarkdownRemark.edges.forEach(({node}) => {
            categories.push(node.frontmatter.category);
            folders.push(node.frontmatter.category+"/"+node.frontmatter.folder);
            tags = tags.concat(node.frontmatter.tags);
            createPage({
                path: node.frontmatter.path,
                component: templates[node.frontmatter.post_type]
            });
        });

        categories = _.uniq(categories);
        folders = _.uniq(folders);
        tags = _.uniq(tags);

        categories.forEach((cat)=>{

        });

        folders.forEach((folder)=>{

        });

        tags.forEach((tag)=>{

        });
    })
}