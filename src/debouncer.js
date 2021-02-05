const debouncer = (inner) => {
  const locked = new Map()

  const debounce = (hashVal, ...args) => {
    if (!locked.has(hashVal)) {
      locked.set(hashVal, [])

      inner(...args)
        .then(result => {
          locked.get(hashVal).forEach(([resolve]) => resolve(result))
        })
        .catch(err => {
          // eslint-disable-next-line no-unused-vars
          locked.get(hashVal).forEach(([resolve, reject]) => reject(err))
        })
        .finally(() => {
          locked.delete(hashVal)
        })
    }
    return new Promise((resolve, reject) => locked.get(hashVal).push([resolve, reject]))
  }

  return debounce
}

module.exports = { debouncer }
