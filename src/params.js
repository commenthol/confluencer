const EQUALS = '='
const SINGLE = "'"
const QUOTE = '"'
const ESC = '\\'
const SPACE = ' '
const LODASH = '_'
const QUOTES = [SINGLE, QUOTE]
const KEYCHARS = /[a-z]/

function params (str) {
  const params = {}
  let key = LODASH
  let cache = ''
  const flags = {
    quote: ''
  }

  const add = (char) => {
    params[key] = (params[key] || '') + char
  }

  for (let i = 0; i < str.length; i++) {
    const char = str[i]
    const next = str[i + 1]

    if (flags.quote) {
      if (char === flags.quote) {
        flags.quote = ''
        key = LODASH
      } else if (char === ESC && next === flags.quote) {
        add(next)
        i++
      } else {
        add(char)
      }
    } else if (QUOTES.includes(char)) {
      flags.quote = char
    } else if (char === EQUALS) {
      if (cache && cache !== EQUALS && next !== EQUALS) {
        key = cache
        cache = ''
      } else {
        add(cache)
        cache = ''
        add(char)
      }
    } else if (KEYCHARS.test(char)) {
      cache += char
    } else if (!flags.quote && char === SPACE && key !== LODASH && !params[LODASH]) {
      add(cache)
      cache = ''
      key = LODASH
    } else {
      add(cache)
      cache = ''
      add(char)
    }
  }

  add(cache)

  Object.entries(params).forEach(([key, value]) => {
    value = value.trim()
    if (/^[0-9.]/.test(value)) {
      value = parseFloat(value)
    }
    params[key] = value
  })

  return params
}

module.exports = params
