import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

const CANONICAL_HOST = "villaolimpiacaporizzuto.com"
const WWW_HOST = `www.${CANONICAL_HOST}`

export function proxy(request: NextRequest) {
  const url = request.nextUrl.clone()
  let shouldRedirect = false

  if (url.hostname === WWW_HOST) {
    url.hostname = CANONICAL_HOST
    shouldRedirect = true
  }

  if (url.pathname === "/it" || url.pathname.startsWith("/it/")) {
    url.pathname = url.pathname.replace(/^\/it(?=\/|$)/, "") || "/"
    shouldRedirect = true
  }

  if (shouldRedirect) {
    return NextResponse.redirect(url, 308)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)",
  ],
}
