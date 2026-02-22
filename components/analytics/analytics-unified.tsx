/**
 * Sistema Analytics unificato - funziona sempre.
 * Script iniettati nel body, caricamento immediato, consenso analytics attivo di default.
 * ID di fallback così funzionano anche se le env non sono disponibili a build time.
 */

import Script from "next/script"

// ID di fallback (quelli che hai configurato su Vercel)
const GTM_ID =
  typeof process.env.NEXT_PUBLIC_GTM_ID !== "undefined" && process.env.NEXT_PUBLIC_GTM_ID !== ""
    ? process.env.NEXT_PUBLIC_GTM_ID
    : "GTM-K5NQGHBD"

export function AnalyticsUnified() {
  return (
    <>
      {/* 1. Google Tag Manager - caricato per primo */}
      <Script
        id="gtm-unified"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');
          `.trim(),
        }}
      />
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        />
      </noscript>
    </>
  )
}
