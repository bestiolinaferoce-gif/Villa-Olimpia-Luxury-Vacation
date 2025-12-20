'use client'

import { useI18n } from '@/components/i18n-provider'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Apartment } from '@/data/apartments'

interface ApartmentDetailContentProps {
  apartment: Apartment
  content: any
}

export function ApartmentDetailContent({ apartment, content }: ApartmentDetailContentProps) {
  const { t } = useI18n()

  return (
    <>
      {/* Short Description */}
      {content && (
        <Card>
          <CardHeader>
            <CardTitle>{t.apartments.descriptionLabel}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed text-base mb-6">
              {content.shortDescription}
            </p>
          </CardContent>
        </Card>
      )}

      {/* Full Premium Description */}
      {content && (
        <Card>
          <CardHeader>
            <CardTitle>{t.apartments.fullDescription}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="prose prose-lg max-w-none">
              <div className="text-muted-foreground leading-relaxed whitespace-pre-line">
                {content.fullPremiumDescription}
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Feature Bullets */}
      {content && content.featureBullets.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>{t.apartments.features}</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {content.featureBullets.map((feature: string, index: number) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}

      {/* Perfect For */}
      {content && content.perfectFor.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>{t.apartments.perfectFor}</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {content.perfectFor.map((item: string, index: number) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}

      {/* SEO Paragraph */}
      {content && (
        <Card className="bg-gradient-to-br from-blue-50 to-primary/5 border-primary/20">
          <CardHeader>
            <CardTitle>{t.apartments.bookingInfo}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              {content.seoParagraph}
            </p>
          </CardContent>
        </Card>
      )}

      {/* Technical Summary */}
      {content && (
        <Card>
          <CardHeader>
            <CardTitle>{t.apartments.technicalData}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="font-semibold text-foreground mb-1">{t.apartments.guests}</p>
                <p className="text-muted-foreground">{content.technicalSummary.capacity}</p>
              </div>
              <div>
                <p className="font-semibold text-foreground mb-1">{t.apartments.bedrooms}</p>
                <p className="text-muted-foreground">{content.technicalSummary.rooms}</p>
              </div>
              <div>
                <p className="font-semibold text-foreground mb-1">{t.apartments.bathrooms}</p>
                <p className="text-muted-foreground">{content.technicalSummary.bathrooms}</p>
              </div>
              <div>
                <p className="font-semibold text-foreground mb-1">Area Esterna</p>
                <p className="text-muted-foreground">{content.technicalSummary.outdoorArea}</p>
              </div>
              <div>
                <p className="font-semibold text-foreground mb-1">{t.apartments.floor}</p>
                <p className="text-muted-foreground">{content.technicalSummary.floor}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  )
}







