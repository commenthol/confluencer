const { escapeHtmlLiteral } = require('./utils.js')
const params = require('./params.js')

const RE1 = /^(<p>|)!toc(?:\s?\(([^)]+)\)|)/mg
const RE2 = /(?:<!-- )()!toc(?:\s?\(([^)]+)\)|)(?:(?!:<!-- !toc)[^])*?<!-- toc! -->/mg

const kmapper = {
  minlevel: 'minValue',
  maxlevel: 'maxLevel'
}

const cnfl = (p) => {
  const params = Object.entries(p).reduce((a, [k, v]) => {
    const knew = kmapper[k]
    if (knew && v !== undefined) {
      a.push(`${knew}=${v}`)
    }
    return a
  }, []).join('|')

  return escapeHtmlLiteral`<img class="editor-inline-macro" src="///plugins/servlet/confluence/placeholder/macro" data-macro-name="toc" data-macro-parameters="${params}" data-macro-schema-version="1" width="36" height="18">`
}

function toc (text = '', { isHtml = false } = {}) {
  const replacer = (m, tag = '', p) => {
    const { minlevel, maxlevel } = params(p)
    if (isHtml) {
      return m
    } else {
      return tag + cnfl({ minlevel, maxlevel })
    }
  }

  return text.replace(RE1, replacer).replace(RE2, replacer)
}

module.exports = { toc }
