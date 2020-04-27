export interface Project {
  tag: string
  title: string
  subtitle: string
  markdown: string
  summary: string
  startDate: string
  featured: boolean
  endDate?: string
  cover?: string
  coverOutlined?: string
  hidden?: string
  links?: {
    name: string
    href: string
  }[]
}
