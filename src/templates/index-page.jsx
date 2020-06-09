import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/Layout'
import CardGrid from '../components/CardGrid'
import Pagination from '../components/Pagination'

const IndexPage = ({
  data: {
    articles: { nodes: articles },
  },
  pageContext,
}) => {
  return (
    <Layout>
      <div className="container">
        <CardGrid articles={articles} />
        <div>
          <Pagination
            createUrl={(page) => (page === 1 ? '/' : `/${page}`)}
            currentPage={pageContext.currentPage}
            numberOfPages={pageContext.numberOfPages}
          />
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query Articles($from: Int!, $itemsPerPage: Int!) {
    articles: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "article" } } }
      limit: $itemsPerPage
      skip: $from
    ) {
      nodes {
        ...ArticleExcerpt
      }
    }
  }
`
