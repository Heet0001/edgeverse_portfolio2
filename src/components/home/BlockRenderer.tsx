import type { CSSProperties, JSX } from 'react'
import type {
  Align,
  ButtonBlock,
  ColumnsBlock,
  DividerBlock,
  EmbedBlock,
  HeadingBlock,
  HomeBlock,
  ImageBlock,
  ParagraphBlock,
  RawHtmlBlock,
  SpacerBlock,
  TextStyle,
  VideoBlock,
} from '../../types/models'
import styles from './customSections.module.scss'

const aspectToPercent = (r?: string) => {
  switch (r) {
    case '16:9':
      return '56.25%'
    case '4:3':
      return '75%'
    case '1:1':
      return '100%'
    case '21:9':
      return '42.857%'
    case '9:16':
      return '177.78%'
    default:
      return '56.25%'
  }
}

const textStyleToCss = (s?: TextStyle, fallbackAlign?: Align): CSSProperties => {
  if (!s) return fallbackAlign ? { textAlign: fallbackAlign } : {}
  const css: CSSProperties = {}
  if (s.color) css.color = s.color
  if (s.fontSize) css.fontSize = s.fontSize
  if (s.fontWeight !== undefined && s.fontWeight !== '')
    css.fontWeight = s.fontWeight as CSSProperties['fontWeight']
  if (s.fontFamily) css.fontFamily = s.fontFamily
  if (s.align || fallbackAlign) css.textAlign = (s.align || fallbackAlign) as Align
  if (s.lineHeight) css.lineHeight = s.lineHeight
  if (s.letterSpacing) css.letterSpacing = s.letterSpacing
  if (s.italic) css.fontStyle = 'italic'
  if (s.underline) css.textDecoration = 'underline'
  if (s.background) css.background = s.background
  return css
}

const alignToFlex = (a?: Align): CSSProperties => {
  if (a === 'center') return { display: 'flex', justifyContent: 'center' }
  if (a === 'right') return { display: 'flex', justifyContent: 'flex-end' }
  return { display: 'flex', justifyContent: 'flex-start' }
}

const HeadingTag = ({ level, ...rest }: { level: number } & JSX.IntrinsicElements['h2']) => {
  const safe = Math.min(6, Math.max(1, level || 2))
  const Tag = `h${safe}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  return <Tag {...rest} />
}

function HeadingRender({ block }: { block: HeadingBlock }) {
  const css: CSSProperties = {
    ...textStyleToCss(block.style),
    margin: 0,
    background: block.style?.background,
    padding: block.style?.background ? '0.4em 0.6em' : undefined,
    borderRadius: block.style?.background ? '8px' : undefined,
    display: block.style?.background ? 'inline-block' : undefined,
  }
  return (
    <div style={alignToFlex(block.style?.align)}>
      <HeadingTag level={block.level} className={styles.heading} style={css}>
        {block.text}
      </HeadingTag>
    </div>
  )
}

function ParagraphRender({ block }: { block: ParagraphBlock }) {
  const css: CSSProperties = {
    ...textStyleToCss(block.style),
    margin: 0,
    background: block.style?.background,
    padding: block.style?.background ? '0.6em 0.8em' : undefined,
    borderRadius: block.style?.background ? '8px' : undefined,
  }
  return (
    <p className={styles.paragraph} style={css}>
      {block.text}
    </p>
  )
}

function ImageRender({ block }: { block: ImageBlock }) {
  if (!block.src) return null
  const wrapStyle: CSSProperties = alignToFlex(block.align)
  const imgStyle: CSSProperties = {
    width: block.width || '100%',
    maxWidth: '100%',
    height: 'auto',
    display: 'block',
  }
  const img = (
    <img
      src={block.src}
      alt={block.alt || ''}
      className={`${styles.image} ${block.rounded ? styles.imageRounded : ''}`}
      style={imgStyle}
    />
  )
  return (
    <div>
      <div style={wrapStyle}>
        {block.link ? (
          <a href={block.link} style={{ display: 'inline-block', maxWidth: '100%' }}>
            {img}
          </a>
        ) : (
          img
        )}
      </div>
      {block.caption ? (
        <div className={styles.caption} style={{ textAlign: block.align || 'left' }}>
          {block.caption}
        </div>
      ) : null}
    </div>
  )
}

function VideoRender({ block }: { block: VideoBlock }) {
  if (!block.src) return null
  return (
    <div style={alignToFlex(block.align)}>
      <div
        className={styles.videoWrap}
        style={{
          width: '100%',
          maxWidth: '100%',
          paddingTop: aspectToPercent(block.aspectRatio),
          position: 'relative',
        }}
      >
        <video
          className={styles.videoEl}
          src={block.src}
          poster={block.poster || undefined}
          controls={block.controls !== false}
          autoPlay={!!block.autoplay}
          muted={!!block.muted || !!block.autoplay}
          loop={!!block.loop}
          playsInline
          style={{ position: 'absolute', inset: 0 }}
        />
      </div>
      {block.caption ? <div className={styles.caption}>{block.caption}</div> : null}
    </div>
  )
}

const toEmbedUrl = (raw: string): string => {
  try {
    const u = new URL(raw)
    if (u.hostname.includes('youtube.com')) {
      if (u.pathname === '/watch') {
        const v = u.searchParams.get('v')
        if (v) return `https://www.youtube.com/embed/${v}`
      }
      return raw
    }
    if (u.hostname === 'youtu.be') {
      const id = u.pathname.replace('/', '')
      if (id) return `https://www.youtube.com/embed/${id}`
    }
    if (u.hostname.includes('vimeo.com') && /^\/\d+/.test(u.pathname)) {
      return `https://player.vimeo.com/video${u.pathname}`
    }
    return raw
  } catch {
    return raw
  }
}

