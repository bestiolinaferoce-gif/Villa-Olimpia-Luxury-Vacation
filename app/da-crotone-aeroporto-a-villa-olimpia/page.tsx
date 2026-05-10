import { permanentRedirect } from "next/navigation"

// Slug legacy: la landing IT canonica vive su /aeroporto-crotone-villa-olimpia
// Manteniamo questa pagina solo per redirect 308 e zero perdita SEO.
export default function DaCrotoneAeroportoLegacyRedirectPage() {
  permanentRedirect("/aeroporto-crotone-villa-olimpia")
}
