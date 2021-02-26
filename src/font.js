const colorString = require('color-string')
const { escapeHtmlLiteral } = require('./utils.js')

const RE_OPEN = /<font([^>]*)>/g
const RE_CLOSE = /<\/font>/g

const RE_ATTR = /([a-zA-Z][a-zA-Z0-9_]*)=(["'])([^\2]*?)\2/g

const toAttr = (attrs = '') => {
  const o = {}
  attrs.replace(RE_ATTR, (_, key, _1, value) => {
    if (key && value !== undefined) {
      o[key] = value
    }
  })
  return o
}

const cnfl = (attrStr) => {
  let hex, rgb
  const attrs = toAttr(attrStr)

  if (attrs.color) {
    const color = colorString.get.rgb(attrs.color)
    if (Array.isArray(color)) {
      const c = color.slice(0, 3)
      hex = colorString.to.hex(c)
      rgb = colorString.to.rgb(c)
    }
  }

  return hex && rgb
    ? escapeHtmlLiteral`<span style="color: ${rgb};" data-mce-style="color: ${hex};">`
    : '<span>'
}

function font (text = '', { isHtml = false } = {}) {
  const replacerOpen = (m, attrStr) => {
    return (isHtml)
      ? m
      : cnfl(attrStr)
  }
  const replacerClose = (m) => {
    return (isHtml)
      ? m
      : '</span>'
  }

  return text
    .replace(RE_OPEN, replacerOpen)
    .replace(RE_CLOSE, replacerClose)
}

module.exports = { font }
