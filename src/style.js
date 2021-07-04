const fs = require('fs')
const path = require('path')

const dirname = path.resolve(__dirname, '../styles')
const files = ['cnfl', 'status', 'admonition']

const data = files.map(filename => fs.readFileSync(path.resolve(dirname, filename + '.css'), 'utf8'))

const cnflStyle = `
<style>
/*@import "/styles/cnfl.css";*/
${data[0]}
</style>
`

const htmlStyle = `
<style>
/*@import "/styles/admonition.css";*/
body {
  font-family: Arial, Helvetica, sans-serif;
}
blockquote {
  border-left: 4px solid #DDD;
  padding: 0 15px;
  color: #777;
}
pre {
  overflow: auto;
  word-wrap: normal;
  white-space: pre-wrap;
}
pre>code {
  display: block;
  overflow-x: auto;
  padding: 0.5em;
  color: #333;
  background: #f8f8f8;
}
code, pre, tt {
  border-radius: 3px;
  font-size: 0.85rem;
}
blockquote, pre {
  margin: 15px 0;
}
${data[1]}
${data[2]}
</style>
`

function style ({ isHtml, style } = {}) {
  return !isHtml
    ? cnflStyle
    : style === false
      ? ''
      : htmlStyle
}

module.exports = {
  style
}
