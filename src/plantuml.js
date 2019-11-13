const { spawn } = require('child_process')
const { resolve } = require('path')

async function exec (command, args, diagram) {
  let stdout = Buffer.from('')
  let stderr = Buffer.from('')

  return new Promise((resolve, reject) => {
    const sub = spawn(command, args)

    sub.stdout.on('data', data => { stdout = Buffer.concat([stdout, data]) })
    sub.stderr.on('data', data => { stderr = Buffer.concat([stderr, data]) })
    sub.on('close', () => resolve(stdout))
    sub.on('error', err => {
      err.stderr = stderr.toString()
      reject(err)
    })

    sub.stdin.write(diagram)
    sub.stdin.end()
  })
}

const PLANTUML_JAR = process.env.PLANTUML_JAR || resolve(__dirname, '..', 'plantuml.jar')

async function plantuml (diagram = '', { type = 'svg', jar = PLANTUML_JAR } = {}) {
  return exec('java', ['-jar', jar, '-p', `-t${type}`], diagram)
    .then(out => type === 'png'
      ? `<img src="data:image/png;base64,${out.toString('base64')}">`
      : out.toString()
    )
}

module.exports = { plantuml }