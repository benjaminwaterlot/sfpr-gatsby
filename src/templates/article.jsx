import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout/Layout'
import { markdownRemarkType } from '../lib/prop-types'

export const ArticleTemplate = ({ body, title, helmet }) => (
  <div className="container box py-6 px-6">
    {helmet || ''}
    <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
      {title}
    </h1>
    {body}
  </div>
)

ArticleTemplate.propTypes = {
  body: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  helmet: PropTypes.node,
}

const Article = ({ data: { markdownRemark: page } }) => (
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

Article.propTypes = {
  data: PropTypes.shape({
    markdownRemark: markdownRemarkType,
  }).isRequired,
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
