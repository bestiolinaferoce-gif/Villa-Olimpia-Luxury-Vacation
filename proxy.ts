// Proxy minimale: nessuna intercettazione route.
// Sostituisce middleware.ts per compatibilita con Next.js 16+.
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function proxy(_request: NextRequest) {
  return NextResponse.next()
}

export const config = {
  matcher: [],
}
