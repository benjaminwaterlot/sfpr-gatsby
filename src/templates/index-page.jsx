import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import CardGrid from '../components/CardGrid'

const IndexPage = ({
  data: {
    articles: { nodes: articles },
  },
}) => {
  return (
    <Layout>
      <div className="container">
        <CardGrid articles={articles} />
      </div>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query Articles {
    articles: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "article" } } }
    ) {
      nodes {
        ...ArticleExcerpt
      }
    }
  }
`
