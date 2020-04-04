export interface Project {
  tag: string
  title: string
  subtitle: string
  markdown: string
  summary: string
  startDate: string
  github?: string
  featured: boolean
  endDate?: string
  live?: null | string
  demo?: string
  cover?: string
  hidden?: string
}
