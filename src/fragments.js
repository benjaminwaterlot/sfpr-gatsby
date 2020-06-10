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
            fluid(maxWidth: 500, quality: 60) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      type
    }
  }
`

// export const
