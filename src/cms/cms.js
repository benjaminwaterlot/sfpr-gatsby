import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import IndexPagePreview from './preview-templates/IndexPagePreview.jsx'
import CategoryPagePreview from './preview-templates/CategoryPagePreview.jsx'

CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)

/**
 * Category pages
 */
CMS.registerPreviewTemplate('events', CategoryPagePreview)
CMS.registerPreviewTemplate('publications', CategoryPagePreview)
// CMS.registerPreviewTemplate('events', CategoryPagePreview)
// CMS.registerPreviewTemplate('events', CategoryPagePreview)
// CMS.registerPreviewTemplate('events', CategoryPagePreview)

CMS.registerPreviewTemplate('index', IndexPagePreview)
