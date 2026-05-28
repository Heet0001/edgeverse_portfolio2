export type HomeContent = {
  _id?: string
  key: string
  heroImage: string
  heroImageAlt: string
  collisionImage: string
  collisionImageAlt: string
  surveyKicker: string
  surveyQuote: string
  surveyAuthor: string
  surveyAuthorRole: string
  updatedAt?: string
}

export type Technology = {
  _id: string
  title: string
  subtitle: string
  description: string
  image: string
  icon: string
  order: number
  isActive: boolean
  createdAt?: string
  updatedAt?: string
}

export type Blog = {
  _id: string
  title: string
  slug: string
  excerpt: string
  content: string
  coverImage: string
  author: string
  tags: string[]
  isPublished: boolean
  publishedAt: string | null
  createdAt?: string
  updatedAt?: string
}

export type ContactMessagePayload = {
  fullName: string
  workEmail: string
  company?: string
  interestArea?: string
  message: string
}

export type EmploymentType = 'Full-time' | 'Part-time' | 'Internship' | 'Contract'

export type Opening = {
  _id: string
  title: string
  slug: string
  department: string
  location: string
  employmentType: EmploymentType
  description: string
  requirements: string
  niceToHave: string
  order: number
  isActive: boolean
  createdAt?: string
  updatedAt?: string
}

export type ResumeUploadResult = {
  ok: true
  url: string
  filename: string
  size: number
  mimetype: string
}

export type Align = 'left' | 'center' | 'right'

export type TextStyle = {
  color?: string
  fontSize?: string
  fontWeight?: string | number
  fontFamily?: string
  align?: Align
  lineHeight?: string
  letterSpacing?: string
  italic?: boolean
  underline?: boolean
  background?: string
}

export type HeadingBlock = {
  id: string
  type: 'heading'
  text: string
  level: 1 | 2 | 3 | 4 | 5 | 6
  style?: TextStyle
}

export type ParagraphBlock = {
  id: string
  type: 'paragraph'
  text: string
  style?: TextStyle
}

export type ImageBlock = {
  id: string
  type: 'image'
  src: string
  alt?: string
  caption?: string
  width?: string
  align?: Align
  rounded?: boolean
  link?: string
}

export type VideoBlock = {
  id: string
  type: 'video'
  src: string
  poster?: string
  controls?: boolean
  autoplay?: boolean
  muted?: boolean
  loop?: boolean
  aspectRatio?: '16:9' | '4:3' | '1:1' | '21:9' | '9:16'
  caption?: string
  align?: Align
}

export type EmbedBlock = {
  id: string
  type: 'embed'
  url: string
  aspectRatio?: '16:9' | '4:3' | '1:1' | '21:9' | '9:16'
  caption?: string
}

export type ColumnsBlock = {
  id: string
  type: 'columns'
  ratio?: '1:1' | '1:2' | '2:1' | '1:3' | '3:1' | '2:3' | '3:2' | '1:1:1'
  gap?: string
  verticalAlign?: 'top' | 'center' | 'bottom'
  columns: HomeBlock[][]
}

export type DividerBlock = {
  id: string
  type: 'divider'
  color?: string
  thickness?: string
}

export type SpacerBlock = {
  id: string
  type: 'spacer'
  height?: string
}

export type RawHtmlBlock = {
  id: string
  type: 'raw'
  html: string
}

export type ButtonBlock = {
  id: string
  type: 'button'
  label: string
  href: string
  variant?: 'primary' | 'outline' | 'ghost'
  align?: Align
  background?: string
  color?: string
}

export type HomeBlock =
  | HeadingBlock
  | ParagraphBlock
  | ImageBlock
  | VideoBlock
  | EmbedBlock
  | ColumnsBlock
  | DividerBlock
  | SpacerBlock
  | RawHtmlBlock
  | ButtonBlock

export type HomeSection = {
  _id: string
  title: string
  order: number
  isActive: boolean
  background?: string
  textColor?: string
  paddingTop?: string
  paddingBottom?: string
  maxWidth?: string
  blocks: HomeBlock[]
  createdAt?: string
  updatedAt?: string
}

export type JobApplicationPayload = {
  openingSlug?: string
  openingTitle?: string
  fullName: string
  email: string
  phone: string
  resumeUrl: string
  resumeFilename?: string
  education: string
  college: string
  degree: string
  gradYear: string
  skills: string[]
  experience: string
  projectLink?: string
  linkedin?: string
  portfolio?: string
}
