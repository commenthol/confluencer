const assert = require('assert')
const { anchor } = require('..')

describe('anchor', function () {
  it('shall render anchors', async function () {
    const exp = [
      '<a href="#id" class="confluence-link" data-anchor="id" data-linked-resource-default-alias="id">Link</a>',
      '<a href="#name" class="confluence-link" data-anchor="name" data-linked-resource-default-alias="name">Link2</a>',
      '<img class="editor-inline-macro" src="///plugins/servlet/confluence/placeholder/macro" data-macro-name="anchor" data-macro-default-parameter="name" data-macro-schema-version="1" width="9" height="18">',
      '<img class="editor-inline-macro" src="///plugins/servlet/confluence/placeholder/macro" data-macro-name="anchor" data-macro-default-parameter="id" data-macro-schema-version="1" width="9" height="18">',
      '<h2 id="id">header</h2>',
      '<h3 id="unused">header3</h3>'
    ].join('\n')
    const text = [
      '<a href="#id">Link</a>',
      '<a href="#name">Link2</a>',
      '<a name="name"></a>',
      '<h2 id="id">header</h2>',
      '<h3 id="unused">header3</h3>'
    ].join('\n')
    const result = await anchor(text)
    // console.log(JSON.stringify(result))
    assert.strictEqual(result, exp)
  })
})
