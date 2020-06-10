import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout/Layout'
import { markdownRemarkType } from '../lib/prop-types'
import Image from 'gatsby-image'
import ArticleOverline from '../components/ArticleOverline'

export const ArticleTemplate = ({ body, title, helmet, cover, type, date }) => (
  <div className="container box py-6 px-6">
    {helmet || ''}
    <ArticleOverline {...{ type, date }} />
    <h1 className="title is-size-2 is-bold-light mt-2">{title}</h1>
    {cover.src && cover.display === 'cover' && (
      <Image
        fluid={cover.src.childImageSharp.fluid}
        style={{ maxHeight: 380 }}
        className="my-6"
      />
    )}
    {cover.src && cover.display === 'embed' && (
      <Image
        fluid={cover.src.childImageSharp.fluid}
        style={{ cssFloat: 'left', width: '33%' }}
        className="mr-5"
      />
    )}
    {body}
  </div>
)

ArticleTemplate.propTypes = {
  body: PropTypes.node.isRequired,
  cover: PropTypes.shape({
    src: PropTypes.object,
    display: PropTypes.string.isRequired,
  }).isRequired,
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
      cover={page.frontmatter.picture}
      type={page.frontmatter.type}
      date={page.frontmatter.date}
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
      ...Article
    }
  }
`
