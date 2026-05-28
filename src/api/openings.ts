import { api } from "./client"
import type { Opening } from "../types/models"

export async function getPublicOpenings(): Promise<Opening[]> {
  try {
    const res = await api.get<{ openings: Opening[] }>("/openings/public")
    return res.data.openings || []
  } catch {
    return []
  }
}

export async function getPublicOpeningBySlug(slug: string): Promise<Opening | null> {
  try {
    const res = await api.get<{ opening: Opening }>(`/openings/public/${encodeURIComponent(slug)}`)
    return res.data.opening
  } catch {
    return null
  }
}
