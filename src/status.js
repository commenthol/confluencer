
const RE = /!status\((?:color=(Red|Yellow|Green|Blue) )?([^)]*)\)/g

const cnfl = ({ title, color }) => {
  let colorQuery = ''
  let colorParam = ''
  if (color) {
    colorQuery = `colour=${color}&amp;`
    colorParam = `colour=${color}|`
  }

  return `<img class="editor-inline-macro" src="///plugins/servlet/status-macro/placeholder?=&amp;0=&amp;${colorQuery}title=${title}" data-macro-name="status" data-macro-parameters="${colorParam}title=${title}" data-macro-default-parameter="" data-macro-schema-version="1" height="18"></img>`
}

const html = ({ title, color = '' }) => {
  return `<cnfl-status color="${color}">${title}</cnfl-status>`
}

function status (text = '', { isHtml = false } = {}) {
  return text.replace(RE, (_, color, title) => {
    if (!title) return _
    if (isHtml) {
      return html({ title, color })
    } else {
      return cnfl({ title, color })
    }
  })
}

module.exports = { status }
