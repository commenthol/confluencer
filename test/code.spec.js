const assert = require('assert')
const fs = require('fs')
const { code } = require('..')

describe('code', function () {
  it('shall convert highlighted code blocks', async function () {
    const exp = '<h2 id="%7Bcode%7D">{code}</h2>\n<blockquote>\n<p>Note the THREE backticks ``</p>\n</blockquote>\n<table class="wysiwyg-macro" data-macro-name="code" data-macro-parameters="language=js" data-macro-schema-version="1" data-macro-body-type="PLAIN_TEXT"><tbody><tr><td class="wysiwyg-macro-body"><pre>// Write your code as usual...\n(function () {\n  console.log(\'This gets converted...\')\n})()\n</pre></td></tr></tbody></table>'
    const html = [
      '<h2 id="%7Bcode%7D">{code}</h2>',
      '<blockquote>',
      '<p>Note the THREE backticks ``</p>',
      '</blockquote>',
      '<pre><code class="hljs language-js"><span class="hljs-comment">// Write your code as usual...</span>',
      '(<span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) </span>{',
      '  <span class="hljs-built_in">console</span>.log(<span class="hljs-string">\'This gets converted...\'</span>)',
      '})()',
      '</code></pre>'
    ].join('\n')
    const result = await code(html)
    // console.log(JSON.stringify(result))
    assert.strictEqual(result, exp)
  })

  it('shall convert code blocks', async function () {
    const exp = '<p>Just text</p>\n<table class="wysiwyg-macro" data-macro-name="code" data-macro-parameters="" data-macro-schema-version="1" data-macro-body-type="PLAIN_TEXT"><tbody><tr><td class="wysiwyg-macro-body"><pre>This is just a text clock\n\n- one\n- two\n- three\n</pre></td></tr></tbody></table><p>A paragraph...</p>\n<h2 id="%7Bcode%7D">{code}</h2>\n<blockquote>\n<p>Note the THREE backticks ``</p>\n</blockquote>\n<table class="wysiwyg-macro" data-macro-name="code" data-macro-parameters="language=js" data-macro-schema-version="1" data-macro-body-type="PLAIN_TEXT"><tbody><tr><td class="wysiwyg-macro-body"><pre>// Write your code as usual...\n(function () {\n  console.log(\'This gets converted...\')\n})()\n</pre></td></tr></tbody></table>'

    const html = [
      '<p>Just text</p>',
      '<pre><code class="hljs">This is just a text clock',
      '',
      '- one',
      '- two',
      '- three',
      '</code></pre><p>A paragraph...</p>',
      '<h2 id="%7Bcode%7D">{code}</h2>',
      '<blockquote>',
      '<p>Note the THREE backticks ``</p>',
      '</blockquote>',
      '<pre><code class="hljs language-js"><span class="hljs-comment">// Write your code as usual...</span>',
      '(<span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) </span>{',
      '  <span class="hljs-built_in">console</span>.log(<span class="hljs-string">\'This gets converted...\'</span>)',
      '})()',
      '</code></pre>'
    ].join('\n')
    const result = await code(html)
    // console.log(JSON.stringify(result))
    assert.strictEqual(result, exp)
  })

  it('shall leave plantuml block untouched', function () {
    const diagram = [
      '```!plantuml(format=svg)',
      fs.readFileSync(`${__dirname}/fixtures/alice.puml`, 'utf8'),
      '```', ' '
    ].join('\n')

    return code(diagram, { plantuml: false })
      .then(svg => {
        assert.ok(!/<svg xmlns/.test(svg))
      })
  })
})
