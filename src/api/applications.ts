import { api } from "./client"
import type { JobApplicationPayload, ResumeUploadResult } from "../types/models"

export async function uploadResume(file: File): Promise<ResumeUploadResult> {
  const fd = new FormData()
  fd.append("file", file)
  const res = await api.post<ResumeUploadResult>(
    "/applications/public/resume",
    fd,
    { headers: { "Content-Type": "multipart/form-data" } }
  )
  return res.data
}

export async function submitApplication(payload: JobApplicationPayload) {
  const res = await api.post<{ ok: true; id: string }>("/applications/public", payload)
  return res.data
}
