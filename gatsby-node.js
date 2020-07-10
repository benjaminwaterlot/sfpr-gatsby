const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const { fmImagesToRelative } = require('gatsby-remark-relative-images')
const { logErrors, paginate } = require('./src/lib/gatsby-node-helpers')

exports.createPages = async ({ actions: { createPage }, graphql }) => {
  /**
   * Get all articles
   */
  const articlesQuery = await graphql(`
    {
      allMarkdownRemark(
        filter: { frontmatter: { templateKey: { eq: "article" } } }
      ) {
        nodes {
          id
          fields {
            slug
          }
          frontmatter {
            type
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
        frontmatter {
          featured_article
        }
      }
    }
  `)

  if (indexPageQuery.errors) return logErrors(indexPageQuery.errors)

  const { page } = indexPageQuery.data
  paginate({
    createPage,
    itemsNumber: articleNodes.length,
    itemsPerPage: 12,
    getPath: (page) => (page === 1 ? `/` : `/${page}`),
    component: path.resolve('src/templates/index-page.jsx'),
    context: {
      id: page.id,
      featured: page.frontmatter.featured_article,
    },
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
    const articles = articleNodes.filter(
      (article) =>
        article.frontmatter.type === categoryPage.frontmatter.contains,
    )

    paginate({
      createPage,
      itemsNumber: articles.length,
      itemsPerPage: 12,
      getPath: (page) => `${categoryPage.fields.slug}${page === 1 ? '' : page}`,
      component: path.resolve('src/templates/category-page.jsx'),
      context: {
        id: categoryPage.id,
        slug: categoryPage.fields.slug,
        articlesType: categoryPage.frontmatter.contains,
      },
    })
  })

  /**
   *
   * Create blog pages
   */
  const blogsQuery = await graphql(`
    {
      blogs: allMarkdownRemark(
        filter: { frontmatter: { templateKey: { eq: "blog" } } }
      ) {
        nodes {
          frontmatter {
            author
          }
        }
      }
    }
  `)

  const authors = [
    ...new Set(
      blogsQuery.data.blogs.nodes.map((blog) => blog.frontmatter.author),
    ),
  ]

  authors.forEach((author) => {
    createPage({
      path: `blogs/${author}`,
      component: path.resolve('src/templates/blog.jsx'),
      context: {
        author,
        authorSlug: `/members/${author}/`,
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
