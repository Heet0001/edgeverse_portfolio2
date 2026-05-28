import { api } from "./client"
import type { HomeSection } from "../types/models"

export async function getPublicHomeSections(): Promise<HomeSection[]> {
  try {
    const res = await api.get<{ sections: HomeSection[] }>("/home-sections/public")
    return res.data.sections || []
  } catch {
    return []
  }
}
