const fs = require('fs')
const assert = require('assert')
const { plantuml, tmplPlantuml } = require('../src/plantuml.js')

describe('plantuml', function () {
  this.timeout(6000)

  it('shall convert to svg', function () {
    const diagram = fs.readFileSync(`${__dirname}/fixtures/alice.puml`, 'utf8')
    return plantuml(diagram)
      .then(svg => {
        // console.log(svg)
        assert.ok(/<svg xmlns/.test(svg))
      })
  })

  it('shall convert to png', function () {
    const diagram = fs.readFileSync(`${__dirname}/fixtures/alice.puml`, 'utf8')
    return plantuml(diagram, { type: 'png' })
      .then(png => {
        // console.log(png)
        assert.ok(/<img src="data:image\/png;base64,/.test(png))
      })
  })

  it('shall render template', function () {
    const exp = '<table class="wysiwyg-macro" data-macro-name="plantuml" data-macro-parameters="atlassian-macro-output-type=INLINE|align=center" data-macro-schema-version="1" data-macro-body-type="PLAIN_TEXT"><tbody><tr><td class="wysiwyg-macro-body"><pre>Bob<->Alice: Hello</pre></td></tr></tbody></table>'
    const text = 'Bob<->Alice: Hello'
    const result = tmplPlantuml(text, { format: 'GIF', align: 'center' })
    assert.strictEqual(result, exp)
  })
})
