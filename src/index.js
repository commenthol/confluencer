const { style } = require('./style.js')
const { status } = require('./status.js')
const { note } = require('./note.js')
const { code } = require('./code.js')

async function render (text, { isHtml = false } = {}) {
  let _text = style(isHtml) + status(text, { isHtml })
  _text = note(_text, { isHtml })
  _text = await code(_text, { isHtml })
  return _text
}

module.exports = {
  render,
  status,
  style,
  note,
  code
}
