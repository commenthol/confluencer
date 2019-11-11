const assert = require('assert')
const { note } = require('..')

describe('note', function () {
  it('shall render note macro with title', function () {
    const exp = '<table class="wysiwyg-macro" data-macro-name="note" data-macro-parameters="title=This is the note title" data-macro-schema-version="1" data-macro-body-type="RICH_TEXT"><tbody><tr><td class="wysiwyg-macro-body">\n<ul>\n  <li>Note 1</li>\n  <li>And here is some text</li>\n</ul>\n</td></tr></tbody></table>'
    const text = [
      '<p>``!note(This is the note title)</p>',
      '<ul>',
      '  <li>Note 1</li>',
      '  <li>And here is some text</li>',
      '</ul>',
      '<p>``</p>'
    ].join('\n')
    const result = note(text)
    // console.log(JSON.stringify(result))
    assert.strictEqual(result, exp)
  })

  it('shall render info macro without title', function () {
    const exp = '<table class="wysiwyg-macro" data-macro-name="info" data-macro-parameters="title=" data-macro-schema-version="1" data-macro-body-type="RICH_TEXT"><tbody><tr><td class="wysiwyg-macro-body">\n<ul>\n  <li>Info 1</li>\n  <li>And here is some text</li>\n</ul>\n</td></tr></tbody></table>'
    const text = [
      '<p>``!info()</p>',
      '<ul>',
      '  <li>Info 1</li>',
      '  <li>And here is some text</li>',
      '</ul>',
      '<p>``</p>'
    ].join('\n')
    const result = note(text)
    // console.log(JSON.stringify(result))
    assert.strictEqual(result, exp)
  })

  it('shall render info warning', function () {
    const exp = '<table class="wysiwyg-macro" data-macro-name="warning" data-macro-parameters="title=Warning" data-macro-schema-version="1" data-macro-body-type="RICH_TEXT"><tbody><tr><td class="wysiwyg-macro-body">\n<ul>\n  <li>Info 1</li>\n  <li>And here is some text</li>\n</ul>\n</td></tr></tbody></table>'
    const text = [
      '<p>``!warning(Warning)</p>',
      '<ul>',
      '  <li>Info 1</li>',
      '  <li>And here is some text</li>',
      '</ul>',
      '<p>``</p>'
    ].join('\n')
    const result = note(text)
    // console.log(JSON.stringify(result))
    assert.strictEqual(result, exp)
  })

  it('shall render info warning as html', function () {
    const exp = '<cnfl-note macro="warning" title="Warning">\n<ul>\n  <li>Info 1</li>\n  <li>And here is some text</li>\n</ul>\n</cnfl-note>'
    const text = [
      '<p>``!warning(Warning)</p>',
      '<ul>',
      '  <li>Info 1</li>',
      '  <li>And here is some text</li>',
      '</ul>',
      '<p>``</p>'
    ].join('\n')
    const result = note(text, { isHtml: true })
    // console.log(JSON.stringify(result))
    assert.strictEqual(result, exp)
  })
})
