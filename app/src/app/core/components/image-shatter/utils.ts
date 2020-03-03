
export function randomRange (min: number, max: number): number {
  return min + (max - min) * Math.random()
}

export function clamp (x: number, min: number, max: number) {
  return x < min ? min : (x > max ? max : x)
}

export function degreesToRadians (deg: number) {
  return deg * Math.PI / 180
}

export const distance = (a: number, b: number) => Math.abs(a - b)

export const ANIMATION_TIME = 1000
