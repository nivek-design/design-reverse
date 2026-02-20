interface ServiceSchemaProps {
  serviceName: string;
  description: string;
  price?: string;
  category: string;
  provider: string;
  areaServed: string;
  url: string;
}

export function ServiceSchema({
  serviceName,
  description,
  price,
  category,
  provider,
  areaServed,
  url,
}: ServiceSchemaProps) {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceName,
    "description": description,
    "provider": {
      "@type": "Organization",
      "name": provider,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Londrina",
        "addressRegion": "Paraná",
        "addressCountry": "BR"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+55-43-98812-5184",
        "contactType": "customer service"
      }
    },
    "serviceType": category,
    "areaServed": {
      "@type": "City",
      "name": areaServed
    },
    "url": url,
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Serviços de Marketing Digital",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": serviceName
          },
          "price": price || "A partir de R$ 500",
          "priceCurrency": "BRL"
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "50"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
    />
  );
}
