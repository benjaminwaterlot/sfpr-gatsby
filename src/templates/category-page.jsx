import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

export const CategoryPageTemplate = ({ body, helmet, title, articles }) => (
  <section className="section">
    {helmet || ''}
    <div className="container content">
      <div className="columns">
        <div className="column is-10 is-offset-1">
          <h1 className="title is-1 has-text-weight-bold">{title}</h1>
          {body}
          <h2 className="title is-2">Articles</h2>
          <div className="tile is-ancestor">
            {articles.map((article) => (
              <div key={article.id} className="tile is-parent is-4">
                <div className="tile is-child box">
                  <h3 className="subtitle">{article.frontmatter.title}</h3>
                  <p>{article.excerpt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
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
}) => (
  <Layout>
    <CategoryPageTemplate
      title={body.frontmatter.title}
      body={<div dangerouslySetInnerHTML={{ __html: body.html }} />}
      helmet={
        <Helmet titleTemplate="%s | Blog">
          <title>{`${body.frontmatter.title}`}</title>
          <meta name="description" content={`${body.excerpt}`} />
        </Helmet>
      }
      articles={articles}
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
  query PageQuery($id: String!, $articles: String!) {
    body: markdownRemark(id: { eq: $id }) {
      id
      excerpt
      html
      frontmatter {
        title
      }
    }

    articles: allMarkdownRemark(
      filter: { frontmatter: { type: { eq: $articles } } }
    ) {
      nodes {
        id
        excerpt
        frontmatter {
          title
        }
      }
    }
  }
`
