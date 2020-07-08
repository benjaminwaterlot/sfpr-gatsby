import blog from './blog'
import event from './event'
import news from './news'
import publication from './publication'
import section from './section'

const translations = [blog, event, news, publication, section]

export default Object.fromEntries(
  translations.map(({ key, text }) => [key, text]),
)
