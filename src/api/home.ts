import { api } from "./client"
import type { HomeContent } from "../types/models"

export async function getPublicHome(): Promise<HomeContent | null> {
  try {
    const res = await api.get<{ home: HomeContent }>("/home/public")
    return res.data.home
  } catch {
    return null
  }
}
