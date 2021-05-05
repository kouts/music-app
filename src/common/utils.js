export const clone = (obj) => {
  return JSON.parse(JSON.stringify(obj))
}

export const isEmptyObject = (obj) => {
  return Object.keys(obj).length === 0 && obj.constructor === Object
}

export const compareAlbumsYear = (a, b) => {
  const yearA = parseInt(a.intYearReleased)
  const yearB = parseInt(b.intYearReleased)
  if (yearA > yearB) {
    return 1
  }
  if (yearA < yearB) {
    return -1
  }
  return 0
}
