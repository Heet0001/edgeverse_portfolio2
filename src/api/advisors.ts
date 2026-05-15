import { api } from "./client"

export type AdvisorPublic = {
  _id: string
  name: string
  role: string
  type: "advisor" | "investor"
  image: string
  linkedIn: string
  bio: string
  order: number
}

export async function getPublicAdvisors() {
  const res = await api.get<{ advisors: AdvisorPublic[] }>("/advisors/public")
  return res.data.advisors
}
