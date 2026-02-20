export interface StructuredDataProps {
  type: 'Organization' | 'LocalBusiness' | 'Service' | 'WebPage'
  data: any
}

export function StructuredData({ type, data }: StructuredDataProps) {
  let structuredData = {}

  switch (type) {
    case 'Organization':
      structuredData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Design Reverse",
        "description": "Agência de marketing digital especializada em Londrina e região",
        "url": "https://designreverse.com.br",
        "logo": "https://designreverse.com.br/design-reverse-logo.PNG",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Londrina",
          "addressRegion": "PR",
          "addressCountry": "BR"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+55-43-98812-5184",
          "contactType": "customer service",
          "availableLanguage": "Portuguese"
        },
        "sameAs": [
          "https://instagram.com/designreverse",
          "https://facebook.com/designreverse"
        ],
        "foundingDate": "2019",
        "areaServed": {
          "@type": "GeoCircle",
          "geoMidpoint": {
            "@type": "GeoCoordinates",
            "latitude": -23.3045,
            "longitude": -51.1696
          },
          "geoRadius": "100000"
        },
        ...data
      }
      break

    case 'LocalBusiness':
      structuredData = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Design Reverse",
        "image": "https://designreverse.com.br/design-reverse-logo.PNG",
        "description": "Agência de marketing digital em Londrina especializada em criação de sites, Google Ads, drone marketing e gerenciamento de redes sociais",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Londrina",
          "addressRegion": "Paraná",
          "addressCountry": "BR"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": -23.3045,
          "longitude": -51.1696
        },
        "url": "https://designreverse.com.br",
        "telephone": "+55-43-98812-5184",
        "priceRange": "$$",
        "openingHours": "Mo-Fr 08:00-18:00",
        "serviceArea": {
          "@type": "GeoCircle",
          "geoMidpoint": {
            "@type": "GeoCoordinates",
            "latitude": -23.3045,
            "longitude": -51.1696
          },
          "geoRadius": "100000"
        },
        ...data
      }
      break

    case 'Service':
      structuredData = {
        "@context": "https://schema.org",
        "@type": "Service",
        "provider": {
          "@type": "Organization",
          "name": "Design Reverse"
        },
        "areaServed": {
          "@type": "City",
          "name": "Londrina",
          "containedInPlace": {
            "@type": "State",
            "name": "Paraná"
          }
        },
        ...data
      }
      break

    case 'WebPage':
      structuredData = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "publisher": {
          "@type": "Organization",
          "name": "Design Reverse"
        },
        ...data
      }
      break
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
