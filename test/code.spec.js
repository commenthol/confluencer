const assert = require('assert')
const { code } = require('..')

describe('code', function () {
  it('shall convert highlighted code blocks', function () {
    const exp = '<html><head></head><body><h2 id="%7Bcode%7D">{code}</h2>\n<blockquote>\n<p>Note the THREE backticks ``</p>\n</blockquote>\n<table class="wysiwyg-macro" data-macro-name="code" data-macro-parameters="language=js" data-macro-schema-version="1" data-macro-body-type="PLAIN_TEXT"><tbody><tr><td class="wysiwyg-macro-body"><pre>// Write your code as usual...\n(function () {\n  console.log(&apos;This gets converted...&apos;)\n})()\n</pre></td></tr></tbody></table></body></html>'
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
    const result = code(html)
    // console.log(JSON.stringify(result))
    assert.strictEqual(result, exp)
  })

  it('shall convert code blocks', function () {
    const exp = '<html><head></head><body><p>Just text</p>\n<table class="wysiwyg-macro" data-macro-name="code" data-macro-parameters data-macro-schema-version="1" data-macro-body-type="PLAIN_TEXT"><tbody><tr><td class="wysiwyg-macro-body"><pre>This is just a text clock\n\n- one\n- two\n- three\n</pre></td></tr></tbody></table><p>A paragraph...</p>\n<h2 id="%7Bcode%7D">{code}</h2>\n<blockquote>\n<p>Note the THREE backticks ``</p>\n</blockquote>\n<table class="wysiwyg-macro" data-macro-name="code" data-macro-parameters="language=js" data-macro-schema-version="1" data-macro-body-type="PLAIN_TEXT"><tbody><tr><td class="wysiwyg-macro-body"><pre>// Write your code as usual...\n(function () {\n  console.log(&apos;This gets converted...&apos;)\n})()\n</pre></td></tr></tbody></table></body></html>'

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
    const result = code(html)
    // console.log(JSON.stringify(result))
    assert.strictEqual(result, exp)
  })
})
