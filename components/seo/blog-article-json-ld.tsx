import { BASE_URL } from "@/lib/metadata"

type Props = {
  title: string
  description: string
  path: string
  /** ISO 8601 date */
  datePublished: string
}

/**
 * JSON-LD BlogPosting per articoli del blog (rich results friendly).
 */
export function BlogArticleJsonLd({ title, description, path, datePublished }: Props) {
  const url = `${BASE_URL}${path}`
  const data = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    datePublished,
    dateModified: datePublished,
    author: {
      "@type": "Organization",
      name: "Villa Olimpia",
      url: BASE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "Villa Olimpia",
      url: BASE_URL,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    url,
    isPartOf: {
      "@type": "Blog",
      name: "Blog Villa Olimpia",
      url: `${BASE_URL}/blog`,
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
