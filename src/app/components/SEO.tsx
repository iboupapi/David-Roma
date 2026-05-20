/**
 * SEO JSON-LD — Données structurées globales
 * À placer dans Layout.tsx
 */

export function JsonLd() {
  const baseUrl = 'https://david-roma.vercel.app';

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      // ==============================
      // Boutique principale
      // ==============================
      {
        '@type': 'ClothingStore',
        '@id': `${baseUrl}/#store`,

        name: 'David Roma',
        alternateName: 'David Roma Dakar',

        url: baseUrl,
        image: `${baseUrl}/images/og-cover.jpg`,
        logo: `${baseUrl}/logo.png`,

        telephone: '+221785251438',
        email: 'davidmodou1@me.com',

        description:
          'Maison de mode masculine italienne à Dakar. Costumes, blazers, chemises, chaussures et accessoires 100% originaux fabriqués en Italie.',

        slogan: "Made in Italy · Prix imbattables",

        priceRange: '$$',

        currenciesAccepted: 'XOF',

        paymentAccepted: [
          'Cash',
          'Wave',
          'Orange Money',
          'Mobile Payment',
        ],

        address: {
          '@type': 'PostalAddress',
          streetAddress: 'SICAP Liberté 1, à côté BRT Liberté 1',
          addressLocality: 'Dakar',
          addressRegion: 'Dakar',
          postalCode: '11500',
          addressCountry: 'SN',
        },

        geo: {
          '@type': 'GeoCoordinates',
          latitude: 14.710740785788756,
          longitude: -17.465325125761545,
        },

        hasMap:
          'https://www.google.com/maps/place/?q=place_id:ChIJxSsXziv-Fh8RvOBeOABLdXc',

        areaServed: [
          {
            "@type": "City",
            "name": "Dakar"
          },
          {
            "@type": "Country",
            "name": "Senegal"
          },
          {
            "@type": "Place",
            "name": "West Africa"
          },
          {
            "@type": "Country",
            "name": "Italy"
          }
        ],

        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: [
              'Monday',
              'Tuesday',
              'Wednesday',
              'Thursday',
              'Friday',
              'Saturday',
            ],
            opens: '10:00',
            closes: '21:00',
          },
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: 'Sunday',
            opens: '15:00',
            closes: '20:00',
          },
        ],

        sameAs: [
          'https://www.facebook.com/profile.php?id=100063503812345',
        ],

        founder: {
          '@type': 'Person',
          name: 'David Roma',
          jobTitle: 'Fondateur & Expert Mode Italienne',
        },

        keywords: [
          'mode masculine Dakar',
          'costumes italiens Dakar',
          'blazers italiens Sénégal',
          'chaussures italiennes Dakar',
          'made in Italy Sénégal',
        ],

        knowsAbout: [
          'Mode masculine italienne',
          'Costumes italiens',
          'Blazers italiens',
          'Chaussures italiennes',
          'Style masculin',
          'Made in Italy',
        ],

        // Conservation des URL d'origine sans "s" (/collection/)
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Collections David Roma',

          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'CollectionPage',
                name: 'Costumes italiens',
                url: `${baseUrl}/collection/costumes`,
              },
            },

            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'CollectionPage',
                name: 'Blazers italiens',
                url: `${baseUrl}/collection/blazers`,
              },
            },

            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'CollectionPage',
                name: 'Chemises italiennes',
                url: `${baseUrl}/collection/chemises`,
              },
            },

            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'CollectionPage',
                name: 'Pantalons italiens',
                url: `${baseUrl}/collection/pantalons`,
              },
            },

            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'CollectionPage',
                name: 'Chaussures italiennes',
                url: `${baseUrl}/collection/chaussures`,
              },
            },

            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'CollectionPage',
                name: 'Ceintures italiennes',
                url: `${baseUrl}/collection/ceintures`,
              },
            },

            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'CollectionPage',
                name: 'Cravates italiennes',
                url: `${baseUrl}/collection/cravates`,
              },
            },

            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'CollectionPage',
                name: 'Polos italiens',
                url: `${baseUrl}/collection/polos`,
              },
            },

            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'CollectionPage',
                name: 'Chaussettes italiennes',
                url: `${baseUrl}/collection/chaussettes`,
              },
            },

            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'CollectionPage',
                name: 'T-shirts premium',
                url: `${baseUrl}/collection/tshirts`,
              },
            },
          ],
        },
      },

      // ==============================
      // Site Web
      // ==============================
      {
        '@type': 'WebSite',

        '@id': `${baseUrl}/#website`,

        url: baseUrl,

        name: 'David Roma',

        description:
          "Mode masculine italienne à Dakar — originaux moins chers qu'en Italie",

        publisher: {
          '@id': `${baseUrl}/#store`,
        },

        inLanguage: 'fr-SN',
      },

      // ==============================
      // Organisation
      // ==============================
      {
        '@type': 'Organization',

        '@id': `${baseUrl}/#organization`,

        name: 'David Roma',

        url: baseUrl,

        logo: {
          '@type': 'ImageObject',
          url: `${baseUrl}/logo.png`,
        },

        sameAs: [
          'https://www.facebook.com/profile.php?id=100063503812345',
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}