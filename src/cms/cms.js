import CMS from 'netlify-cms-app'

import ArticlePreview from './preview-templates/ArticlePreview.jsx'
import NavbarPreview from './preview-templates/NavbarPreview.jsx'

import CategoryPagePreview from './preview-templates/CategoryPagePreview.jsx'
import locale from './locale'

const netlifyIdentity = require('netlify-identity-widget')

netlifyIdentity.init({
  locale: 'fr',
})

CMS.registerLocale('customFr', locale)

const CATEGORIES = ['events', 'publications', 'news']

CATEGORIES.forEach((category) => {
  CMS.registerPreviewTemplate(category, CategoryPagePreview)
})

CMS.registerPreviewTemplate('home', NavbarPreview)
CMS.registerPreviewTemplate('article', ArticlePreview)

CMS.registerEditorComponent({
  id: 'image',
  label: 'Image',
  fields: [
    {
      name: 'display',
      label: 'Affichage',
      widget: 'select',
      default: 'cover',
      hint:
        "Un bandeau s'affichera en pleine page, et ses bords peuvent être rognés. Un médaillon (comme une couverture de livre) sera plus petit et ne sera jamais rogné.",
      options: [
        {
          label: 'Médaillon',
          value: 'embed',
        },
        {
          label: 'Bandeau',
          value: 'cover',
        },
      ],
    },
    { name: 'src', label: 'Image', widget: 'image', required: true },
  ],
  // Pattern to identify a block as being an instance of this component
  pattern: /\!\[(.+)\]\((.+) ".+"\)/,
  // Function to extract data elements from the regexp match
  fromBlock: function (match) {
    return {
      display: match[1],
      src: match[2],
    }
  },
  // Function to create a text block from an instance of this component
  toBlock: function (obj) {
    return `![${obj.display}](${obj.src} "${obj.display}")`
  },
})
