import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

function getLocaleFromPathname(pathname: string): string {
  for (const locale of ["en", "de", "fr", "nl", "no", "sv"]) {
    if (pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)) {
      return locale
    }
  }
  return "it"
}

export function proxy(request: NextRequest) {
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
