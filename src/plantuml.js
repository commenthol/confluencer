const crypto = require('crypto')
const { spawn } = require('child_process')
const MapLRU = require('map-lru')
const { escapeHtmlLiteral } = require('./utils.js')
const { debouncer } = require('./debouncer.js')

const CACHE = new MapLRU(100)

function md5 (str) {
  const hash = crypto.createHash('md5')
  hash.update(str)
  return hash.digest('hex')
}

async function exec (command, args, diagram) {
  let stdout = Buffer.from('')
  let stderr = Buffer.from('')

  return new Promise((resolve, reject) => {
    const sub = spawn(command, args)

    sub.stdout.on('data', data => { stdout = Buffer.concat([stdout, data]) })
    sub.stderr.on('data', data => { stderr = Buffer.concat([stderr, data]) })
    sub.on('close', () => resolve(stdout))
    sub.on('error', err => {
      // @ts-ignore
      err.stderr = stderr.toString()
      reject(err)
    })

    sub.stdin.write(diagram)
    sub.stdin.end()
  })
}

const debounce = debouncer(exec)

const validateOpts = {
  format: (val) => ['PNG', 'SVG'].indexOf(val.toUpperCase()) !== -1 ? val.toUpperCase() : undefined,
  align: (val) => ['left', 'center', 'right'].indexOf(val) !== -1 ? val : undefined,
  border: (val) => typeof val === 'number' ? val : undefined
}
validateOpts.width = validateOpts.border

function tmplPlantuml (text, opts = {}) {
  opts['atlassian-macro-output-type'] = 'INLINE'
  const params = ['atlassian-macro-output-type', 'format', 'title', 'align', 'border', 'width']
    .map(key => {
      const val = validateOpts[key] ? validateOpts[key](opts[key]) : opts[key]
      return val !== undefined ? `${key}=${val}` : undefined
    })
    .filter(Boolean)
    .join('|')

  return escapeHtmlLiteral`<table class="wysiwyg-macro" data-macro-name="plantuml" data-macro-parameters="${params}" data-macro-schema-version="1" data-macro-body-type="PLAIN_TEXT"><tbody><tr><td class="wysiwyg-macro-body"><pre>${text}</pre></td></tr></tbody></table>`
}

async function plantuml (diagram = '', opts = {}) {
  const {
    type = 'svg',
    jar = process.env.PLANTUML_JAR,
    cache = CACHE
  } = opts

  const hashVal = md5(type + diagram)

  if (cache && cache.has(hashVal)) {
    return cache.get(hashVal)
  }

  const cmd = jar ? 'java' : 'plantuml'
  const args = (jar ? ['-jar', jar] : []).concat(['-p', `-t${type}`])

  return debounce(hashVal, cmd, args, diagram)
    .then(out => {
      const img = type === 'png'
        ? `<img src="data:image/png;base64,${out.toString('base64')}">`
        : out.toString()

      if (cache) {
        cache.set(hashVal, img)
      }
      return img
    })
    .catch(err => {
      return `<pre style="background: rgba(100%, 0%, 0%, 0.3); border: 1px solid red;">PlantUML Error - ${err.message}\n\n${diagram}</pre>`
    })
}

module.exports = { plantuml, tmplPlantuml }
