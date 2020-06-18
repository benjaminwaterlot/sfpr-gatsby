import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { markdownRemarkType } from '../lib/prop-types'
import ArticleOverline from './ArticleOverline'
import Image from 'gatsby-image'

const Card = ({
  article: {
    fields,
    excerpt,
    frontmatter: { picture, type, date, title },
    isFeatured,
  },
}) => (
  <div
    className={(() => {
      const tablet = isFeatured ? `is-12-tablet` : `is-6-tablet`
      const widescreen = isFeatured ? `is-8-widescreen` : `is-4-widescreen`

      return `column ${tablet} ${widescreen}`
    })()}
  >
    <Link to={fields.slug}>
      <div
        className="card is-full-height is-interactive"
        style={{ borderRadius: 6, overflow: 'hidden' }}
      >
        {picture?.src && picture.display === 'cover' && (
          <div className="card-image">
            <Image
              fluid={picture.src.childImageSharp.fluid}
              style={{ height: isFeatured ? 300 : 220 }}
            />
          </div>
        )}

        <div className="card-content">
          <ArticleOverline {...{ type, date }} />
          <h3 className="title is-5 mt-1">{title}</h3>
          <div className="overflow-auto">
            {picture?.src && picture.display === 'embed' && (
              <Image
                className="mr-3 my-1 float-left"
                fluid={picture.src.childImageSharp.fluid}
                style={{ width: '40%' }}
              />
            )}
            <p>{excerpt}</p>
          </div>
        </div>
      </div>
    </Link>
  </div>
)

Card.propTypes = {
  article: markdownRemarkType,
}

const CardGrid = ({ articles }) => {
  return (
    <div className="columns is-multiline">
      {articles.map((article) => (
        <Card key={article.id} article={article} />
      ))}
    </div>
  )
}

CardGrid.propTypes = {
  articles: PropTypes.arrayOf(markdownRemarkType),
}

export default CardGrid
