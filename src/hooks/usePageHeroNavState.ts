import { useCallback, useLayoutEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const NAV_HEIGHT = 72

function readHeroState() {
  const hero = document.getElementById('page-hero')
  if (!hero) {
    return { pastHero: true, lightHero: false }
  }

  const pastHero = hero.getBoundingClientRect().bottom <= NAV_HEIGHT
  const lightHero = hero.dataset.heroTheme === 'light'
  return { pastHero, lightHero }
}

/**
 * Tracks whether the fixed navbar should use "hero" styling (over #page-hero)
 * or "solid" styling (scrolled past hero / no hero).
 *
 * Re-syncs on route change, scroll, resize, and hero element resize so production
 * builds stay correct even when #page-hero mounts after the navbar.
 */
export function usePageHeroNavState() {
  const location = useLocation()
  const [pastHero, setPastHero] = useState(() => readHeroState().pastHero)
  const [lightHero, setLightHero] = useState(() => readHeroState().lightHero)

  const sync = useCallback(() => {
    const next = readHeroState()
    setPastHero(next.pastHero)
    setLightHero(next.lightHero)
  }, [])

  useLayoutEffect(() => {
    let raf = 0
    let heroObserver: ResizeObserver | undefined
    let mountObserver: MutationObserver | undefined

    const scheduleSync = () => {
      if (raf) return
      raf = requestAnimationFrame(() => {
        raf = 0
        sync()
      })
    }

    const attachHeroObserver = () => {
      const hero = document.getElementById('page-hero')
      if (!hero || heroObserver) return false

      heroObserver = new ResizeObserver(scheduleSync)
      heroObserver.observe(hero)
      return true
    }

    sync()

    // Outlet renders after Navbar; hero may appear on the next frame.
    if (!attachHeroObserver()) {
      mountObserver = new MutationObserver(() => {
        if (attachHeroObserver()) {
          scheduleSync()
          mountObserver?.disconnect()
          mountObserver = undefined
        }
      })
      const root = document.getElementById('root')
      if (root) {
        mountObserver.observe(root, { childList: true, subtree: true })
      }
      requestAnimationFrame(scheduleSync)
      requestAnimationFrame(() => requestAnimationFrame(scheduleSync))
    }

    window.addEventListener('scroll', scheduleSync, { passive: true })
    document.addEventListener('scroll', scheduleSync, { passive: true })
    window.addEventListener('resize', scheduleSync)

    let intersectionObserver: IntersectionObserver | undefined
    const hero = document.getElementById('page-hero')
    if (hero) {
      intersectionObserver = new IntersectionObserver(scheduleSync, {
        root: null,
        threshold: [0, 0.25, 0.5, 0.75, 1],
      })
      intersectionObserver.observe(hero)
    }

    return () => {
      window.removeEventListener('scroll', scheduleSync)
      document.removeEventListener('scroll', scheduleSync)
      window.removeEventListener('resize', scheduleSync)
      heroObserver?.disconnect()
      mountObserver?.disconnect()
      intersectionObserver?.disconnect()
      if (raf) cancelAnimationFrame(raf)
    }
  }, [location.pathname, sync])

  return { pastHero, lightHero }
}
