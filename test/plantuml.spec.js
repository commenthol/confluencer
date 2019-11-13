const fs = require('fs')
const assert = require('assert')
const { plantuml } = require('../src/plantuml.js')

describe('plantuml', function () {
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
})
