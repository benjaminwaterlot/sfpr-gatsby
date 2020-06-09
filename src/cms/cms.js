import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import AboutPagePreview from './preview-templates/AboutPagePreview.jsx'
import BlogPostPreview from './preview-templates/BlogPostPreview.jsx'
import ProductPagePreview from './preview-templates/ProductPagePreview.jsx'
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
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('products', ProductPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
