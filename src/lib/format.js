import { format as dateFnsFormat } from 'date-fns'
import { fr } from 'date-fns/locale'

export const formatDate = (date, { format = 'PPP' } = {}) => {
  return dateFnsFormat(date instanceof Date ? date : new Date(date), format, {
    locale: fr,
  })
}
