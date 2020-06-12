import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import CardGrid from '../components/CardGrid'
import Pagination from '../components/Pagination'
import WhiteBox from '../components/WhiteBox'

export const CategoryPageTemplate = ({
  body,
  helmet,
  title,
  articles,
  pageContext,
}) => (
  <div className="container">
    <WhiteBox>
      {/* BODY */}
      {helmet || ''}
      <h1 className="title is-1">{title}</h1>
      <div className="markdown content">{body}</div>
    </WhiteBox>
    {/* ARTICLES */}
    <CardGrid articles={articles} />
    {/* PAGINATION */}
    {pageContext && pageContext.numberOfPages > 1 && (
      <div>
        <Pagination
          createUrl={(page) =>
            page === 1 ? pageContext.slug : `${pageContext.slug}${page}`
          }
          currentPage={pageContext.currentPage}
          numberOfPages={pageContext.numberOfPages}
        />
      </div>
    )}
  </div>
)

CategoryPageTemplate.propTypes = {
  body: PropTypes.node.isRequired,
  title: PropTypes.string,
  helmet: PropTypes.object,
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      excerpt: PropTypes.string.isRequired,
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }).isRequired,
      id: PropTypes.string.isRequired,
    }),
  ),
}

const CategoryPage = ({
  data: {
    body,
    articles: { nodes: articles },
  },
  pageContext,
}) => (
  <Layout>
    <CategoryPageTemplate
      title={body.frontmatter.title}
      body={<div dangerouslySetInnerHTML={{ __html: body.html }} />}
      helmet={
        <Helmet titleTemplate="%s | Blog">
          <title>{body.frontmatter.title}</title>
          <meta name="description" content={body.excerpt} />
        </Helmet>
      }
      articles={articles}
      pageContext={pageContext}
    />
  </Layout>
)

CategoryPage.propTypes = {
  data: PropTypes.shape({
    body: PropTypes.shape({
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }).isRequired,
      html: PropTypes.string.isRequired,
      excerpt: PropTypes.string.isRequired,
    }).isRequired,

    articles: PropTypes.shape({
      nodes: PropTypes.arrayOf(
        PropTypes.shape({
          excerpt: PropTypes.string.isRequired,
          frontmatter: PropTypes.shape({
            title: PropTypes.string.isRequired,
          }).isRequired,
          id: PropTypes.string.isRequired,
        }),
      ).isRequired,
    }).isRequired,
  }).isRequired,
}

export default CategoryPage

export const query = graphql`
  query PageQuery(
    $id: String!
    $articlesType: String!
    $from: Int!
    $itemsPerPage: Int!
  ) {
    body: markdownRemark(id: { eq: $id }) {
      id
      excerpt
      html
      frontmatter {
        title
      }
    }

    articles: allMarkdownRemark(
      filter: { frontmatter: { type: { eq: $articlesType } } }
      limit: $itemsPerPage
      skip: $from
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        ...ArticleExcerpt
      }
    }
  }
`
