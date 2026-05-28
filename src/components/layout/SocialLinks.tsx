import styles from "./socialLinks.module.css"

export type SocialLinksVariant = "footer" | "navbar"

type SocialItem = {
  id: string
  label: string
  href: string
}

const SOCIAL_ITEMS: SocialItem[] = [
  { id: "x", label: "X", href: "https://twitter.com" },
  { id: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com" },
  { id: "youtube", label: "YouTube", href: "https://www.youtube.com" },
]

function SocialIcon({ id }: { id: string }) {
  switch (id) {
    case "x":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.icon}>
          <path
            fill="currentColor"
            d="M18.9 2H22l-6.8 7.8L23 22h-6.2l-4.9-6.3L6.6 22H3.5l7.3-8.4L1.3 2H7.7l4.4 5.8zM17 19.1h1.7L6.8 4.8H5z"
          />
        </svg>
      )
    case "linkedin":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.icon}>
          <path
            fill="currentColor"
            d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8.5H4.5V23H.5zM8.5 8.5H12.3V10.5H12.35C12.88 9.5 14.2 8.4 16.1 8.4 20.2 8.4 21 11.1 21 14.7V23H17V15.2c0-1.9 0-4.3-2.6-4.3-2.6 0-3 2-3 4.2V23H8.5z"
          />
        </svg>
      )
    case "youtube":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.icon}>
          <path
            fill="currentColor"
            d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.75 15.5v-7l6 3.5-6 3.5z"
          />
        </svg>
      )
    default:
      return null
  }
}

type SocialLinksProps = {
  variant?: SocialLinksVariant
  className?: string
  /** Light icons for navbar mega menu over dark hero imagery */
  heroTheme?: boolean
}

const SocialLinks = ({ variant = "footer", className, heroTheme = false }: SocialLinksProps) => {
  return (
    <div
      className={[styles.row, styles[variant], heroTheme && styles.navbarHero, className]
        .filter(Boolean)
        .join(" ")}
      aria-label="Social links"
    >
      {SOCIAL_ITEMS.map((item) => (
        <a
          key={item.id}
          href={item.href}
          className={styles.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={item.label}
        >
          <SocialIcon id={item.id} />
        </a>
      ))}
    </div>
  )
}

export default SocialLinks
