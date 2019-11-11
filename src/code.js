const cheerio = require('cheerio')
const { escapeHtml } = require('./escapeHtml.js')

const languageMap = {
  javascript: 'js'
}

function tmpl (text, opts) {
  const params = ['collapse', 'firstline', 'linenumbers', 'title', 'language']
    .map(key => {
      let val = opts[key]
      if (key === 'language') {
        val = languageMap[val] || val
      }
      return val ? escapeHtml`${key}=${val}` : undefined
    })
    .filter(Boolean)
    .join('|')

  return `<table class="wysiwyg-macro" data-macro-name="code" data-macro-parameters="${params}" data-macro-schema-version="1" data-macro-body-type="PLAIN_TEXT"><tbody><tr><td class="wysiwyg-macro-body"><pre>${escapeHtml`${text}`}</pre></td></tr></tbody></table>`
}

function code (html = '', { collapse = false, firstline = 0, linenumbers = false, title = '', isHtml = false } = {}) {
  if (isHtml) return html

  const $ = cheerio.load(html)
  const codeBlocks = $('pre > code')

  codeBlocks.each(function (i, block) {
    const lang = $(block).attr('class')
    const re = /^.*language-([A-Za-z0-9]+).*$/.exec(lang)
    const language = re ? re[1] : undefined

    const text = $(block).text()

    $(block.parentNode).replaceWith(tmpl(text, { collapse, firstline, linenumbers, title, language }))
  })

  return $.html()
}

module.exports = { code }
