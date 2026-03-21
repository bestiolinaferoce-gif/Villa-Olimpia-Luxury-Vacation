"use client"

import dynamic from "next/dynamic"

const SeasonalStickyBar = dynamic(
  () => import("@/components/ui/SeasonalStickyBar").then((m) => ({ default: m.SeasonalStickyBar })),
  { ssr: false, loading: () => null }
)
const ExitIntentModal = dynamic(
  () => import("@/components/ui/ExitIntentModal").then((m) => ({ default: m.ExitIntentModal })),
  { ssr: false, loading: () => null }
)

export function SeasonalRootOverlays() {
  return (
    <>
      <SeasonalStickyBar />
      <ExitIntentModal />
    </>
  )
}
