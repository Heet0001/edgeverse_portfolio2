import { api } from "./client"
import type { Blog } from "../types/models"

export async function getPublicBlogs(limit = 50): Promise<Blog[]> {
  try {
    const res = await api.get<{ blogs: Blog[] }>("/blogs/public", { params: { limit } })
    return res.data.blogs || []
  } catch {
    return []
  }
}

export async function getPublicBlogBySlug(slug: string): Promise<Blog | null> {
  try {
    const res = await api.get<{ blog: Blog }>(`/blogs/public/${encodeURIComponent(slug)}`)
    return res.data.blog
  } catch {
    return null
  }
}