function EmbedRender({ block }: { block: EmbedBlock }) {
  if (!block.url) return null
  const src = toEmbedUrl(block.url)
  return (
    <div>
      <div
        className={styles.embedWrap}
        style={{ paddingTop: aspectToPercent(block.aspectRatio) }}
      >
        <iframe
          className={styles.embedFrame}
          src={src}
          title={block.caption || 'Embedded content'}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
        />
      </div>
      {block.caption ? <div className={styles.caption}>{block.caption}</div> : null}
    </div>
  )
}

function ColumnsRender({ block }: { block: ColumnsBlock }) {
  const ratio = block.ratio || '1:1'
  const colCount = ratio === '1:1:1' ? 3 : 2
  const gridTemplate =
    ratio === '1:1:1'
      ? '1fr 1fr 1fr'
      : ratio
        .split(':')
        .map((n) => `${n}fr`)
        .join(' ')
  const align =
    block.verticalAlign === 'center'
      ? 'center'
      : block.verticalAlign === 'bottom'
        ? 'end'
        : 'start'
  const cols = (block.columns || []).slice(0, colCount)
  while (cols.length < colCount) cols.push([])
  return (
    <div
      className={styles.columns}
      style={{
        gridTemplateColumns: gridTemplate,
        gap: block.gap || '32px',
        alignItems: align,
      }}
    >
      {cols.map((colBlocks, i) => (
        <div key={i} style={{ minWidth: 0 }}>
          <div className={styles.blocks}>
            {(colBlocks || []).map((b) => (
              <BlockRenderer key={b.id} block={b} />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

function DividerRender({ block }: { block: DividerBlock }) {
  return (
    <hr
      className={styles.divider}
      style={{
        borderTop: `${block.thickness || '1px'} solid ${block.color || '#e2e8f0'}`,
      }}
    />
  )
}

function SpacerRender({ block }: { block: SpacerBlock }) {
  return <div className={styles.spacer} style={{ height: block.height || '48px' }} />
}

function RawRender({ block }: { block: RawHtmlBlock }) {
  return <div dangerouslySetInnerHTML={{ __html: block.html || '' }} />
}

function ButtonRender({ block }: { block: ButtonBlock }) {
  const variant = block.variant || 'primary'
  const cls =
    variant === 'outline'
      ? `${styles.button} ${styles.btnOutline}`
      : variant === 'ghost'
        ? `${styles.button} ${styles.btnGhost}`
        : `${styles.button} ${styles.btnPrimary}`
  const overrideStyle: CSSProperties = {}
  if (block.background) {
    overrideStyle.background = block.background
    overrideStyle.borderColor = block.background
  }
  if (block.color) overrideStyle.color = block.color
  return (
    <div style={alignToFlex(block.align || 'left')}>
      <a className={cls} href={block.href || '#'} style={overrideStyle}>
        {block.label} <span aria-hidden="true">→</span>
      </a>
    </div>
  )
}

export default function BlockRenderer({ block }: { block: HomeBlock }) {
  switch (block.type) {
    case 'heading':
      return <HeadingRender block={block} />
    case 'paragraph':
      return <ParagraphRender block={block} />
    case 'image':
      return <ImageRender block={block} />
    case 'video':
      return <VideoRender block={block} />
    case 'embed':
      return <EmbedRender block={block} />
    case 'columns':
      return <ColumnsRender block={block} />
    case 'divider':
      return <DividerRender block={block} />
    case 'spacer':
      return <SpacerRender block={block} />
    case 'raw':
      return <RawRender block={block} />
    case 'button':
      return <ButtonRender block={block} />
    default:
      return null
  }
}
