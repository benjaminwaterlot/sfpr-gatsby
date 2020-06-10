import React from 'react'
import { Helmet } from 'react-helmet'
import Navbar from '../Navbar'

import './all.scss'

import { withPrefix } from 'gatsby'
import useLayoutQuery from './use-layout-query'

const TemplateWrapper = ({ children }) => {
  const {
    home: { frontmatter: infos },
    site: { siteMetadata },
  } = useLayoutQuery()

  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{siteMetadata.title}</title>
        <meta name="description" content={siteMetadata.description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix('/')}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix('/')}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={siteMetadata.title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix('/')}img/og-image.jpg`}
        />
      </Helmet>
      <Navbar {...infos} />
      <section className="section">{children}</section>
      <div>FOOTER</div>
    </div>
  )
}

export default TemplateWrapper
