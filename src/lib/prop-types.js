import PropTypes from 'prop-types'

export const markdownRemarkType = PropTypes.shape({
  html: PropTypes.node,
  excerpt: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  fields: PropTypes.shape({
    slug: PropTypes.string.isRequired,
  }),
  frontmatter: PropTypes.shape({
    title: PropTypes.string.isRequired,
    cover: PropTypes.object,
    intro: PropTypes.string,
    featured_article: PropTypes.string,
    picture: PropTypes.shape({
      display: PropTypes.string.isRequired,
      src: PropTypes.object,
    }),
    date: PropTypes.string,
    settings: PropTypes.shape({
      hidden: PropTypes.bool,
    }),
  }).isRequired,
}).isRequired
