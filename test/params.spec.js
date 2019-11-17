const assert = require('assert')
const params = require('../src/params.js')

describe('params', function () {
  const tests = [
    ['title',
      { _: 'title' }],
    ['title format=svg',
      { _: 'title', format: 'svg' }],
    ['format=svg title',
      { _: 'title', format: 'svg' }],
    ['title subtitle=a subtitle with spaces',
      { _: 'title', subtitle: 'a subtitle with spaces' }],
    ['title subtitle=a subtitle with spaces other=1',
      { _: 'title', subtitle: 'a subtitle with spaces', other: 1 }],
    ['subtitle="a subtitle with spaces" title with spaces',
      { _: 'title with spaces', subtitle: 'a subtitle with spaces' }],
    ['subtitle="a subtitle with spaces" title with spaces other=2',
      { _: 'title with spaces', subtitle: 'a subtitle with spaces', other: 2 }],
    ['subtitle="a subtitle with spaces" a title with=sign other=2',
      { _: 'a title', subtitle: 'a subtitle with spaces', with: 'sign', other: 2 }],
    ['subtitle="a subtitle with spaces" "a title with=sign" other=2',
      { _: 'a title with=sign', subtitle: 'a subtitle with spaces', other: 2 }],
    ['a title with = signs',
      { _: 'a title with = signs' }],
    ['a title with==signs',
      { _: 'a title with==signs' }],
    ['a title with===signs test=123',
      { _: 'a title with===signs', test: 123 }]
  ]
  tests.forEach(([str, expected]) => {
    it(`shall parse ${str}`, function () {
      const result = params(str)
      assert.deepStrictEqual(result, expected)
    })
  })
})
