import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'gatsby'
import Logo from '../../img/app-logo.png'
import LINKS from './navbar-links'
import BackgroundImage from 'gatsby-background-image'

const BGImage = (props) => {
  const classes = `container is-fluid has-text-white ${
    props.isHome ? 'pt-5' : 'pt-6'
  }`

  const style = { paddingBottom: '8rem', marginBottom: '-8rem' }

  return props.cover?.childImageSharp ? (
    <BackgroundImage
      className={classes}
      fluid={props.cover.childImageSharp.fluid}
      style={style}
    >
      {props.children}
    </BackgroundImage>
  ) : (
    <div
      className={classes}
      style={{
        backgroundImage: `url(${props.cover})`,
        ...style,
      }}
    >
      {props.children}
    </div>
  )
}

const HomeIntro = ({ title, intro }) => (
  <>
    <div className="level pb-6">
      <div className="level-item">
        <img src={Logo} alt="Logo de la SFPR" style={{ width: '88px' }} />
      </div>
    </div>
    <h1 className="title is-2 has-text-white has-text-centered mb-7">
      {title}
    </h1>
    <p
      className="subtitle is-6 has-text-white has-text-centered mb-9"
      style={{ maxWidth: 700, marginLeft: 'auto', marginRight: 'auto' }}
    >
      {intro}
    </p>
  </>
)

const Navbar = ({ title, intro, cover, isHome = false }) => {
  return (
    <BGImage {...{ title, intro, cover }} isHome={isHome}>
      <div className={isHome ? '' : `level`}>
        <div className={isHome ? '' : `level-left`}>
          {isHome ? (
            <HomeIntro {...{ title, intro }} />
          ) : (
            <div className="level-item mr-5">
              <img src={Logo} alt="Logo de la SFPR" style={{ width: '54px' }} />
            </div>
          )}

          <nav role="navigation" aria-label="main-navigation">
            <div>
              <div className="level">
                <div className="level-left">
                  {LINKS.map((link) => (
                    <Link
                      className="button is-black is-small has-text-weight-bold mr-2"
                      to={link.route}
                      key={link.label}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
                <div className="level-right">
                  {/* <Link
              className="button is-black is-small has-text-weight-bold mr-2"
              to="/search"
            >
              Recherche
            </Link> */}
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </BGImage>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  intro: PropTypes.string.isRequired,
  cover: PropTypes.object.isRequired,
}

export default Navbar
