
const capitalize = ([first, ...rest], lowerRest = false) =>
  first.toUpperCase() + (lowerRest ? rest.join('').toLowerCase() : rest.join(''))

const escapeHtml = (string) => (string || '')
  .replace(/&amp;/g, '&')
  .replace(/[&<>'"]/g, tag => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    "'": '&#39;',
    '"': '&quot;'
  }[tag]))

const escapeHtmlLiteral = (literals, ...vars) => literals
  .map((literal, i) => literal + escapeHtml(vars[i]))
  .join('')

const replaceHtml = html => html.replace(/<html><head>|<\/head><body>|<\/body><\/html>/g, '')

module.exports = {
  capitalize,
  escapeHtml,
  escapeHtmlLiteral,
  replaceHtml
}
