const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const { fmImagesToRelative } = require('gatsby-remark-relative-images')

const logErrors = (errors) => {
  errors.forEach((e) => console.error(e.toString()))
  return Promise.reject(errors)
}

exports.createPages = async ({ actions: { createPage }, graphql }) => {
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

  /**
   * Create index page
   */
  const indexPageQuery = await graphql(`
    {
      page: markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
        id
        fields {
          slug
        }
      }
    }
  `)

  if (indexPageQuery.errors) return logErrors(indexPageQuery.errors)

  const { page } = indexPageQuery.data
  const ITEMS_PER_PAGE = 3

  const numberOfPages = Math.ceil(articleNodes.length / ITEMS_PER_PAGE)

  Array(numberOfPages)
    .fill()
    .forEach((_, idx) => {
      createPage({
        path:
          idx === 0 ? `${page.fields.slug}` : `${page.fields.slug}${idx + 1}`,
        component: path.resolve('src/templates/index-page.jsx'),
        context: {
          id: page.id,
          from: idx * ITEMS_PER_PAGE,
          currentPage: idx + 1,
          numberOfPages,
          itemsPerPage: ITEMS_PER_PAGE,
        },
      })
    })

  /**
   *
   * Create articles
   */
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
