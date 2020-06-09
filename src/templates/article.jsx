import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

export const ArticleTemplate = ({ body, title, helmet }) => {
  return (
    <section className="section">
      {helmet || ''}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            {body}
          </div>
        </div>
      </div>
    </section>
  )
}

const Article = ({ data }) => {
  const { markdownRemark: page } = data

  return (
    <Layout>
      <ArticleTemplate
        body={<div dangerouslySetInnerHTML={{ __html: page.html }} />}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${page.frontmatter.title}`}</title>
            <meta name="description" content={`${page.excerpt}`} />
          </Helmet>
        }
        title={page.frontmatter.title}
      />
    </Layout>
  )
}

Article.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default Article

export const pageQuery = graphql`
  query pageByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      excerpt
      frontmatter {
        title
      }
    }
  }
`
