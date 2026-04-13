/**
 * Vercel KV client wrapper.
 * Usato per storage persistente della cache iCal e dei booking.
 * In sviluppo locale con KV_REST_API_URL non configurato, usa un fallback Map in-memory.
 */
import { kv } from "@vercel/kv"

export { kv }

/** Legge un valore JSON da KV. Ritorna null se non esiste. */
export async function kvGet<T>(key: string): Promise<T | null> {
  try {
    return await kv.get<T>(key)
  } catch {
    return null
  }
}

/** Scrive un valore JSON in KV con TTL opzionale (secondi). */
export async function kvSet(key: string, value: unknown, ttlSeconds?: number): Promise<void> {
  try {
    if (ttlSeconds) {
      await kv.set(key, value, { ex: ttlSeconds })
    } else {
      await kv.set(key, value)
    }
  } catch (err) {
    console.error(`[KV] set error for key "${key}":`, err)
  }
}

/** Legge tutte le chiavi che matchano un pattern (usa KEYS — solo per operazioni batch). */
export async function kvKeys(pattern: string): Promise<string[]> {
  try {
    return await kv.keys(pattern)
  } catch {
    return []
  }
}

/** Elimina una chiave. */
export async function kvDel(key: string): Promise<void> {
  try {
    await kv.del(key)
  } catch {
    // silent
  }
}
