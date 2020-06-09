import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const CategoryPageTemplate = ({
  content,
  ContentComponent = Content,
  title,
  helmet,
}) => {
  return (
    <section className="section">
      {helmet || ''}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <ContentComponent content={content} />
          </div>
        </div>
      </div>
    </section>
  )
}

CategoryPageTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  ContentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const CategoryPage = ({ data }) => {
  const { markdownRemark: page } = data

  return (
    <Layout>
      <CategoryPageTemplate
        content={page.html}
        ContentComponent={HTMLContent}
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

CategoryPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default CategoryPage

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
