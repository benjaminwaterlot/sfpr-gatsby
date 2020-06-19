import React from 'react'
import BackgroundImage from 'gatsby-background-image'
import { useStaticQuery, graphql } from 'gatsby'
import Logo from '../img/app-logo.png'
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
      <img
        src={Logo}
        alt="Logo de la SFPR"
        style={{ width: '88px' }}
        className="mb-6"
      />

      <p className="has-text-weight-bold">Dernière mise à jour :</p>
      {formatDate(data.site.buildTime, { format: 'PPPPpp' })}
    </BackgroundImage>
  )
}

export default Footer
