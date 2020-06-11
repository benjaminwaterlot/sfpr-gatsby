import React from 'react'
import PropTypes from 'prop-types'
import { ArticleTemplate } from '../../templates/article'

const ArticlePreview = ({ entry, widgetFor }) => {
  return (
    <ArticleTemplate
      body={widgetFor('body')}
      title={entry.getIn(['data', 'title'])}
      date={entry.getIn(['data', 'date'])}
      cover={{
        display: entry.getIn(['data', 'picture', 'display']),
        src: entry.getIn(['data', 'picture', 'src']),
      }}
      type={entry.getIn(['data', 'type'])}
    />
  )
}

ArticlePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default ArticlePreview
