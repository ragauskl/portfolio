
export interface SkillsConfig {
  development: Skill[]
  devops: Skill[]
}

export interface Skill {
  title: string
  src: string
  sprite: string
}

export type Coordinate = {x: number, y: number}

export type IconMeta = {
  src: string
  title: string
  sprite: string
}

export function polarToCartesian (centerX, centerY, radius, angleInDegrees) {
  let angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0

  return {
    x: centerX + (radius * Math.cos(angleInRadians)),
    y: centerY + (radius * Math.sin(angleInRadians))
  }
}

export function describeArc (x, y, radius, startAngle, endAngle, direction: 0 | 1) {

  let start = polarToCartesian(x, y, radius, endAngle)
  let end = polarToCartesian(x, y, radius, startAngle)

  let largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1'

  let d = [
        'M', start.x, start.y,
        'A', radius, radius, direction, largeArcFlag, direction, end.x, end.y
    ].join(' ')

  return d
}

export function angleBetweenPoints (p1: Coordinate, p2: Coordinate, c: Coordinate) {
  p1 = {
    x: p1.x - c.x,
    y: p1.y - c.y
  }
  p2 = {
    x: p2.x - c.x,
    y: p2.y - c.y
  }

  const a2 = Math.atan2(p1.y, p1.x)
  const a1 = Math.atan2(p2.y, p2.x)

  const sign = a1 > a2 ? 1 : -1
  let angle = a1 - a2
  const K = -sign * Math.PI * 2
  angle = (Math.abs(K + angle) < Math.abs(angle)) ? K + angle : angle

  let deg = Math.abs(Math.round(360 * angle / (Math.PI * 2)))

  if (deg < 0) deg = 360 + deg
  return deg
}

export function distanceBetweenPoints (p1: Coordinate, p2: Coordinate) {
  return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2))
}

export function scaleCoordinate (p: Coordinate, origin: Coordinate, distance: number) {
  const xLen = origin.x - p.x
  const yLen = origin.y - p.y

  const currDistance = distanceBetweenPoints(p, origin)
  const ratio = distance / currDistance

  const smallerXLength = xLen * ratio
  const smallerYLength = yLen * ratio

  return {
    x: p.x + (xLen - smallerXLength),
    y: p.y + (yLen - smallerYLength)
  }
}

export function map (num: number, inMin: number, inMax: number, outMin: number, outMax: number) {
  return (num - inMin) * (outMax - outMin) / (inMax - inMin) + outMin
}

export function shuffle (array) {
  let currentIndex = array.length
  let temporaryValue: any
  let randomIndex: number

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1

    // And swap it with the current element.
    temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }

  return array
}
