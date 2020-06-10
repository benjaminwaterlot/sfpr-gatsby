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
      const tablet = isFeatured ? 12 : 6
      const widescreen = isFeatured ? 8 : 4

      return `column is-${tablet}-tablet is-${widescreen}-widescreen`
    })()}
  >
    <Link to={fields.slug}>
      <div
        className="card is-full-height is-interactive"
        style={{ borderRadius: 6, overflow: 'hidden' }}
      >
        {picture.src && picture.display === 'cover' && (
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
          <div>
            {picture.src && picture.display === 'embed' && (
              <Image
                className="mr-2 my-1"
                fluid={picture.src.childImageSharp.fluid}
                style={{ cssFloat: 'left', width: '40%' }}
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
