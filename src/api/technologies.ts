import { api } from "./client"
import type { Technology } from "../types/models"

export async function getPublicTechnologies(): Promise<Technology[]> {
  try {
    const res = await api.get<{ technologies: Technology[] }>("/technologies/public")
    return res.data.technologies || []
  } catch {
    return []
  }
}
