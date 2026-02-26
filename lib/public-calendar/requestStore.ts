import { writeFile, readFile, mkdir } from "fs/promises"
import path from "path"
import type { PublicBookingRequest } from "./types"

const DATA_DIR = path.join(process.cwd(), "data")
const FILE_PATH = path.join(DATA_DIR, "public-requests.json")

async function ensureDataFile(): Promise<PublicBookingRequest[]> {
  try {
    const content = await readFile(FILE_PATH, "utf-8")
    return JSON.parse(content)
  } catch {
    await mkdir(DATA_DIR, { recursive: true }).catch(() => {})
    return []
  }
}

export async function saveRequest(req: PublicBookingRequest): Promise<void> {
  const requests = await ensureDataFile()
  requests.push(req)
  await writeFile(FILE_PATH, JSON.stringify(requests, null, 2))
}

export async function getAllRequests(): Promise<PublicBookingRequest[]> {
  return ensureDataFile()
}
