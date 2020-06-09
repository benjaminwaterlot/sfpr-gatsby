import React from 'react'
import PropTypes from 'prop-types'
import { CategoryPageTemplate } from '../../templates/category-page'

const CategoryPagePreview = ({ entry, widgetFor }) => {
  return (
    <CategoryPageTemplate
      body={widgetFor('body')}
      title={entry.getIn(['data', 'title'])}
    />
  )
}

CategoryPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default CategoryPagePreview
