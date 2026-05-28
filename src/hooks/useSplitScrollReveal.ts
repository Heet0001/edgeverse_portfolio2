import { useLayoutEffect, type RefObject } from 'react'
import { gsap, registerGsapPlugins } from '../utils/gsap'
import { usePrefersReducedMotion } from './usePrefersReducedMotion'

type SplitRevealOptions = {
  start?: string
  mediaX?: number
  copyY?: number
}

export function useSplitScrollReveal(
  ref: RefObject<Element | null>,
  mediaSelector: string,
  copySelector: string,
  { start = 'top 82%', mediaX = -36, copyY = 28 }: SplitRevealOptions = {},
) {
  const reduceMotion = usePrefersReducedMotion()

  useLayoutEffect(() => {
    const section = ref.current
    if (!section || reduceMotion) return

    registerGsapPlugins()
    const media = section.querySelector(mediaSelector)
    const copy = section.querySelector(copySelector)
    if (!media || !copy) return

    const ctx = gsap.context(() => {
      gsap.from(media, {
        opacity: 0,
        x: mediaX,
        scale: 0.97,
        duration: 0.85,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start,
          toggleActions: 'play none none none',
        },
      })

      gsap.from(copy, {
        opacity: 0,
        y: copyY,
        duration: 0.75,
        ease: 'power3.out',
        delay: 0.08,
        scrollTrigger: {
          trigger: section,
          start,
          toggleActions: 'play none none none',
        },
      })
    }, section)

    return () => ctx.revert()
  }, [ref, reduceMotion, mediaSelector, copySelector, start, mediaX, copyY])
}
