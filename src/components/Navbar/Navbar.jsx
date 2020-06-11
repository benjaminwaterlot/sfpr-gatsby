import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'gatsby'
import Logo from '../../img/app-logo.png'
import LINKS from './navbar-links'

const Navbar = ({ title, intro, cover }) => (
  <div
    className="container is-fluid pt-5 has-text-white"
    style={{
      backgroundImage: `url(${cover.childImageSharp?.fluid.src || cover})`,
      paddingBottom: '6rem',
      marginBottom: '-6rem',
    }}
  >
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
            <Link
              className="button is-black is-small has-text-weight-bold mr-2"
              to="/search"
            >
              Recherche
            </Link>
          </div>
        </div>
      </div>
    </nav>
  </div>
)

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  intro: PropTypes.string.isRequired,
  cover: PropTypes.object.isRequired,
}

export default Navbar
