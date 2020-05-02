
export function randomRange (min: number, max: number, roundTo?: number): number {
  const r = min + (max - min) * Math.random()
  return roundTo ? round(r, roundTo) : r
}

export function randomFrom (arr: (number | string)[]) {
  if (arr.length < 1) return arr[0]
  const max = arr.length - 1
  const min = 0
  const randIndex = randomRange(min, max, 1)
  return arr[Math.min(max, randIndex)]
}

export function getRangeOptions (startVal: number, size: number, inc = 1) {
  return Array(size).fill(undefined).map((_, i) => startVal + (i * inc))
}

export function clamp (x: number, min: number, max: number) {
  return x < min ? min : (x > max ? max : x)
}

export function degreesToRadians (deg: number) {
  return deg * Math.PI / 180
}

export const distance = (a: number, b: number) => Math.abs(a - b)

export const pointDistance = (a: {x: number, y: number}, b: {x: number, y: number}) => Math.sqrt(
  Math.pow(a.x - b.x, 2) +
  Math.pow(a.y - b.y, 2)
)

export const round = (value: number, step: number) => {
  step || (step = 1.0)
  let inv = 1.0 / step
  return Math.round(value * inv) / inv
}

export const map = (val, inMin, inMax, outMin, outMax) => {
  return (val - inMin) * (outMax - outMin) / (inMax - inMin) + outMin
}
