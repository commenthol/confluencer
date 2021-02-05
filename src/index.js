const { img } = require('./img.js')
const { anchor } = require('./anchor.js')
const { code } = require('./code.js')
const { note } = require('./note.js')
const { status } = require('./status.js')
const { style } = require('./style.js')
const { plantuml } = require('./plantuml.js')

/**
 * renders to confluence html or html
 * @param  {string} text - markdown text
 * @param  {Object} [opts={}]
 * @param  {boolean} [opts.isHtml] - render as html
 * @param  {boolean} [opts.plantuml] - convert plantuml to svg
 * @param  {boolean} [opts.collapse] - make all code blocks collapsable (cnfl-html only)
 * @param  {boolean} [opts.linenumbers] - show linenumbers on all codeblocks (cnfl-html only)
 * @return {string} final html or cnfl-html
 */
async function render (text, opts = {}) {
  let _text = style(opts) + text
  _text = await img(_text, opts)
  _text = status(_text, opts)
  _text = note(_text, opts)
  _text = await anchor(_text, opts)
  _text = await code(_text, opts)
  return _text
}

module.exports = {
  render,
  img,
  anchor,
  code,
  note,
  status,
  style,
  plantuml
}
