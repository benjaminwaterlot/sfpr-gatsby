import { useStaticQuery, graphql } from 'gatsby'

export default () =>
  useStaticQuery(graphql`
    query Layout {
      site {
        siteMetadata {
          title
          description
        }
      }

      home: markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
        frontmatter {
          title
          intro
        }
      }

      appCover: file(relativePath: { eq: "app-cover.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 80) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
