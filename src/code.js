const cheerio = require('cheerio')
const { escapeHtmlLiteral, replaceHtml } = require('./utils.js')
const { plantuml, tmplPlantuml } = require('./plantuml.js')

// supported highlighing by cnfl mapped from markdown using highlightjs
const languageMap = {
  actionscript: 'actionscript3',
  // applescript
  // bash
  csharp: 'c#',
  // cpp
  // css
  // coldfusion (no support by highlightjs)
  // delphi
  // diff
  erlang: 'erl',
  // groovy
  html: 'xml',
  // java
  javascript: 'js',
  // jfx (Java Fx) (no support by highlightjs)
  // php
  'php-template': 'php',
  // perl
  txt: 'text',
  // powershell
  python: 'py',
  // ruby
  // sql
  // sass (no support by highlightjs)
  // scala
  vbscript: 'vb', // vb (visual basic)
  // xml
  // yml (yaml)
  yaml: 'yml'
}

function tmplCode (text, opts) {
  const params = ['collapse', 'firstline', 'linenumbers', 'title', 'language']
    .map(key => {
      let val = opts[key]
      if (key === 'language') {
        val = languageMap[val] || val
      }
      return val ? `${key}=${val}` : undefined
    })
    .filter(Boolean)
    .join('|')

  return escapeHtmlLiteral`<table class="wysiwyg-macro" data-macro-name="code" data-macro-parameters="${params}" data-macro-schema-version="1" data-macro-body-type="PLAIN_TEXT"><tbody><tr><td class="wysiwyg-macro-body"><pre>${text}</pre></td></tr></tbody></table>`
}

async function code (html = '', {
  plantuml: usePlantuml = true,
  collapse = false,
  firstline = 0,
  linenumbers = false,
  title = '',
  isHtml = false
} = {}) {
  const resolved = []

  const $ = cheerio.load(html)
  const codeBlocks = $('pre > code')

  codeBlocks.each(function (i, block) {
    const lang = $(block).attr('class')
    const re = /^.*language-([A-Za-z0-9]+).*$/.exec(lang)
    const language = re ? re[1] : undefined
    const isPlantuml = /^.*!plantuml(?:\(format=(svg|png)\)).*/.exec(lang)

    if (usePlantuml && isPlantuml) {
      const type = isPlantuml[1] || 'svg'
      const text = $(block).text()
      if (isHtml) {
        const promise = plantuml(text, { type }).then(img => {
          $(block.parentNode).replaceWith(img)
        })
        resolved.push(promise)
      } else {
        $(block.parentNode).replaceWith(tmplPlantuml(text, { format: type }))
      }
    } else if (!isHtml) {
      const text = $(block).text()
      $(block.parentNode).replaceWith(tmplCode(text, { collapse, firstline, linenumbers, title, language }))
    }
  })

  for (const promise of resolved) {
    await promise
  }

  return replaceHtml($.html())
}

module.exports = { code }
