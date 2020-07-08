import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import WhiteBox from '../components/WhiteBox'
import { formatDate } from '../lib/format'
import Image from '../components/Image'

export const BlogPost = ({ blog }) => (
  <div>
    <hr />

    <div className="overline has-text-grey-light mb-2">
      {formatDate(blog.frontmatter.date)}
    </div>
    <h2 className="title is-3">{blog.frontmatter.title}</h2>
    <div
      className="markdown content mb-8"
      dangerouslySetInnerHTML={{ __html: blog.html }}
    />
  </div>
)

export const BlogTemplate = ({ helmet, author, blogs }) => (
  <div className="container">
    <WhiteBox>
      {/* BODY */}
      {helmet || ''}
      <div className="is-flex" style={{ alignItems: 'center' }}>
        <Image
          className="mr-5"
          picture={author.portrait}
          height={80}
          width={80}
          style={{ borderRadius: 1000 }}
        />
        <div>
          <h1 className="title is-2 mb-0">
            Blog de {author.firstName} {author.lastName}
          </h1>
          <div>
            <div className="overline has-text-grey-lighter mt-1">
              {author.job && <span>{author.job}</span>}
              {author.website && (
                <a
                  className="mr-4 has-text-weight-bold has-text-grey-lighter"
                  href={author.website}
                  target="_blank"
                  rel="noreferrer"
                >
                  {' '}
                  - Voir le site internet
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="ml-3" style={{ flexGrow: 1 }}></div>

      {blogs.map((blog) => (
        <BlogPost blog={blog} key={blog.frontmatter.title} />
      ))}
    </WhiteBox>

    {/* ARTICLES */}
    {/* <CardGrid articles={articles} /> */}
  </div>
)

const Blog = ({
  data: {
    author: { frontmatter: author },
    blogs: { nodes: blogs },
  },
}) => (
  <Layout>
    <BlogTemplate
      author={author}
      helmet={
        <Helmet titleTemplate="%s | SFPR">
          <title>{`Blog de ${author.firstName} ${author.lastName}`}</title>
          {/* <meta name="description" content={body.excerpt} /> */}
        </Helmet>
      }
      blogs={blogs}
    />
  </Layout>
)

export default Blog

export const blogQuery = graphql`
  query Blog($author: String!, $authorSlug: String!) {
    author: markdownRemark(fields: { slug: { eq: $authorSlug } }) {
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

    blogs: allMarkdownRemark(
      filter: {
        frontmatter: { templateKey: { eq: "blog" }, author: { eq: $author } }
      }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        frontmatter {
          title
          date
        }

        html
      }
    }
  }
`
