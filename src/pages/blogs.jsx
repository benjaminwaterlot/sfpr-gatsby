import React from 'react'
import Layout from '../components/Layout'
import WhiteBox from '../components/WhiteBox'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'
import Image from '../components/Image'
import { formatDate } from '../lib/format'

const AuthorCard = ({ author, blogs }) => (
  <div className="column is-6-tablet is-4-widescreen">
    <Link to={`/blogs/${author.slug}`}>
      <div
        className="card is-full-height is-interactive"
        style={{ borderRadius: 6, overflow: 'hidden' }}
      >
        <div className="card-content">
          <div
            style={{ display: 'flex', alignItems: 'center', borderRadius: 4 }}
            className="is-full-height"
          >
            {author.portrait && (
              <Image
                picture={author.portrait}
                height={65}
                width={65}
                style={{ borderRadius: 1000 }}
              />
            )}

            <div className="ml-3" style={{ flexGrow: 1 }}>
              <h4 className="subtitle is-6 mb-0">
                <span className="has-text-weight-semibold">Blog de</span>{' '}
                <span className="has-text-weight-bold">
                  {author.firstName} {author.lastName}
                </span>
              </h4>
              <div className="is-size-7 has-text-grey-lighter mt-1">
                <span className="has-text-weight-semibold">
                  {blogs.length} article{blogs.length > 1 && 's'} de blog
                </span>
              </div>
            </div>
          </div>

          <hr className="my-3" />

          <h3 className="title is-6 mb-0">{blogs[0].frontmatter.title}</h3>
          <div className="is-size-7 has-text-weight-semibold has-text-grey-lighter mb-2">
            Le {formatDate(new Date(blogs[0].frontmatter.date))}
          </div>
          <p className="is-size-7">{blogs[0].excerpt}</p>
        </div>
      </div>
    </Link>
  </div>
)

const BlogsPage = ({ data: { page, blogs, authors } }) => {
  const blogsByAuthor = blogs.nodes.reduce(
    (blogsByAuthor, blog) => ({
      ...blogsByAuthor,
      [blog.frontmatter.author]: [
        ...(blogsByAuthor[blog.frontmatter.author] || []),
        blog,
      ],
    }),
    {},
  )

  const authorEntries = Object.entries(blogsByAuthor)
    .map(([authorSlug, blogs]) => {
      const author = authors.nodes.find(
        (author) => author.fields.slug === `/members/${authorSlug}/`,
      )

      return author
        ? [{ ...author.frontmatter, slug: authorSlug }, blogs]
        : [undefined, blogs]
    })
    .filter(([author]) => author)

  return (
    <Layout>
      <div className="container">
        <WhiteBox>
          <Helmet titleTemplate="%s | SFPR">
            <title>{page.frontmatter.title}</title>
            <meta name="description" content={page.frontmatter.excerpt} />
          </Helmet>

          <h1 className="title is-1">{page.frontmatter.title}</h1>

          <div className="markdown content mb-8">
            <div dangerouslySetInnerHTML={{ __html: page.html }} />
          </div>
        </WhiteBox>

        <div className="columns is-multiline">
          {authorEntries.map(([author, blogs]) => (
            <AuthorCard key={author.slug} author={author} blogs={blogs} />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default BlogsPage

export const pageQuery = graphql`
  query BlogsPage {
    page: markdownRemark(frontmatter: { templateKey: { eq: "blogs-page" } }) {
      html
      excerpt
      frontmatter {
        title
      }
    }

    blogs: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "blog" } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        ...BlogExcerpt
      }
    }

    authors: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "member" } } }
    ) {
      nodes {
        fields {
          slug
        }
        ...Member
      }
    }
  }
`
