import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { kv } from "@/lib/kv"
import { leadPriorityTag, type EnrichedLead } from "@/lib/lead-automation"

export const dynamic = "force-dynamic"
export const runtime = "nodejs"

export const metadata: Metadata = {
  title: "Lead inbox — Villa Olimpia",
  robots: { index: false, follow: false },
}

const KV_LEADS_KEY = "vo_leads"

function parseLead(raw: unknown): EnrichedLead | null {
  try {
    if (typeof raw === "string") return JSON.parse(raw) as EnrichedLead
    if (raw && typeof raw === "object") return raw as EnrichedLead
    return null
  } catch {
    return null
  }
}

export default async function AdminLeadsPage({
  searchParams,
}: {
  searchParams: Promise<{ key?: string }>
}) {
  const adminKey = process.env.LEADS_ADMIN_KEY?.trim()
  const { key } = await searchParams
  if (!adminKey || key !== adminKey) {
    notFound()
  }

  let rawLeads: unknown[] = []
  let kvError: string | null = null
  try {
    rawLeads = await kv.lrange(KV_LEADS_KEY, 0, 199)
  } catch (err) {
    kvError = err instanceof Error ? err.message : "KV non raggiungibile"
  }

  const leads = rawLeads
    .map(parseLead)
    .filter((lead): lead is EnrichedLead => lead !== null)

  return (
    <main style={{ maxWidth: 1100, margin: "0 auto", padding: "32px 16px", fontFamily: "system-ui, sans-serif" }}>
      <h1 style={{ fontSize: 24, marginBottom: 4 }}>Lead inbox</h1>
      <p style={{ color: "#666", marginBottom: 24 }}>
        Ultimi {leads.length} lead salvati su Vercel KV (lista <code>vo_leads</code>).
      </p>

      {kvError && (
        <p style={{ color: "#b00", marginBottom: 16 }}>Errore KV: {kvError}</p>
      )}

      {leads.length === 0 && !kvError && (
        <p style={{ color: "#666" }}>Nessun lead in archivio. I nuovi lead compariranno qui automaticamente.</p>
      )}

      {leads.length > 0 && (
        <div style={{ overflowX: "auto" }}>
          <table style={{ borderCollapse: "collapse", width: "100%", fontSize: 14 }}>
            <thead>
              <tr>
                {["Ricevuto", "Priorità", "Nome", "Contatti", "Soggiorno", "Lodge", "Fonte", "Messaggio"].map((h) => (
                  <th key={h} style={{ textAlign: "left", borderBottom: "2px solid #333", padding: "8px 10px", whiteSpace: "nowrap" }}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {leads.map((lead) => (
                <tr key={lead.leadId} style={{ borderBottom: "1px solid #ddd", verticalAlign: "top" }}>
                  <td style={{ padding: "8px 10px", whiteSpace: "nowrap" }}>{lead.receivedAt?.slice(0, 16).replace("T", " ")}</td>
                  <td style={{ padding: "8px 10px", whiteSpace: "nowrap" }}>{leadPriorityTag(lead)}</td>
                  <td style={{ padding: "8px 10px" }}>{lead.name}</td>
                  <td style={{ padding: "8px 10px" }}>
                    <a href={`mailto:${lead.email}`}>{lead.email}</a>
                    <br />
                    <a href={`tel:${lead.phone}`}>{lead.phone}</a>
                  </td>
                  <td style={{ padding: "8px 10px", whiteSpace: "nowrap" }}>
                    {lead.checkIn} → {lead.checkOut}
                    <br />
                    {lead.guests} ospiti · {lead.stayNights} notti
                  </td>
                  <td style={{ padding: "8px 10px" }}>{lead.apartment || "—"}</td>
                  <td style={{ padding: "8px 10px" }}>{lead.source || "Diretta"}</td>
                  <td style={{ padding: "8px 10px", maxWidth: 320 }}>{lead.message || "—"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </main>
  )
}
