import convert from 'json-to-frontmatter-markdown/src/index'
import fs from 'fs'

// const convert = require('json-to-frontmatter-markdown/src/index')
// const fs = require('fs')

console.log('Started')
console.log('Started', convert)

const DIR = 'src/pages/articles'

const dir = fs.readdirSync(DIR)

const json = dir.filter((f) => f.includes('.json'))
console.log(json)

const content = json.map((name) => {
  const data = fs.readFileSync(`${DIR}/${name}`, {
    encoding: 'utf8',
  })

  const refined = JSON.parse(data)
  const { body, ...rest } = refined

  return convert({
    frontmatterMarkdown: {
      frontmatter: Object.entries(rest).map(([key, val]) => ({ [key]: val })),
      body,
      path: DIR,
      fileName: `${name}.md`,
    },
  })
})

console.log(content)
