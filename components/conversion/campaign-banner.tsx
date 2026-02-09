"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { getActiveCampaigns } from "@/data/content-automation"
import { Sparkles } from "lucide-react"

export function CampaignBanner() {
  const [campaign] = getActiveCampaigns()

  if (!campaign) return null

  return (
    <section className="bg-gradient-to-r from-amber-50 via-white to-sky-50 border-y border-amber-100">
      <div className="container mx-auto px-4 py-3">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between"
        >
          <div className="flex items-start gap-2">
            <span className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-amber-100 text-amber-700">
              <Sparkles className="h-4 w-4" />
            </span>
            <div>
              <p className="text-sm font-semibold text-slate-900">{campaign.title}</p>
              {campaign.subtitle && (
                <p className="text-xs text-slate-600">{campaign.subtitle}</p>
              )}
            </div>
          </div>

          {campaign.ctaLabel && campaign.ctaHref && (
            <Link
              href={campaign.ctaHref}
              className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-xs font-semibold text-white shadow hover:shadow-md transition"
            >
              {campaign.ctaLabel}
            </Link>
          )}
        </motion.div>
      </div>
    </section>
  )
}
