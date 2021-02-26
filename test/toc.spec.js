const assert = require('assert')
const { toc } = require('..')

describe('toc', function () {
  it('shall render', function () {
    const text = [
      '**Table of Contents**',
      '!toc',
      '',
      '<!-- !toc -->',
      '',
      '<!-- toc! -->'
    ].join('\n')
    const result = toc(text)
    assert.strictEqual(
      result,
      '**Table of Contents**\n' +
      '<img class="editor-inline-macro" src="///plugins/servlet/confluence/placeholder/macro" data-macro-name="toc" data-macro-parameters="" data-macro-schema-version="1" width="36" height="18">\n\n' +
      '<img class="editor-inline-macro" src="///plugins/servlet/confluence/placeholder/macro" data-macro-name="toc" data-macro-parameters="" data-macro-schema-version="1" width="36" height="18">'
    )
  })

  it('shall render from html', function () {
    const text = [
      '<strong>Table of Contents</strong>',
      '<p>!toc</p>'
    ].join('\n')
    const result = toc(text)
    assert.strictEqual(
      result,
      '<strong>Table of Contents</strong>\n' +
      '<p><img class="editor-inline-macro" src="///plugins/servlet/confluence/placeholder/macro" data-macro-name="toc" data-macro-parameters="" data-macro-schema-version="1" width="36" height="18"></p>'
    )
  })

  it('shall render as html', function () {
    const text = [
      '**Table of Contents**',
      '!toc',
      ''
    ].join('\n')
    const result = toc(text, { isHtml: true })
    assert.strictEqual(
      result,
      text
    )
  })

  it('shall render with parameters', function () {
    const text = [
      '**Table of Contents**',
      '',
      '!toc(minlevel=2 maxlevel=5)',
      ''
    ].join('\n')
    const result = toc(text)
    assert.strictEqual(
      result,
      '**Table of Contents**\n\n' +
      '<img class="editor-inline-macro" src="///plugins/servlet/confluence/placeholder/macro" data-macro-name="toc" data-macro-parameters="minValue=2|maxLevel=5" data-macro-schema-version="1" width="36" height="18">\n'
    )
  })

  it('shall render with prerendered markedpp toc', function () {
    const text = [
      '**Table of Contents**',
      '',
      '<!-- !toc (minlevel=2) -->',
      '',
      '* [footnotes](#footnotes)',
      '* [{anchor}](#anchor)',
      '',
      '<!-- toc! -->',
      ''
    ].join('\n')
    const result = toc(text)
    assert.strictEqual(
      result,
      '**Table of Contents**\n\n' +
      '<img class="editor-inline-macro" src="///plugins/servlet/confluence/placeholder/macro" data-macro-name="toc" data-macro-parameters="minValue=2" data-macro-schema-version="1" width="36" height="18">\n'
    )
  })
})
