import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { markdownRemarkType } from '../lib/prop-types'
import ArticleOverline from './ArticleOverline'

const Card = ({
  article: {
    fields,
    excerpt,
    frontmatter: { picture, type, date, title },
  },
}) => (
  <div className="column is-6-tablet is-4-desktop">
    <Link to={fields.slug}>
      <div
        className="card is-full-height is-interactive"
        style={{ borderRadius: 6, overflow: 'hidden' }}
      >
        {picture.src && picture.display === 'cover' && (
          <div className="card-image">
            <figure className="image is-16by9">
              <img src={picture.src.childImageSharp.fluid.src} />
            </figure>
          </div>
        )}

        <div className="card-content">
          <ArticleOverline {...{ type, date }} />
          <h3 className="title is-5 mt-1">{title}</h3>
          <div>
            {picture.src && picture.display === 'embed' && (
              <img
                className="mr-2 my-1"
                src={picture.src.childImageSharp.fluid.src}
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
