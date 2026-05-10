import { permanentRedirect } from "next/navigation"

// Slug legacy: la landing IT canonica vive su /oslo-lamezia-villa-olimpia
// Manteniamo questa pagina solo per redirect 308 e zero perdita SEO.
export default function DaOsloALameziaLegacyRedirectPage() {
  permanentRedirect("/oslo-lamezia-villa-olimpia")
}
