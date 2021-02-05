const assert = require('assert')
const { img, buildImgTag } = require('../src/img.js')

describe('img', function () {
  it('image.png', function () {
    assert.strictEqual(
      buildImgTag({ src: 'image.png' }),
      '!image.png!'
    )
  })

  it('./image.png', function () {
    assert.strictEqual(
      buildImgTag({ src: './image.png', alt: '' }),
      '!image.png!'
    )
  })

  it('image.png thumbnail', function () {
    assert.strictEqual(
      buildImgTag({ src: 'image.png', thumbnail: true }),
      '!image.png|thumbnail!'
    )
  })

  it('https://test.test/image.png', function () {
    assert.strictEqual(
      buildImgTag({ src: 'https://test.test/image.png', alt: 'an image' }),
      '!https://test.test/image.png|alt=an image!'
    )
  })

  it('image.png align=center width=800px', function () {
    assert.strictEqual(
      buildImgTag({ src: 'image.png', align: 'center', width: '800px' }),
      '!image.png|align=center,width=800!'
    )
  })

  it('shall render img 1', async function () {
    const result = await img('<p><img src="myimage.jpg" alt="my image"></p>')
    assert.strictEqual(result, '<p><table class="wysiwyg-macro" data-macro-name="wiki-markup" data-macro-parameters="atlassian-macro-output-type=INLINE" data-macro-schema-version="1" data-macro-body-type="PLAIN_TEXT" data-mce-style="" data-mce-selected="1"><tbody><tr><td class="wysiwyg-macro-body"><pre>!myimage.jpg|alt=my image!</pre></td></tr></tbody></table></p>')
  })

  it('shall render img 2', async function () {
    const result = await img('<p><img src="./myimage.jpg" alt=""></p>')
    assert.strictEqual(result, '<p><table class="wysiwyg-macro" data-macro-name="wiki-markup" data-macro-parameters="atlassian-macro-output-type=INLINE" data-macro-schema-version="1" data-macro-body-type="PLAIN_TEXT" data-mce-style="" data-mce-selected="1"><tbody><tr><td class="wysiwyg-macro-body"><pre>!myimage.jpg!</pre></td></tr></tbody></table></p>')
  })

  it('shall render img 3', async function () {
    const result = await img('<p><img src="http://placekitten.com/200/300"></p>')
    assert.strictEqual(result, '<p><table class="wysiwyg-macro" data-macro-name="wiki-markup" data-macro-parameters="atlassian-macro-output-type=INLINE" data-macro-schema-version="1" data-macro-body-type="PLAIN_TEXT" data-mce-style="" data-mce-selected="1"><tbody><tr><td class="wysiwyg-macro-body"><pre>!http://placekitten.com/200/300!</pre></td></tr></tbody></table></p>')
  })
})
