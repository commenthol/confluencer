const cheerio = require('cheerio')
const { escapeHtml } = require('./escapeHtml.js')
const { plantuml } = require('./plantuml.js')

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

async function code (html = '', { collapse = false, firstline = 0, linenumbers = false, title = '', isHtml = false } = {}) {
  const resolved = []

  const $ = cheerio.load(html)
  const codeBlocks = $('pre > code')

  codeBlocks.each(function (i, block) {
    const lang = $(block).attr('class')
    const re = /^.*language-([A-Za-z0-9]+).*$/.exec(lang)
    const language = re ? re[1] : undefined
    const isPlantuml = /^.*!plantuml(?:\(format=(svg|png)\)).*/.exec(lang)

    if (isPlantuml && isHtml) {
      const type = isPlantuml[1] || 'svg'
      const text = $(block).text()
      const p = plantuml(text, { type }).then(img => {
        $(block.parentNode).replaceWith(img)
      })
      resolved.push(p)
    } else if (!isHtml) {
      const text = $(block).text()
      $(block.parentNode).replaceWith(tmpl(text, { collapse, firstline, linenumbers, title, language }))
    }
  })

  for (const p of resolved) {
    await p
  }

  return $.html()
}

module.exports = { code }
