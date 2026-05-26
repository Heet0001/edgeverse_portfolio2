import { useCallback, useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import styles from "./backToTop.module.css"

const NAV_HEIGHT = 72

/** True once the page hero has scrolled up past the navbar — i.e. first content section. */
function isPastPageHero(): boolean {
  const hero = document.getElementById("page-hero")
  if (hero) {
    return hero.getBoundingClientRect().bottom <= NAV_HEIGHT
  }

  const scrollY =
    window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0
  return scrollY > 120
}

const BackToTop = () => {
  const [visible, setVisible] = useState(() => isPastPageHero())
  const location = useLocation()

  useEffect(() => {
    const hero = document.getElementById("page-hero")
    let raf = 0

    const sync = () => {
      raf = 0
      setVisible(isPastPageHero())
    }

    const onScroll = () => {
      if (raf) return
      raf = requestAnimationFrame(sync)
    }

    sync()

    window.addEventListener("scroll", onScroll, { passive: true })
    document.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)

    let observer: IntersectionObserver | undefined
    if (hero) {
      observer = new IntersectionObserver(onScroll, {
        root: null,
        threshold: [0, 0.25, 0.5, 0.75, 1],
      })
      observer.observe(hero)
    }

    return () => {
      window.removeEventListener("scroll", onScroll)
      document.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
      observer?.disconnect()
      if (raf) cancelAnimationFrame(raf)
    }
  }, [location.pathname])

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
    document.documentElement.scrollTo({ top: 0, left: 0, behavior: "smooth" })
  }, [])

  return (
    <button
      type="button"
      className={`${styles.button} ${visible ? styles.visible : ""}`}
      onClick={scrollToTop}
      aria-label="Back to top"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
    >
      <svg
        className={styles.icon}
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M5.5 15L12 8.5L18.5 15"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  )
}

export default BackToTop
