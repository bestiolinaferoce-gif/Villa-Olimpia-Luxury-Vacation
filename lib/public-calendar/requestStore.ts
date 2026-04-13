import { kvGet, kvSet } from "@/lib/kv"
import type { PublicBookingRequest } from "./types"

const KV_KEY = "publicrequests:all"

export async function saveRequest(req: PublicBookingRequest): Promise<void> {
  const requests = (await kvGet<PublicBookingRequest[]>(KV_KEY)) ?? []
  requests.push(req)
  await kvSet(KV_KEY, requests)
}

export async function getAllRequests(): Promise<PublicBookingRequest[]> {
  return (await kvGet<PublicBookingRequest[]>(KV_KEY)) ?? []
}

export async function getRequestById(id: string): Promise<PublicBookingRequest | null> {
  const requests = await getAllRequests()
  return requests.find((r) => r.id === id) ?? null
}

export async function updateRequestStatus(
  id: string,
  status: PublicBookingRequest["status"]
): Promise<void> {
  const requests = (await kvGet<PublicBookingRequest[]>(KV_KEY)) ?? []
  const idx = requests.findIndex((r) => r.id === id)
  if (idx < 0) return
  requests[idx] = { ...requests[idx], status }
  await kvSet(KV_KEY, requests)
}
