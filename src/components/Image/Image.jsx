import React from 'react'
import GatsbyImage from 'gatsby-image'

const CoverImage = ({ src, className, height, width, style }) =>
  src.childImageSharp ? (
    <GatsbyImage
      fluid={src.childImageSharp.fluid}
      style={{ height, width, ...style }}
      className={className}
    />
  ) : (
    <div
      style={{
        backgroundImage: `url(${src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        height: height,
        ...style,
      }}
      className={className}
    />
  )

const EmbedImage = ({ src, className, width, style }) =>
  src.childImageSharp ? (
    <GatsbyImage
      fluid={src.childImageSharp.fluid}
      style={{ cssFloat: 'left', width, ...style }}
      className={`float-left ${className}`}
    />
  ) : (
    <img
      src={src}
      className={className}
      style={{
        cssFloat: 'left',
        width,
        ...style,
      }}
    />
  )

const Image = ({ picture, ...rest }) =>
  picture?.display === 'embed' ? (
    <EmbedImage src={picture.src} {...rest} />
  ) : (
    <CoverImage src={picture.src || picture} {...rest} />
  )

export default Image
