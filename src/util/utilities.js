
import _ from 'lodash';

export function resolveStringToLocation(str) {
  return str.replace(/\s+/g, '-').toLowerCase();
}

export function getUniqueIdentifiers(data) {
  let categories = [];
  let folders = [];
  let tags = [];
  data.allMarkdownRemark.edges.forEach(({node}) => {
    categories.push(node.frontmatter.category);
    folders.push(`${node.frontmatter.category}/${node.frontmatter.folder}`);
    tags = tags.concat(node.frontmatter.tags);
  });

  return {
    categories: _.uniq(categories),
    folders: _.uniq(folders),
    tags: _.uniq(tags)
  }
}
