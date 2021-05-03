import { graphql } from 'gatsby'

export const article = graphql`
  fragment Article on MarkdownRemark {
    id
    html
    excerpt(pruneLength: 380)
    fields {
      slug
    }
    frontmatter {
      title
      date
      picture {
        display
        src {
          childImageSharp {
            fluid(maxWidth: 1200, quality: 60) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      type
    }
  }
`

export const articleExcerpt = graphql`
  fragment ArticleExcerpt on MarkdownRemark {
    id
    excerpt(pruneLength: 380)
    fields {
      slug
    }
    frontmatter {
      title
      date
      settings {
        description
      }
      picture {
        display
        src {
          childImageSharp {
            fluid(maxWidth: 500, quality: 40) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      type
    }
  }
`

export const featuredArticleExcerpt = graphql`
  fragment FeaturedArticleExcerpt on MarkdownRemark {
    id
    excerpt(pruneLength: 900)
    fields {
      slug
    }
    frontmatter {
      title
      date
      settings {
        description
      }
      picture {
        display
        src {
          childImageSharp {
            fluid(maxWidth: 500, quality: 40) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      type
    }
  }
`

export const member = graphql`
  fragment Member on MarkdownRemark {
    frontmatter {
      firstName
      lastName
      portrait {
        childImageSharp {
          fluid(maxWidth: 300, quality: 40) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      roles
      job
      website
    }
  }
`

export const blogExcerpt = graphql`
  fragment BlogExcerpt on MarkdownRemark {
    frontmatter {
      author
      title
      date
    }
    excerpt(pruneLength: 100)
  }
`
