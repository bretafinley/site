const path = require('path');
const _ = require('lodash');

function resolveStringToLocation(str) {
    return str.replace(/\s+/g, '-').toLowerCase();
}

exports.createPages = ({boundActionCreators, graphql}) => {
    // createPage is a property of boundActionCreators
    const { createPage } = boundActionCreators;

    const templates = {
        "1": path.resolve('src/templates/posts/blog-post.js'),
        "2": path.resolve('src/templates/posts/project-post.js')
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
            const resolvedCat = resolveStringToLocation(cat);
            const location = `/category/${resolvedCat}`;
            createPage({
                path: location,
                component: path.resolve('src/templates/indexes/category-index.js'),
                context: {
                    category: cat
                }
            });
        });

        folders.forEach((folder)=>{
            const [ level1, level2 ] = folder.split("/");
            const resolvedFolder = resolveStringToLocation(folder);
            const location = `/folder/${resolvedFolder}`;
            createPage({
                path: location,
                component: path.resolve('src/templates/indexes/folder-index.js'),
                context: {
                    category: level1,
                    folder: level2
                }
            });
        });

        tags.forEach((tag)=>{
            const resolvedTag = resolveStringToLocation(tag);
            const location = `/tag/${resolvedTag}`;
            createPage({
                path: location,
                component: path.resolve('src/templates/indexes/tag-index.js'),
                context: {
                    tag: tag
                }
            });
        });
    })
}