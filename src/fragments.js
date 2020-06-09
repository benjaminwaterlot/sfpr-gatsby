import { graphql } from 'gatsby'

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
      picture {
        display
        src {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      type
    }
  }
`
