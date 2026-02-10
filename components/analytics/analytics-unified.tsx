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

const GA_MEASUREMENT_ID =
  typeof process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID !== "undefined" &&
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID !== "" &&
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID !== "G-XXXXXXXXXX"
    ? process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
    : "G-NW2FHPE98G"

export function AnalyticsUnified() {
  return (
    <>
      {/* 1. Google Tag Manager - caricato per primo */}
      <Script
        id="gtm-unified"
        strategy="beforeInteractive"
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

      {/* 2. Google Analytics 4 - gtag.js + config con consenso attivo di default */}
      <Script
        id="ga4-loader-unified"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="beforeInteractive"
      />
      <Script
        id="ga4-config-unified"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = gtag;
gtag('js', new Date());
gtag('consent', 'default', {
  'ad_storage': 'denied',
  'analytics_storage': 'granted',
  'functionality_storage': 'granted',
  'personalization_storage': 'denied',
  'security_storage': 'granted'
});
gtag('config', '${GA_MEASUREMENT_ID}', {
  send_page_view: true,
  anonymize_ip: true
});
          `.trim(),
        }}
      />
    </>
  )
}
