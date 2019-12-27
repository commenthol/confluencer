const { capitalize, escapeHtmlLiteral } = require('./utils.js')
const params = require('./params.js')

const RE = /!status\(([^)]+)\)/g
const COLORS = /^(Red|Yellow|Green|Blue)$/i

const toColor = (color) => {
  if (COLORS.test(color)) {
    return capitalize(color)
  }
  return ''
}

const cnfl = ({ title, color }) => {
  let colorParam = ''
  if (color) {
    colorParam = `colour=${color}|`
  }

  return escapeHtmlLiteral`<img class="editor-inline-macro" src="///plugins/servlet/confluence/placeholder/macro" data-macro-name="status" data-macro-parameters="${colorParam}title=${title}" data-macro-default-parameter="" data-macro-schema-version="1" width="36" height="18"></img>`
}

const html = ({ title, color = '' }) => {
  return escapeHtmlLiteral`<cnfl-status color="${color}">${title}</cnfl-status>`
}

function status (text = '', { isHtml = false } = {}) {
  return text.replace(RE, (_, p) => {
    let { color, _: title } = params(p)
    color = toColor(color)

    if (!title) return _
    if (isHtml) {
      return html({ title, color })
    } else {
      return cnfl({ title, color })
    }
  })
}

module.exports = { status }
