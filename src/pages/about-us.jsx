import React from 'react'
import Layout from '../components/Layout'
import WhiteBox from '../components/WhiteBox'
import { graphql } from 'gatsby'

const AboutUsPage = ({
  data: {
    page: { frontmatter, html },
    members,
  },
}) => (
  <Layout>
    <div className="container">
      <WhiteBox>
        <h1 className="title is-1">{frontmatter.title}</h1>

        <div className="markdown content">
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>

        <h2 className="title is-2">{frontmatter.administrators}</h2>
        <h2 className="title is-2">{frontmatter.founders}</h2>
        <h2 className="title is-2">{frontmatter.members}</h2>

        {JSON.stringify(members)}
      </WhiteBox>
    </div>
  </Layout>
)

export default AboutUsPage

export const pageQuery = graphql`
  query AboutPage {
    page: markdownRemark(frontmatter: { templateKey: { eq: "about-us" } }) {
      html
      frontmatter {
        title
        administrators
        founders
        members
      }
    }

    members: markdownRemark(frontmatter: { templateKey: { eq: "member" } }) {
      frontmatter {
        firstName
        lastName
      }
    }
  }
`
