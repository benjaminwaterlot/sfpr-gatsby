import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout/Layout'
import { markdownRemarkType } from '../lib/prop-types'
import ArticleOverline from '../components/ArticleOverline'
import Image from '../components/Image'

export const ArticleTemplate = ({ body, title, helmet, cover, type, date }) => (
  <div className="container box pt-7 px-7 pb-10 overflow-auto">
    {helmet || ''}
    <ArticleOverline {...{ type, date }} />
    <h1 className="title is-size-2 is-bold-light mt-2">{title}</h1>

    <div>
      {cover.src && (
        <Image
          picture={cover}
          className={cover.display === 'cover' ? 'my-6' : 'mr-5'}
          height={380}
        />
      )}

      <div className="markdown content">{body}</div>
    </div>
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
