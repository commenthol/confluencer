const cheerio = require('cheerio')
const { escapeHtmlLiteral, replaceHtml } = require('./utils.js')

const cnflAnchor = ({ anchor }) => {
  return escapeHtmlLiteral`<img class="editor-inline-macro" src="///plugins/servlet/confluence/placeholder/macro" data-macro-name="anchor" data-macro-default-parameter="${anchor}" data-macro-schema-version="1" width="9" height="18"></img>`
}

const cnflLink = ($elem) => {
  const href = $elem.attr('href')
  // eslint-disable-next-line no-unused-vars
  const [_, anchor] = /^#(.*)$/.exec(href) || []
  if (anchor) {
    // $elem.removeAttr('href')
    $elem.attr('class', 'confluence-link')
    $elem.attr('data-anchor', anchor)
    $elem.attr('data-linked-resource-default-alias', anchor)
  }
  return anchor
}

async function anchor (html = '', { isHtml = false } = {}) {
  if (isHtml) {
    return html
  }

  const $ = cheerio.load(html)

  const anchors = []

  $('a').each(function (i, link) {
    const _anchor = cnflLink($(link))
    if (_anchor) anchors.push(_anchor)
  })

  $('a[name]').each(function (i, elem) {
    const anchor = $(elem).attr('name')
    $(elem).replaceWith(cnflAnchor({ anchor }))
  })

  $('[id]').each(function (i, elem) {
    const anchor = $(elem).attr('id')
    if (anchors.indexOf(anchor) !== -1) {
      $(elem).before(cnflAnchor({ anchor }) + '\n')
    }
  })

  return replaceHtml($.html())
}

module.exports = { anchor }
