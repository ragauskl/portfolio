import * as triangulate from 'delaunay-triangulate'
import { randomRange, clamp } from './utils'

export function getTriangleVertices (w: number, h: number): [[number, number], [number, number], [number, number]][] {
  const vertices: [number, number][] = []
  const cx = w / 2
  const cy = h / 2

  const rings = [
    { r: 80, c: 20 },
    { r: w * 0.25 + 80, c: 5 },
    { r: w * 0.5 + 80, c: 8 },
    { r: w * 0.6 + 80, c: 10 },
    { r: w * 0.75 + 80, c: 10 },
    { r: w * 1 + 80, c: 15 },
    { r: w * 1.2 + 80, c: 10 }
  ]

  vertices.push([cx, cy])

  rings.forEach(ring => {
    const radius = ring.r
    const count = ring.c
    const variance = radius * 0.5

    for (let i = 0; i < count; i++) {
      const x = Math.cos((i / count) * Math.PI * 2) * radius + cx + randomRange(-variance, variance)
      const y = Math.sin((i / count) * Math.PI * 2) * radius + cy + randomRange(-variance, variance)
      vertices.push([x, y])
    }
  })

  vertices.forEach(v => {
    v[0] = clamp(v[0], 0, w)
    v[1] = clamp(v[1], 0, h)
  })
  const indices = triangulate(vertices)
  const triangles: [[number, number], [number, number], [number, number]][] = []

  for (const index of indices) {
    const points = [vertices[index[0]], vertices[index[1]], vertices[index[2]]]
    const xs = points.map(x => x[0])
    const ys = points.map(x => x[1])
    const xMin = Math.min(...xs)
    const xMax = Math.max(...xs)
    const yMin = Math.min(...ys)
    const yMax = Math.max(...ys)

    if (xMax - xMin <= 2 || yMax - yMin <= 2) continue

    triangles.push([vertices[index[0]], vertices[index[1]], vertices[index[2]]])
  }

  return triangles
}

export function calculateNewCentroid (cx: number, cy: number, distanceMin: number, distanceMax: number) {
  const dx = cx
  const dy = cy

  const distance = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2))
  const radians = Math.atan2(dy, dx)
  const angle = radians * 180 / Math.PI

  const theta = angle * Math.PI / 180
  let extension = randomRange(distanceMin, distanceMax)
  if (distance < 40) {
    extension += 5
  } else if (distance < 50) {
    extension += 1.5
  } else if (distance < 100) {
    extension += 0.7
  } else if (distance < 200) {
    extension += 0.25
  } else if (distance < 300) {
    extension += 0.0625
  }
  const x = distance * extension * Math.cos(theta)
  const y = distance * extension * Math.sin(theta)

  return { x, y }
}

export function translateToOrigin (x, y, ox, oy) {
  return {
    x: x - ox,
    y: y - oy
  }
}

export function translateToCornerOrigin (x, y, ox, oy) {
  return {
    x: x + ox,
    y: y + oy
  }
}

export type Box = {
  x: number,
  y: number,
  w: number,
  h: number
}

export type Bounds = {
  minX: number,
  minY: number,
  maxX: number,
  maxY: number
}
