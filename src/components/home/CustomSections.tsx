import { useEffect, useState } from 'react'
import type { CSSProperties } from 'react'
import { getPublicHomeSections } from '../../api/sections'
import type { HomeSection } from '../../types/models'
import BlockRenderer from './BlockRenderer'
import styles from './customSections.module.scss'

export default function CustomSections() {
  const [sections, setSections] = useState<HomeSection[]>([])

  useEffect(() => {
    let alive = true
    void getPublicHomeSections().then((items) => {
      if (alive) setSections(items)
    })
    return () => {
      alive = false
    }
  }, [])

  if (sections.length === 0) return null

  return (
    <>
      {sections.map((s) => {
        const sectionStyle: CSSProperties = {
          background: s.background || undefined,
          color: s.textColor || undefined,
          paddingTop: s.paddingTop || undefined,
          paddingBottom: s.paddingBottom || undefined,
        }
        const innerStyle: CSSProperties = {
          maxWidth: s.maxWidth || '1200px',
        }
        return (
          <section
            key={s._id}
            className={styles.section}
            style={sectionStyle}
            aria-label={s.title}
          >
            <div className={styles.inner} style={innerStyle}>
              <div className={styles.blocks}>
                {(s.blocks || []).map((b) => (
                  <BlockRenderer key={b.id} block={b} />
                ))}
              </div>
            </div>
          </section>
        )
      })}
    </>
  )
}
