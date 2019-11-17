const assert = require('assert')
const { status } = require('..')

describe('status', function () {
  it('shall render status macro', function () {
    const exp = 'This shall render a <img class="editor-inline-macro" src="///plugins/servlet/status-macro/placeholder?=&amp;0=&amp;title=STATUS" data-macro-name="status" data-macro-parameters="title=STATUS" data-macro-default-parameter="" data-macro-schema-version="1" height="18"></img> macro.'
    const text = 'This shall render a !status(STATUS) macro.'
    const result = status(text)
    assert.strictEqual(result, exp)
  })

  it('shall render status macro with color red', function () {
    const exp = 'This shall render a <img class="editor-inline-macro" src="///plugins/servlet/status-macro/placeholder?=&amp;0=&amp;colour=Red&amp;title=STATUS" data-macro-name="status" data-macro-parameters="colour=Red|title=STATUS" data-macro-default-parameter="" data-macro-schema-version="1" height="18"></img> macro.'
    const text = 'This shall render a !status(color=Red STATUS) macro.'
    const result = status(text)
    assert.strictEqual(result, exp)
  })

  it('shall not render unknown color', function () {
    const exp = 'This shall render a <img class="editor-inline-macro" src="///plugins/servlet/status-macro/placeholder?=&amp;0=&amp;title=STA%22TUS" data-macro-name="status" data-macro-parameters="title=STA\\"TUS" data-macro-default-parameter="" data-macro-schema-version="1" height="18"></img> macro.'
    const text = 'This shall render a !status(color=Purple STA"TUS) macro.'
    const result = status(text)
    assert.strictEqual(result, exp)
  })

  it('shall fail to render status macro', function () {
    const text = 'This shall render a !status() macro.'
    const result = status(text)
    assert.strictEqual(result, text)
  })

  it('shall render as html', function () {
    const exp = 'This shall render a <cnfl-status color="">Status</cnfl-status> macro.'
    const text = 'This shall render a !status(Status) macro.'
    const result = status(text, { isHtml: true })
    assert.strictEqual(result, exp)
  })
})
