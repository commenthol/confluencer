const escTag = tag => ({
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  "'": '&#39;',
  '"': '&quot;'
}[tag])

const escHtml = string => string
  .replace(/&amp;/g, '&')
  .replace(/[&<>'"]/g, escTag)

const escapeHtml = (literals, ...vars) => literals
  .map((literal, i) => literal + escHtml(vars[i] || ''))
  .join('')

module.exports = { escapeHtml }
