const assert = require('assert')
const { font } = require('..')

describe('font', function () {
  it('shall render', function () {
    const text = [
      '<font color="red">red text</font>',
      '<font color="blue">blue text</font>',
      '<font color="#00ff00">green text</font>',
      '<font color="rgba(255, 255, 0, 0.5)">yellow text</font>'
    ].join('\n')
    const result = font(text)
    assert.strictEqual(
      result,
      '<span style="color: rgb(255, 0, 0);" data-mce-style="color: #FF0000;">red text</span>\n' +
      '<span style="color: rgb(0, 0, 255);" data-mce-style="color: #0000FF;">blue text</span>\n' +
      '<span style="color: rgb(0, 255, 0);" data-mce-style="color: #00FF00;">green text</span>\n' +
      '<span style="color: rgb(255, 255, 0);" data-mce-style="color: #FFFF00;">yellow text</span>')
  })

  it('shall render as html', function () {
    const text = [
      '<font color="red">red text</font>',
      '<font color="blue">blue text</font>',
      '<font color="#00ff00">green text</font>',
      '<font color="rgba(255, 255, 0, 0.5)">yellow text</font>'
    ].join('\n')
    const result = font(text, { isHtml: true })
    assert.strictEqual(
      result,
      text
    )
  })

  it('shall ignore size attribute', function () {
    const text = [
      '<font color="red" size="1">red text</font>'
    ].join('\n')
    const result = font(text)
    assert.strictEqual(
      result,
      '<span style="color: rgb(255, 0, 0);" data-mce-style="color: #FF0000;">red text</span>'
    )
  })
})
