import React from 'react'
import BackgroundImage from 'gatsby-background-image'
import { useStaticQuery, graphql } from 'gatsby'
import { formatDate } from '../lib/format'

const Footer = ({ cover }) => {
  const data = useStaticQuery(graphql`
    query Footer {
      site {
        buildTime
      }
    }
  `)

  return (
    <BackgroundImage
      className="container is-fluid py-8 has-text-white has-text-centered"
      fluid={cover?.childImageSharp?.fluid}
      style={{
        minHeight: 300,
      }}
    >
      <p className="has-text-weight-bold">Dernière mise à jour :</p>
      {formatDate(data.site.buildTime, { format: 'PPPPpp' })}
    </BackgroundImage>
  )
}

export default Footer
