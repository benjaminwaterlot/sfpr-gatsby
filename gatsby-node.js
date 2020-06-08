const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const { fmImagesToRelative } = require('gatsby-remark-relative-images')

exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const { errors, data } = await graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        nodes {
          id
          fields {
            slug
          }
          frontmatter {
            tags
            templateKey
          }
        }
      }
    }
  `)

  if (errors) {
    errors.forEach((e) => console.error(e.toString()))
    return Promise.reject(errors)
  }

  const posts = data.allMarkdownRemark.nodes

  posts.forEach((node) => {
    const { id } = node
    console.log('Creating post', node.fields.slug)

    createPage({
      path: node.fields.slug,
      tags: node.frontmatter.tags,
      component: path.resolve(
        `src/templates/${String(node.frontmatter.templateKey)}.jsx`,
      ),
      // additional data can be passed via context
      context: {
        id,
      },
    })
  })

  // Tag pages:
  let tags = []
  // Iterate through each post, putting all found tags into `tags`
  posts.forEach((edge) => {
    if (_.get(edge, 'node.frontmatter.tags')) {
      tags = tags.concat(edge.node.frontmatter.tags)
    }
  })
  // Eliminate duplicate tags
  tags = _.uniq(tags)

  // Make tag pages
  tags.forEach((tag) => {
    const tagPath = `/tags/${_.kebabCase(tag)}/`

    createPage({
      path: tagPath,
      component: path.resolve('src/templates/tags.js'),
      context: {
        tag,
      },
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  fmImagesToRelative(node) // convert image paths for gatsby images

  if (node.internal.type === 'MarkdownRemark') {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: 'slug',
      node,
      value,
    })
  }
}
