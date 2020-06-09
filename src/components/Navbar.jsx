import React from 'react'
import { Link } from 'gatsby'
import Cover from '../img/app-cover.jpg'
import Logo from '../img/app-logo.png'

const LINKS = [
  {
    label: 'Accueil',
    route: '/',
  },
  {
    label: 'Qui sommes-nous ?',
    route: '/about-us',
  },
  {
    label: 'Vie de la société',
    route: '/news',
  },
  {
    label: 'Événements',
    route: '/events',
  },
  {
    label: 'Publications',
    route: '/publications',
  },
  {
    label: 'Blogs',
    route: '/blogs',
  },
  {
    label: 'About',
    route: '/about',
  },
  {
    label: 'Products',
    route: '/products',
  },
  {
    label: 'Blog',
    route: '/blog',
  },
  {
    label: 'Contact',
    route: '/contact',
  },
]

const Navbar = () => (
  <div
    className="container is-fluid pt-5 has-text-white"
    style={{ backgroundImage: `url(${Cover})`, paddingBottom: '6rem' }}
  >
    <div className="level pb-6">
      <div className="level-item">
        <img src={Logo} alt="Logo de la SFPR" style={{ width: '88px' }} />
      </div>
    </div>
    <h1 className="title is-2 has-text-white has-text-centered mb-6">
      Société Francophone de Philosophie de la Religion
    </h1>
    <p
      className="subtitle is-6 has-text-white has-text-centered mb-6"
      style={{ maxWidth: 700, marginLeft: 'auto', marginRight: 'auto' }}
    >
      La Société Francophone de Philosophie de la Religion a pour but de
      promouvoir les recherches philosophiques universitaires sur les religions
      et l'expérience religieuse.
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

export default Navbar
