// Middleware disabilitato - internazionalizzazione non ancora attiva
// Per riattivare, ripristinare la configurazione next-intl

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  return NextResponse.next();
}

export const config = {
  // Non intercettare nessuna route
  matcher: []
};
