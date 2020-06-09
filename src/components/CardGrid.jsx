import React from 'react'
import translate from '../lib/translate'
import { Link } from 'gatsby'
import { formatDate } from '../lib/format'

const Test = () => (
  <div className="card">
    <div className="card-image">
      <figure className="image is-4by3">
        <img
          src="https://bulma.io/images/placeholders/1280x960.png"
          alt="Placeholder image"
        />
      </figure>
    </div>
    <div className="card-content">
      <div className="media">
        <div className="media-left">
          <figure className="image is-48x48">
            <img
              src="https://bulma.io/images/placeholders/96x96.png"
              alt="Placeholder image"
            />
          </figure>
        </div>
        <div className="media-content">
          <p className="title is-4">John Smith</p>
          <p className="subtitle is-6">@johnsmith</p>
        </div>
      </div>

      <div className="content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
        iaculis mauris. <a>@bulmaio</a>.<a href="#">#css</a>{' '}
        <a href="#">#responsive</a>
        <br />
        <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
      </div>
    </div>
  </div>
)

const Card = ({ article }) => {
  const { picture, type, date, title } = article.frontmatter

  return (
    <div className="column is-6-tablet is-4-desktop">
      <Link to={article.fields.slug}>
        <div
          className="card is-full-height is-interactive"
          style={{ borderRadius: 8, overflow: 'hidden' }}
        >
          {picture.src && picture.display === 'cover' && (
            <div className="card-image">
              <figure className="image is-16by9">
                <img src={picture.src.childImageSharp.fluid.src} />
              </figure>
            </div>
          )}

          <div className="card-content">
            <div className="overline has-text-grey-lighter">
              <strong>{translate(type)} </strong>
              <span className="has-text-weight-medium">
                | {formatDate(date)}
              </span>
            </div>
            <h3 className="title is-5 mt-1">{title}</h3>
            <div>
              {picture.src && picture.display === 'embed' && (
                <img
                  className="mr-2 my-1"
                  src={picture.src.childImageSharp.fluid.src}
                  style={{ cssFloat: 'left', width: '40%' }}
                />
              )}
              <p>{article.excerpt}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
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

export default CardGrid
