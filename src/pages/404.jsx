import React from 'react'
import Layout from '../components/Layout'
import WhiteBox from '../components/WhiteBox'
import { Link } from 'gatsby'

const NotFoundPage = () => (
  <Layout>
    <div className="container">
      <WhiteBox>
        <h1 className="title is-1">Page non trouvée</h1>
        <p className="mb-8">Cette page n'existe plus ou a changé d'adresse.</p>
        <Link className="button is-primary has-text-weight-bold mb-9" to="/">
          Retour à l'accueil
        </Link>
      </WhiteBox>
    </div>
  </Layout>
)

export default NotFoundPage
