import React from 'react'
import Layout from '../components/Layout'
import WhiteBox from '../components/WhiteBox'
import Image from '../components/Image'
import { graphql } from 'gatsby'
import { formatDate } from '../lib/format'

const MemberCard = ({ member }) => {
  const Wrapper = member.website ? 'a' : 'div'

  return (
    <Wrapper
      style={{ display: 'flex', alignItems: 'center', borderRadius: 4 }}
      className="has-background-white-bis is-full-height px-2 py-2"
      {...(member.website && { href: member.website, target: '_blank' })}
    >
      {member.portrait && (
        <Image
          picture={member.portrait}
          height={65}
          width={65}
          style={{ borderRadius: 1000 }}
        />
      )}
      <div className="ml-3" style={{ flexGrow: 1 }}>
        <h4 className="subtitle is-6 mb-0">
          <span className="has-text-weight-semibold">{member.firstName}</span>{' '}
          <span className="has-text-weight-bold">{member.lastName}</span>
        </h4>
        {member.job && (
          <div className="overline has-text-grey-lighter mt-1">
            {member.job}
          </div>
        )}
      </div>
      {member.website && (
        <div className="mr-4 has-text-weight-bold has-text-grey-lighter">→</div>
      )}
    </Wrapper>
  )
}

const MemberGrid = ({ members }) => (
  <div className="columns is-multiline">
    {members.map(({ frontmatter: member }) => (
      <div
        className="column is-4"
        key={`${member.firstName} ${member.lastName}`}
      >
        <MemberCard member={member} />
      </div>
    ))}
  </div>
)

const AboutUsPage = ({
  data: {
    page: { frontmatter, html },
    memberNodes: { members },
  },
}) => (
  <Layout>
    <div className="container">
      <WhiteBox>
        <h1 className="title is-1">{frontmatter.title}</h1>

        <div className="markdown content mb-8">
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>

        <h2 className="title is-4 mt-7">{frontmatter.administrators}</h2>
        <MemberGrid
          members={members.filter(({ frontmatter: { roles } }) =>
            roles?.includes('ADMINISTRATOR'),
          )}
        />

        <h2 className="title is-4 mt-7">{frontmatter.founders}</h2>
        <MemberGrid
          members={members.filter(({ frontmatter: { roles } }) =>
            roles?.includes('FOUNDER'),
          )}
        />

        <h2 className="title is-4 mt-7">{frontmatter.members}</h2>
        <p className="mb-5">
          <strong>{members.length} sociétaires</strong> à la date du{' '}
          {formatDate(new Date())}
        </p>
        <MemberGrid members={members} />
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

    memberNodes: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "member" } } }
    ) {
      members: nodes {
        frontmatter {
          firstName
          lastName
          roles
          website
          job
          portrait {
            childImageSharp {
              fluid(maxWidth: 300, quality: 60) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
