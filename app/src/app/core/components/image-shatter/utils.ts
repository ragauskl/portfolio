
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

export function getRangeOptions (min: number, max: number, inc = 1) {
  return Array(Math.round((max + 1 - min) / inc)).fill(undefined).map((_, i) => i * inc + min)
}

export function clamp (x: number, min: number, max: number) {
  return x < min ? min : (x > max ? max : x)
}

export function degreesToRadians (deg: number) {
  return deg * Math.PI / 180
}

export const distance = (a: number, b: number) => Math.abs(a - b)

export const round = (value: number, step: number) => {
  step || (step = 1.0)
  let inv = 1.0 / step
  return Math.round(value * inv) / inv
}
