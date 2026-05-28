import { api } from "./client"
import type { ContactMessagePayload } from "../types/models"

export async function submitContactMessage(payload: ContactMessagePayload) {
  const res = await api.post<{ ok: true; id: string }>("/messages/public", payload)
  return res.data
}
