
export function randomRange (min: number, max: number, roundTo?: number): number {
  const r = min + (max - min) * Math.random()
  return roundTo ? round(r, roundTo) : r
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
