import { useEffect, useState } from "react"
import type { HomeContent } from "../types/models"
import { getPublicHome } from "./home"

/** Dedupe parallel fetches in one session; do not keep stale data across tab returns. */
let inflight: Promise<HomeContent | null> | null = null

export function useHomeContent() {
  const [home, setHome] = useState<HomeContent | null>(null)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    let alive = true
    const load = () => {
      const p = inflight ?? (inflight = getPublicHome().finally(() => {
        inflight = null
      }))
      void p.then((h) => {
        if (!alive) return
        setHome(h)
        setLoaded(true)
      })
    }
    load()
    const onVis = () => {
      if (document.visibilityState === "visible") load()
    }
    document.addEventListener("visibilitychange", onVis)
    return () => {
      alive = false
      document.removeEventListener("visibilitychange", onVis)
    }
  }, [])

  return { home, loaded }
}
