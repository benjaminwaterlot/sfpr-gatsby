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
  const articlesQuery = await graphql(`
    {
      allMarkdownRemark(
        limit: 1000
        filter: { frontmatter: { templateKey: { eq: "article" } } }
      ) {
        nodes {
          id
          fields {
            slug
          }
        }
      }
    }
  `)

  if (articlesQuery.errors) return logErrors(articlesQuery.errors)

  const articleNodes = articlesQuery.data.allMarkdownRemark.nodes

  articleNodes.forEach((node) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve('src/templates/article.jsx'),
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

  if (categoryPagesQuery.errors) return logErrors(categoryPagesQuery.errors)

  const categoryNodes = categoryPagesQuery.data.allMarkdownRemark.nodes

  categoryNodes.forEach((categoryPage) => {
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
}

exports.onCreateNode = ({ node, actions: { createNodeField }, getNode }) => {
  fmImagesToRelative(node) // convert image paths for gatsby images

  if (node.internal.type === 'MarkdownRemark')
    createNodeField({
      name: 'slug',
      node,
      value: createFilePath({ node, getNode }),
    })
}
