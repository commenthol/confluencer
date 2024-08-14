const cheerio = require('cheerio')
const { escapeHtmlLiteral, replaceHtml } = require('./utils.js')

// const imgHasDataAttr = ($elem) => {
//   const attrs = Object.keys($elem.attr() || {})
//   return attrs.some(key => /^data-/.test(key))
// }

const buildImgTag = ({ src, ...attrs }) => {
  if (!/^https?:/.test(src)) { // attached image (needs manual upload)
    // eslint-disable-next-line no-unused-vars
    const [_, filename] = /^.*?\/([^/]+)$/.exec(src) || ['', src]
    src = filename
  }

  if (!src) return

  const integer = (k, v) => {
    const n = parseInt(v, 10)
    return !isNaN(n) && (k + '=' + n)
  }
  const string = (k, v) => v && typeof v === 'string' && (k + '=' + v)
  const boolean = (k, v) => v && k

  const m = {
    alt: string,
    align: string,
    border: integer,
    bodercolor: string,
    hspace: integer,
    vspace: integer,
    width: integer,
    height: integer,
    title: string,
    thumbnail: boolean
  }

  const a = Object.entries(attrs).reduce((a, [k, v]) => {
    let tmp
    if (m[k] && (tmp = m[k](k, v))) {
      a.push(tmp)
    }
    return a
  }, [])

  const attstr = a.length ? '|' + a.join(',') : ''
  const str = `!${src}${attstr}!`
  return str
}

// @see https://support.atlassian.com/confluence-cloud/docs/insert-confluence-wiki-markup/
const tmplImg = (attrs) => {
  return escapeHtmlLiteral`<table class="wysiwyg-macro" data-macro-name="wiki-markup" data-macro-parameters="atlassian-macro-output-type=INLINE" data-macro-schema-version="1" data-macro-body-type="PLAIN_TEXT" data-mce-style="" data-mce-selected="1"><tbody><tr><td class="wysiwyg-macro-body"><pre>${buildImgTag(attrs)}</pre></td></tr></tbody></table>`
}

async function img (html = '', { isHtml = false } = {}) {
  if (isHtml) {
    return html
  }

  const $ = cheerio.load(html)

  $('img').each(function (i, elem) {
    const $elem = $(elem)
    const src = $elem.attr('src')
    if (src) {
      $elem.replaceWith(tmplImg($elem.attr()))
    }
  })

  return replaceHtml($.html())
}

module.exports = { img, buildImgTag }
