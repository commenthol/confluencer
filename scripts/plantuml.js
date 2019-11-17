#!/usr/bin/env node

/* eslint node/no-deprecated-api: warn */

const fs = require('fs')
const http = require('http')
const https = require('https')
const { parse } = require('url')
const { resolve } = require('path')

const download = (url, filename) => {
  const file = fs.createWriteStream(filename)

  const getUrl = (url) => ({
    ...parse(url),
    headers: {
      'User-Agent': 'node/12.0',
      Accept: '*/*'
    }
  })

  return new Promise((resolve, reject) => {
    const error = (err) => reject(err)
    file.on('error', error)
    file.on('close', () => resolve())

    function makeReq (url, depth) {
      const prot = url.indexOf('https') === 0 ? https : http
      const req = prot.get(getUrl(url), res => {
        const code = String(res.statusCode)[0]
        if (depth && code === '3') {
          // console.log(res.headers)
          makeReq(res.headers.location, depth - 1)
          return
        }
        if (code === '2') {
          res.pipe(file)
          res.on('error', error)
        } else {
          reject(new Error(String(res.statusCode)))
        }
      })
      req.on('error', error)
      req.end()
    }

    makeReq(url, 5)
  })
}

const url = 'https://downloads.sourceforge.net/project/plantuml/plantuml.jar'
const filename = resolve(__dirname, '..', 'plantuml.jar')

if (!fs.existsSync(filename)) {
  console.log(`
  confluencer postinstall script:

  downloading "plantuml.jar" from "${url}"
  to file "${filename}"

`)

  download(url, filename)
}
