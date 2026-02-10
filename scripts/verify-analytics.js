#!/usr/bin/env node
/**
 * Verifica configurazione Google Analytics e GTM.
 * Uso: node scripts/verify-analytics.js
 *      SITE_URL=https://villaolimpiacaporizzuto.com node scripts/verify-analytics.js  (verifica anche HTML deployato)
 */
const fs = require("fs");
const path = require("path");
const https = require("https");
const http = require("http");

const ROOT = path.resolve(__dirname, "..");

function loadEnvLocal() {
  const envPath = path.join(ROOT, ".env.local");
  try {
    if (fs.existsSync(envPath)) {
      const content = fs.readFileSync(envPath, "utf8");
      const out = {};
      content.split("\n").forEach((line) => {
        const m = line.match(/^NEXT_PUBLIC_(GA_MEASUREMENT_ID|GTM_ID)=(.+)$/);
        if (m) out["NEXT_PUBLIC_" + m[1]] = m[2].replace(/^["']|["']$/g, "").trim();
      });
      return out;
    }
  } catch (_) {}
  return {};
}

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    const lib = url.startsWith("https") ? https : http;
    lib
      .get(url, (res) => {
        let data = "";
        res.on("data", (chunk) => (data += chunk));
        res.on("end", () => resolve({ statusCode: res.statusCode, body: data }));
      })
      .on("error", reject);
  });
}

async function main() {
  const envLocal = loadEnvLocal();
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || envLocal.NEXT_PUBLIC_GA_MEASUREMENT_ID || "";
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID || envLocal.NEXT_PUBLIC_GTM_ID || "GTM-K5NQGHBD";
  const siteUrl = process.env.SITE_URL || "";

  console.log("Verifica Google Analytics / GTM\n");
  console.log("  NEXT_PUBLIC_GA_MEASUREMENT_ID:", gaId || "(non impostato)");
  console.log("  NEXT_PUBLIC_GTM_ID:", gtmId || "(non impostato)");
  if (siteUrl) console.log("  SITE_URL (verifica HTML):", siteUrl);
  console.log("");

  let ok = true;

  if (gaId && gaId !== "G-XXXXXXXXXX") {
    console.log("  [OK] Google Analytics: ID configurato");
  } else {
    console.log("  [!!] Google Analytics: imposta NEXT_PUBLIC_GA_MEASUREMENT_ID in .env.local o su Vercel");
    ok = false;
  }

  if (gtmId && gtmId !== "GTM-XXXXXXX") {
    console.log("  [OK] Google Tag Manager: ID configurato");
  } else {
    console.log("  [!!] Google Tag Manager: imposta NEXT_PUBLIC_GTM_ID se usi GTM");
  }

  if (siteUrl) {
    try {
      const { statusCode, body } = await fetchUrl(siteUrl);
      if (statusCode !== 200) {
        console.log("\n  [!!] Sito non raggiungibile:", statusCode);
      } else {
        const hasGA = body.includes(gaId) || body.includes("googletagmanager.com/gtag/js");
        const hasGTM = body.includes(gtmId) || body.includes("googletagmanager.com/gtm.js");
        const hasDataLayer = body.includes("dataLayer");
        if (hasGA) console.log("  [OK] In HTML deployato: script GA4 presente");
        else console.log("  [--] In HTML: script GA4 non trovato (può essere iniettato lato client)");
        if (hasGTM) console.log("  [OK] In HTML deployato: GTM presente");
        else console.log("  [--] In HTML: GTM non trovato");
        if (hasDataLayer) console.log("  [OK] In HTML: dataLayer presente");
      }
    } catch (e) {
      console.log("\n  [!!] Errore fetch SITE_URL:", e.message);
    }
  } else {
    console.log("\n  Suggerimento: imposta SITE_URL per verificare il sito deployato.");
    console.log("  Es: SITE_URL=https://villaolimpiacaporizzuto.com node scripts/verify-analytics.js");
  }

  console.log("");
  if (ok) {
    console.log("Riepilogo: configurazione analytics pronta. Dopo il deploy controlla Real-time in Google Analytics.");
  } else {
    console.log("Riepilogo: completa le variabili d'ambiente e riesegui la verifica.");
    process.exitCode = 1;
  }
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
