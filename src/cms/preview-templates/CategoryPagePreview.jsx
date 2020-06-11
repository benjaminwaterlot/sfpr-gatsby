import React from 'react'
import PropTypes from 'prop-types'
import { CategoryPageTemplate } from '../../templates/category-page'
import PreviewLayout from './PreviewLayout'

const CategoryPagePreview = ({ entry, widgetFor }) => {
  return (
    <PreviewLayout>
      <CategoryPageTemplate
        body={widgetFor('body')}
        title={entry.getIn(['data', 'title'])}
        articles={[]}
      />
    </PreviewLayout>
  )
}

CategoryPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default CategoryPagePreview
