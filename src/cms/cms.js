import CMS from 'netlify-cms-app'

import ArticlePreview from './preview-templates/ArticlePreview.jsx'
import NavbarPreview from './preview-templates/NavbarPreview.jsx'

import CategoryPagePreview from './preview-templates/CategoryPagePreview.jsx'

const CATEGORIES = ['events', 'publications', 'blogs', 'news']

CATEGORIES.forEach((category) => {
  CMS.registerPreviewTemplate(category, CategoryPagePreview)
})

CMS.registerPreviewTemplate('home', NavbarPreview)
CMS.registerPreviewTemplate('article', ArticlePreview)
