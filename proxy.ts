import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

const CANONICAL_HOST = "villaolimpiacaporizzuto.com"
const WWW_HOST = `www.${CANONICAL_HOST}`

function getLocaleFromPathname(pathname: string): string {
  for (const locale of ["en", "de", "fr"]) {
    if (pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)) {
      return locale
    }
  }
  return "it"
}

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

  const locale = getLocaleFromPathname(request.nextUrl.pathname)
  const requestHeaders = new Headers(request.headers)
  requestHeaders.set("x-next-intl-locale", locale)
  return NextResponse.next({ request: { headers: requestHeaders } })
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)",
  ],
}
