const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const { fmImagesToRelative } = require('gatsby-remark-relative-images')

const logErrors = (errors) => {
  errors.forEach((e) => console.error(e.toString()))
  return Promise.reject(errors)
}

exports.createPages = async ({ actions: { createPage }, graphql }) => {
  /**
   *
   * Create articles
   */
  const { errors, data } = await graphql(`
    {
      allMarkdownRemark(
        limit: 1000
        filter: { frontmatter: { templateKey: { ne: "category-page" } } }
      ) {
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

  if (errors) return logErrors(errors)

  const content = data.allMarkdownRemark.nodes

  content.forEach((node) => {
    console.log('Creating page: ', node.fields.slug)

    createPage({
      path: node.fields.slug,
      tags: node.frontmatter.tags,
      component: path.resolve(
        `src/templates/${String(node.frontmatter.templateKey)}.jsx`,
      ),
      // additional data can be passed via context
      context: {
        id: node.id,
      },
    })
  })

  /**
   *
   * Create category pages
   */
  const categoryPagesQuery = await graphql(`
    {
      allMarkdownRemark(
        filter: { frontmatter: { templateKey: { eq: "category-page" } } }
      ) {
        nodes {
          id
          frontmatter {
            title
            contains
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  `)

  const categories = categoryPagesQuery.data.allMarkdownRemark.nodes
  console.log('category', categories)
  categories.forEach((categoryPage) => {
    console.log('PAAAGE', categoryPage)

    createPage({
      path: categoryPage.fields.slug,
      component: path.resolve(`src/templates/category-page.jsx`),
      context: {
        slug: categoryPage.fields.slug,
        id: categoryPage.id,
        articles: categoryPage.frontmatter.contains,
      },
    })
  })

  /**
   *
   * Create tags
   */
  let tags = []
  // Iterate through each post, putting all found tags into `tags`
  content.forEach((edge) => {
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
