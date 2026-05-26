import { useLayoutEffect, type RefObject } from 'react'
import { gsap, registerGsapPlugins } from '../utils/gsap'
import { usePrefersReducedMotion } from './usePrefersReducedMotion'

type RevealVariant = 'fadeUp' | 'fadeIn' | 'stagger'

type UseScrollRevealOptions = {
  variant?: RevealVariant
  delay?: number
  stagger?: number
  childSelector?: string
  start?: string
  y?: number
}

export function useScrollReveal(
  ref: RefObject<Element | null>,
  {
    variant = 'fadeUp',
    delay = 0,
    stagger = 0.1,
    childSelector = '[data-reveal-item]',
    start = 'top 88%',
    y = 28,
  }: UseScrollRevealOptions = {},
) {
  const reduceMotion = usePrefersReducedMotion()

  useLayoutEffect(() => {
    const el = ref.current
    if (!el || reduceMotion) return

    registerGsapPlugins()

    const ctx = gsap.context(() => {
      if (variant === 'stagger') {
        const items = el.querySelectorAll(childSelector)
        if (!items.length) return

        gsap.from(items, {
          opacity: 0,
          y,
          duration: 0.7,
          stagger,
          delay,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start,
            toggleActions: 'play none none none',
          },
        })
        return
      }

      gsap.from(el, {
        opacity: 0,
        y: variant === 'fadeUp' ? y : 0,
        duration: 0.75,
        delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start,
          toggleActions: 'play none none none',
        },
      })
    }, el)

    return () => ctx.revert()
  }, [ref, reduceMotion, variant, delay, stagger, childSelector, start, y])
}
