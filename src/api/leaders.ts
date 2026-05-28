import { api } from "./client"

export type LeaderPublic = {
  _id: string
  name: string
  role: string
  image: string
  linkedIn: string
  bio: string
  order: number
}

export async function getPublicLeaders() {
  const res = await api.get<{ leaders: LeaderPublic[] }>("/leaders/public")
  return res.data.leaders
}
