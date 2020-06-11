import translations from '../content/translations'

export default (key) => {
  const translation = translations[key]

  // if (!translation) throw new Error(`This translation doesn't exist: ${key}`)

  return translation
}
