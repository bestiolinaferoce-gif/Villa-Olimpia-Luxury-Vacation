import path from "path"

/**
 * Data directory compatibile con Vercel serverless.
 * Su Vercel il filesystem è read-only eccetto /tmp.
 * Usa /tmp in produzione Vercel per evitare EACCES.
 * NOTA: dati in /tmp sono effimeri (persi tra cold start).
 * Per persistenza reale: migrare a Vercel KV/Blob o DB esterno.
 */
export const DATA_DIR =
  process.env.VERCEL === "1"
    ? path.join("/tmp", "villa-olimpia-data")
    : path.join(process.cwd(), "data")

export const ICAL_CACHE_DIR = path.join(DATA_DIR, "ical-cache")
