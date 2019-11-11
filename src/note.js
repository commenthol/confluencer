
const RE_START = /^(?:<p>)?``!(note|info|warning)\(([^)]*)\)\s*(?:<\/p>)?\s*$/
const RE_END = /^(?:<p>)?``\s*(?:<\/p>)\s*$/

const cnflStart = (macro, title = '') => {
  return `<table class="wysiwyg-macro" data-macro-name="${macro}" data-macro-parameters="title=${title}" data-macro-schema-version="1" data-macro-body-type="RICH_TEXT"><tbody><tr><td class="wysiwyg-macro-body">`
}
const cnflEnd = () => {
  return `</td></tr></tbody></table>`
}
const htmlStart = (macro, title = '') => `<cnfl-note macro="${macro}" title="${title}">`
const htmlEnd = (macro) => `</cnfl-note>`

function note (text = '', { isHtml = false } = {}) {
  let block = undefined
  return text.split(/[\r\n]/).map(line => {
    const re = (!block ? RE_START : RE_END).exec(line)
    if (re) {
      // console.log(re)
      const [_, macro, title] = re
      let ret
      if (isHtml) {
        ret = !block
          ? htmlStart(macro, title)
          : htmlEnd(macro)
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
