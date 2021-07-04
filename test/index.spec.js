const fs = require('fs')
const assert = require('assert')
const markdown = require('markdown-it')({
  html: true,
  linkify: true,
  typographer: true
}).use(require('markdown-it-footnote'))
  .use(require('markdown-it-admon'))

const { render } = require('..')

function writeFixture (filename, html, doWrite) {
  if (process.env.WRITE_FIXTURES || doWrite) {
    fs.writeFileSync(filename, html, 'utf8')
  }
}

describe('parse', function () {
  let html

  before(() => {
    const filename = `${__dirname}/fixtures/test.md`
    const md = fs.readFileSync(filename, 'utf8')
    html = markdown.render(md)
  })

  it('shall parse to confluence html content', async function () {
    const filename = `${__dirname}/fixtures/test.confuence.html`
    const exp = fs.readFileSync(filename, 'utf8')

    const result = await render(html)
    writeFixture(filename, result)

    assert.strictEqual(result, exp)
  })

  it('shall parse to html content', async function () {
    this.timeout(10000)

    const filename = `${__dirname}/fixtures/test.html`
    const exp = fs.readFileSync(filename, 'utf8')

    const result = await render(html, { isHtml: true })
    writeFixture(filename, result)

    assert.strictEqual(result, exp)
  })
})
