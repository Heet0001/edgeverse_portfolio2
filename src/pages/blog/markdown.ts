/**
 * Tiny, dependency-free Markdown renderer.
 *
 * Supports: # / ## / ### headings, paragraphs, **bold**, _italic_/*italic*,
 * `inline code`, fenced ```code blocks```, blockquotes (> ...), unordered lists,
 * ordered lists, horizontal rules (---), and [link text](https://url) — including
 * autolink for bare http(s) URLs.
 *
 * Escapes all HTML before applying formatting so it is safe against XSS coming
 * from admin-authored markdown content.
 */

const escapeHtml = (s: string): string =>
  s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')

const escapeAttr = (s: string): string => escapeHtml(s).replace(/`/g, '&#96;')

const isSafeUrl = (url: string): boolean => {
  const u = url.trim()
  return /^(https?:\/\/|mailto:|\/|#)/i.test(u)
}

const inline = (text: string): string => {
  let s = escapeHtml(text)

  // Inline code
  s = s.replace(/`([^`]+)`/g, (_m, code: string) => `<code>${code}</code>`)

  // [text](url)
  s = s.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (m, label: string, url: string) => {
    if (!isSafeUrl(url)) return m
    const safe = escapeAttr(url)
    const isExternal = /^https?:\/\//i.test(url)
    const target = isExternal ? ' target="_blank" rel="noreferrer noopener"' : ''
    return `<a href="${safe}"${target}>${label}</a>`
  })

  // Bold **text**
  s = s.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')

  // Italic *text* and _text_
  s = s.replace(/(^|[^*])\*([^*\s][^*]*?)\*(?!\*)/g, '$1<em>$2</em>')
  s = s.replace(/(^|[^_])_([^_\s][^_]*?)_(?!_)/g, '$1<em>$2</em>')

  // Autolink bare URLs
  s = s.replace(
    /(^|\s)((?:https?:\/\/)[^\s<]+)/g,
    (_m, lead: string, url: string) =>
      `${lead}<a href="${escapeAttr(url)}" target="_blank" rel="noreferrer noopener">${url}</a>`,
  )

  return s
}

export function renderMarkdown(input: string): string {
  if (!input) return ''
  const lines = input.replace(/\r\n/g, '\n').split('\n')

  const out: string[] = []
  let i = 0

  let inUl = false
  let inOl = false
  let inBlockquote = false

  const closeLists = () => {
    if (inUl) {
      out.push('</ul>')
      inUl = false
    }
    if (inOl) {
      out.push('</ol>')
      inOl = false
    }
    if (inBlockquote) {
      out.push('</blockquote>')
      inBlockquote = false
    }
  }

  while (i < lines.length) {
    const line = lines[i]

    // Fenced code block
    if (/^```/.test(line)) {
      closeLists()
      const lang = line.replace(/^```\s*/, '').trim()
      const buf: string[] = []
      i += 1
      while (i < lines.length && !/^```/.test(lines[i])) {
        buf.push(lines[i])
        i += 1
      }
      const code = escapeHtml(buf.join('\n'))
      const cls = lang ? ` class="lang-${escapeAttr(lang)}"` : ''
      out.push(`<pre><code${cls}>${code}</code></pre>`)
      i += 1
      continue
    }

    // Horizontal rule
    if (/^\s*---+\s*$/.test(line)) {
      closeLists()
      out.push('<hr />')
      i += 1
      continue
    }

    // Headings
    const h = line.match(/^(#{1,6})\s+(.*)$/)
    if (h) {
      closeLists()
      const level = h[1].length
      out.push(`<h${level}>${inline(h[2])}</h${level}>`)
      i += 1
      continue
    }

    // Blockquote
    if (/^>\s?/.test(line)) {
      if (!inBlockquote) {
        closeLists()
        out.push('<blockquote>')
        inBlockquote = true
      }
      out.push(`<p>${inline(line.replace(/^>\s?/, ''))}</p>`)
      i += 1
      continue
    } else if (inBlockquote) {
      out.push('</blockquote>')
      inBlockquote = false
    }

    // Unordered list
    if (/^\s*[-*+]\s+/.test(line)) {
      if (!inUl) {
        closeLists()
        out.push('<ul>')
        inUl = true
      }
      out.push(`<li>${inline(line.replace(/^\s*[-*+]\s+/, ''))}</li>`)
      i += 1
      continue
    }

    // Ordered list
    if (/^\s*\d+\.\s+/.test(line)) {
      if (!inOl) {
        closeLists()
        out.push('<ol>')
        inOl = true
      }
      out.push(`<li>${inline(line.replace(/^\s*\d+\.\s+/, ''))}</li>`)
      i += 1
      continue
    }

    // Blank line
    if (/^\s*$/.test(line)) {
      closeLists()
      i += 1
      continue
    }

    // Paragraph (consume continuation lines until blank/structural)
    closeLists()
    const buf: string[] = [line]
    i += 1
    while (
      i < lines.length &&
      !/^\s*$/.test(lines[i]) &&
      !/^(#{1,6})\s+/.test(lines[i]) &&
      !/^```/.test(lines[i]) &&
      !/^>\s?/.test(lines[i]) &&
      !/^\s*[-*+]\s+/.test(lines[i]) &&
      !/^\s*\d+\.\s+/.test(lines[i]) &&
      !/^\s*---+\s*$/.test(lines[i])
    ) {
      buf.push(lines[i])
      i += 1
    }
    out.push(`<p>${inline(buf.join(' '))}</p>`)
  }

  closeLists()
  return out.join('\n')
}
