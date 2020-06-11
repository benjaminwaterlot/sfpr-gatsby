import React from 'react'
import PropTypes from 'prop-types'
import { ArticleTemplate } from '../../templates/article'
import PreviewLayout from './PreviewLayout'

const ArticlePreview = ({ entry, widgetFor }) => {
  return (
    <PreviewLayout>
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
    </PreviewLayout>
  )
}

ArticlePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default ArticlePreview
