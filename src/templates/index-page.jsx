import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import CardGrid from '../components/CardGrid'
import Pagination from '../components/Pagination'

const IndexPage = ({
  data: {
    articles: { nodes: articles },
    featured,
  },
  pageContext: { currentPage, numberOfPages },
}) => (
  <Layout isHome={true}>
    <div className="container">
      <CardGrid
        articles={
          currentPage === 1 && featured
            ? [
                { ...featured, isFeatured: true },
                ...articles.filter(
                  ({ frontmatter: { title } }) =>
                    title !== featured?.frontmatter.title,
                ),
              ]
            : articles.filter(
                ({ frontmatter: { title } }) =>
                  title !== featured?.frontmatter.title,
              )
        }
      />
      <div>
        <Pagination
          createUrl={(page) => (page === 1 ? '/' : `/${page}`)}
          currentPage={currentPage}
          numberOfPages={numberOfPages}
        />
      </div>
    </div>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query Articles($from: Int!, $itemsPerPage: Int!, $featured: String) {
    featured: markdownRemark(
      frontmatter: { templateKey: { eq: "article" }, title: { eq: $featured } }
    ) {
      ...FeaturedArticleExcerpt
    }

    articles: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "article" } } }
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
