import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'

const IndexPage = ({
  data: {
    home: { frontmatter },
  },
}) => {
  return <Layout>Index</Layout>
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate($id: String!) {
    home: markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        intro
        cover {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
