import axios from "axios"

export const API_BASE_URL =
  (import.meta.env.VITE_API_BASE_URL as string) || "http://localhost:8000/api"

export const API_ORIGIN =
  (import.meta.env.VITE_API_ORIGIN as string) || "http://localhost:8000"

export const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
  timeout: 8000,
})

export function extractError(err: unknown, fallback = "Something went wrong"): string {
  const e = err as {
    response?: { data?: { message?: string } }
    message?: string
  }
  return e?.response?.data?.message || e?.message || fallback
}
