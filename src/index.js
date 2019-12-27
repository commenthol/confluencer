const { anchor } = require('./anchor.js')
const { code } = require('./code.js')
const { note } = require('./note.js')
const { status } = require('./status.js')
const { style } = require('./style.js')

async function render (text, { isHtml = false } = {}) {
  let _text = style(isHtml) + status(text, { isHtml })
  _text = note(_text, { isHtml })
  _text = await anchor(_text, { isHtml })
  _text = await code(_text, { isHtml })
  return _text
}

module.exports = {
  render,
  anchor,
  code,
  note,
  status,
  style
}
