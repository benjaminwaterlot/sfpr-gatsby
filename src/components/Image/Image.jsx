import React from 'react'
import GatsbyImage from 'gatsby-image'

const FluidImage = ({ picture, coverClass, embedClass }) => (
  <GatsbyImage
    fluid={picture.src.childImageSharp.fluid}
    style={
      picture.display === 'cover'
        ? { maxHeight: 380 }
        : { cssFloat: 'left', width: '33%' }
    }
    className={picture.display === 'cover' ? coverClass : embedClass}
  />
)

const PreviewImage = ({ picture, coverClass, embedClass }) =>
  picture.display === 'cover' ? (
    <div
      style={{
        backgroundImage: `url(${picture.src})`,
        backgroundSize: 'cover',
        height: 220,
      }}
      className={picture.display === 'cover' ? coverClass : embedClass}
    />
  ) : (
    <img
      src={picture.src}
      className={embedClass}
      style={{
        cssFloat: 'left',
        width: '33%',
      }}
    />
  )

const Image = (props) =>
  props.picture.src.childImageSharp ? (
    <FluidImage {...props} />
  ) : (
    <PreviewImage {...props} />
  )

export default Image
