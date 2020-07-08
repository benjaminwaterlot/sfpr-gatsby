import React from 'react'
import PropTypes from 'prop-types'
import translate from '../lib/translate'
import { formatDate } from '../lib/format'

const ArticleOverline = ({ type, date }) => (
  <div className="overline has-text-grey-lighter">
    <strong className="has-text-grey-lighter">{translate(type)} </strong>
    <span className="has-text-weight-medium">| {formatDate(date)}</span>
  </div>
)

ArticleOverline.propTypes = {
  type: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
}

export default ArticleOverline
