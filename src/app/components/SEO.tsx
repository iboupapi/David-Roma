/**
 * Composant SEO — Données structurées JSON-LD
 * À placer dans Layout.tsx pour qu'il soit présent sur toutes les pages
 */

export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      // ── Boutique principale ──
      {
        "@type": "ClothingStore",
        "@id": "https://david-roma.vercel.app/#store",
        "name": "David Roma",
        "alternateName": "David Roma Dakar",
        "description": "Maison de mode masculine italienne à Dakar. Costumes, blazers, chemises, chaussures et accessoires 100% originaux fabriqués en Italie, à des prix inférieurs à ceux pratiqués en Italie.",
        "url": "https://david-roma.vercel.app",
        "telephone": "+221785251438",
        "email": "davidmodou1@me.com",
        "priceRange": "$$",
        "currenciesAccepted": "XOF",
        "paymentAccepted": "Cash, Mobile Payment",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "SICAP Liberté 1, à côté BRT Liberté 1",
          "addressLocality": "Dakar",
          "addressCountry": "SN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 14.710740785788756,
          "longitude": -17.465325125761545
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "opens": "10:00",
            "closes": "21:00"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Sunday"],
            "opens": "15:00",
            "closes": "20:00"
          }
        ],
        "hasMap": "https://www.google.com/maps/place/?q=place_id:ChIJxSsXziv-Fh8RvOBeOABLdXc",
        "sameAs": [
          "https://www.facebook.com/profile.php?id=100063503812345"
        ],
        "founder": {
          "@type": "Person",
          "name": "David Roma",
          "jobTitle": "Fondateur & Expert Mode Italienne",
          "knowsAbout": ["Mode masculine italienne", "Haute couture", "Style masculin", "Made in Italy"]
        },
        "knowsAbout": [
          "Costumes italiens",
          "Blazers italiens",
          "Mode masculine Dakar",
          "Made in Italy",
          "Vêtements de luxe Sénégal"
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Collections David Roma",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Costumes italiens", "url": "https://david-roma.vercel.app/collection/costumes" } },
            { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Blazers italiens", "url": "https://david-roma.vercel.app/collection/blazers" } },
            { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Chemises italiennes", "url": "https://david-roma.vercel.app/collection/chemises" } },
            { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Pantalons italiens", "url": "https://david-roma.vercel.app/collection/pantalons" } },
            { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Chaussures italiennes", "url": "https://david-roma.vercel.app/collection/chaussures" } },
            { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Ceintures italiennes", "url": "https://david-roma.vercel.app/collection/ceintures" } },
            { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Cravates en soie", "url": "https://david-roma.vercel.app/collection/cravates" } },
            { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Polos italiens", "url": "https://david-roma.vercel.app/collection/polos" } },
            { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Chaussettes italiennes", "url": "https://david-roma.vercel.app/collection/chaussettes" } },
            { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "T-shirts premium", "url": "https://david-roma.vercel.app/collection/tshirts" } }
          ]
        }
      },

      // ── Site Web ──
      {
        "@type": "WebSite",
        "@id": "https://david-roma.vercel.app/#website",
        "url": "https://david-roma.vercel.app",
        "name": "David Roma",
        "description": "Mode masculine italienne à Dakar — originaux moins chers qu'en Italie",
        "publisher": { "@id": "https://david-roma.vercel.app/#store" },
        "inLanguage": "fr-FR"
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}