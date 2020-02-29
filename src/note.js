const { escapeHtmlLiteral } = require('./utils.js')

const RE_START = /^(?:<p>)?(``|'{3,6})!(note|info|warning)\(([^)]*)\)\s*(?:<\/p>)?\s*$/
const RE_END = (tag = '``') => new RegExp(`^(?:<p>)?${tag}\\s*(?:<\\/p>)\\s*$`)

const cnflStart = (macro, title = '') => {
  return escapeHtmlLiteral`<table class="wysiwyg-macro" data-macro-name="${macro}" data-macro-parameters="${'title=' + title}" data-macro-schema-version="1" data-macro-body-type="RICH_TEXT"><tbody><tr><td class="wysiwyg-macro-body">`
}

const cnflEnd = () => {
  return '</td></tr></tbody></table>'
}

const htmlStart = (macro, title = '') =>
  escapeHtmlLiteral`<cnfl-note macro="${macro}" title="${title}">`

const htmlEnd = () => '</cnfl-note>'

function note (text = '', { isHtml = false } = {}) {
  let block
  let tag
  return text.split(/[\r\n]/).map(line => {
    const re = (!block ? RE_START : RE_END(tag)).exec(line)
    if (re) {
      // console.log(re)
      const [_, _tag, macro, title] = re // eslint-disable-line no-unused-vars
      tag = _tag
      let ret
      if (isHtml) {
        ret = !block
          ? htmlStart(macro, title)
          : htmlEnd()
      } else {
        ret = !block
          ? cnflStart(macro, title)
          : cnflEnd()
      }
      block = macro
      return ret
    } else {
      return line
    }
  }).join('\n')
}

module.exports = { note }
