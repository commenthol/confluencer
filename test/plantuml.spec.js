const fs = require('fs')
const assert = require('assert')
const { plantuml, tmplPlantuml } = require('../src/plantuml.js')

describe('plantuml', function () {
  this.timeout(4000)

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

  it('shall use cached version', async function () {
    const diagram = fs.readFileSync(`${__dirname}/fixtures/alice.puml`, 'utf8')

    const first = await plantuml(diagram)
    const second = await plantuml(diagram)
    const third = await plantuml(diagram)

    assert.strictEqual(first, second)
    assert.strictEqual(first, third)
  })

  it('shall debounce', async function () {
    const diagram = `
@startuml

participant Alice
participant Bob
participant Charly

Alice --> Bob
Alice --> Charly

@enduml
    `
    const results = await Promise.all([plantuml(diagram), plantuml(diagram), plantuml(diagram)])

    assert.strictEqual(results[0], results[1])
    assert.strictEqual(results[0], results[2])
  })

  it('shall render template', function () {
    const exp = '<table class="wysiwyg-macro" data-macro-name="plantuml" data-macro-parameters="atlassian-macro-output-type=INLINE|align=center" data-macro-schema-version="1" data-macro-body-type="PLAIN_TEXT"><tbody><tr><td class="wysiwyg-macro-body"><pre>Bob&lt;-&gt;Alice: Hello</pre></td></tr></tbody></table>'
    const text = 'Bob<->Alice: Hello'
    const result = tmplPlantuml(text, { format: 'GIF', align: 'center' })
    assert.strictEqual(result, exp)
  })
})
