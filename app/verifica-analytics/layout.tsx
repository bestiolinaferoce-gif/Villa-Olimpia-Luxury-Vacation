import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Verifica Analytics - Villa Olimpia",
  robots: { index: false, follow: false },
}

export default function VerificaAnalyticsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
