import { API_ORIGIN } from "./client"

/** Turn `/uploads/...` or other API-relative paths into absolute URLs for `<img src>`. */
export function resolveMediaUrl(url: string | undefined | null): string {
  if (url == null) return ""
  const u = String(url).trim()
  if (!u) return ""
  if (u.startsWith("http://") || u.startsWith("https://") || u.startsWith("data:") || u.startsWith("blob:")) {
    return u
  }
  if (u.startsWith("//")) return `https:${u}`
  if (u.startsWith("/")) return `${API_ORIGIN.replace(/\/$/, "")}${u}`
  return u
}
