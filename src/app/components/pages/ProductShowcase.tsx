import { useParams, Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { AnimatedSection } from '../AnimatedSection';

import costumeImg from '../../../imports/Costume2.jpeg';
import costume3Img from '../../../imports/Costume3.jpeg';
import chemiseImg from '../../../imports/Chemise.jpeg';
import chaussureImg from '../../../imports/Chaussure7.jpeg';
import chaussure9Img from '../../../imports/Chaussure9.jpeg';
import cravateImg from '../../../imports/Cravate.jpg';
import poloImg from '../../../imports/Polo2.jpeg';
import tshirtImg from '../../../imports/T-shirt1.jpeg';
import tshirt2Img from '../../../imports/T-shirt-1.jpeg';
import pantalonImg from '../../../imports/pentalon.jpeg';
import pantalon5Img from '../../../imports/pentalon5.jpeg';
import pantalon7Img from '../../../imports/pentalon7.jpeg';
import pantalon8Img from '../../../imports/pentalon8.jpeg';
import ceintureImg from '../../../imports/Ceinture.jpeg';
import ceinture1Img from '../../../imports/Ceinture1.jpeg';
import ceinture2Img from '../../../imports/Ceinture2.jpeg';
import ceinture3Img from '../../../imports/Ceinture3.jpeg';
import ceinture4Img from '../../../imports/Ceinture4.jpeg';
import ceinture5Img from '../../../imports/Ceinture5.jpeg';
import chaussetteImg from '../../../imports/Chaussette.jpeg';
import chaussette1Img from '../../../imports/Chaussette1.jpeg';
import blazerImg from '../../../imports/Blazer.jpeg';
import blazer1Img from '../../../imports/Blazer1.jpeg';
import blazer2Img from '../../../imports/Blazer2.jpeg';
import blazer3Img from '../../../imports/Blazer3.jpeg';

type ProductStatic = {
  images: string[];
  fallback: {
    title: string;
    description: string;
    fabric: string;
    origin: string;
    advice: string;
  };
};

const staticProductData: Record<string, ProductStatic> = {
  costumes: {
    images: [costumeImg, costume3Img],
    fallback: {
      title: 'Costumes',
      description: "Nos costumes haut de gamme sont confectionnés avec des tissus d'exception pour offrir une coupe élégante, moderne et confortable.",
      fabric: 'Laine Super 150s · Cachemire blend',
      origin: 'Confection artisanale premium',
      advice: 'Parfait pour les cérémonies, événements professionnels et grandes occasions. Associez-le à une chemise blanche et une cravate sobre pour une silhouette élégante.',
    },
  },
  blazers: {
    images: [blazer3Img, blazerImg, blazer1Img, blazer2Img],
    fallback: {
      title: 'Blazers',
      description: "La pièce essentielle du vestiaire masculin. Nos blazers premium apportent immédiatement élégance et caractère à votre tenue.",
      fabric: 'Laine premium · Cachemire blend · Mélanges nobles',
      origin: 'Sélection haut de gamme',
      advice: 'Associez un blazer marine à un pantalon beige ou un jean brut pour un look smart casual moderne.',
    },
  },
  chemises: {
    images: [chemiseImg],
    fallback: {
      title: 'Chemises',
      description: 'Chemises premium conçues dans des matières nobles pour allier confort, élégance et finesse au quotidien.',
      fabric: 'Coton premium · Lin haut de gamme',
      origin: 'Savoir-faire textile européen',
      advice: 'Idéales pour le bureau comme pour les occasions élégantes. Gardez toujours un col impeccable pour un rendu raffiné.',
    },
  },
  cravates: {
    images: [cravateImg],
    fallback: {
      title: 'Cravates',
      description: 'Cravates raffinées confectionnées avec des matières premium pour sublimer vos costumes et tenues formelles.',
      fabric: 'Soie premium',
      origin: 'Finition artisanale',
      advice: 'Le nœud doit légèrement toucher le col de la chemise pour un équilibre parfait.',
    },
  },
  chaussures: {
    images: [chaussureImg, chaussure9Img],
    fallback: {
      title: 'Chaussures',
      description: 'Chaussures en cuir véritable réalisées avec une finition élégante et durable.',
      fabric: 'Cuir véritable premium',
      origin: 'Fabrication artisanale',
      advice: 'Accordez toujours la couleur des chaussures avec celle de votre ceinture pour une tenue harmonieuse.',
    },
  },
  polos: {
    images: [poloImg],
    fallback: {
      title: 'Polos',
      description: 'Polos premium pour un style casual élégant et moderne.',
      fabric: 'Coton piqué premium',
      origin: 'Confection de qualité',
      advice: 'Parfaits avec un pantalon kaki ou un jean sobre pour un look chic décontracté.',
    },
  },
  tshirts: {
    images: [tshirtImg, tshirt2Img],
    fallback: {
      title: 'T-shirts',
      description: 'T-shirts premium offrant confort, qualité et élégance minimaliste.',
      fabric: 'Coton peigné premium',
      origin: 'Sélection haut de gamme',
      advice: 'Portez-les seuls ou sous une veste pour un style smart casual moderne.',
    },
  },
  pantalons: {
    images: [pantalonImg, pantalon5Img, pantalon7Img],
    fallback: {
      title: 'Pantalons',
      description: 'Pantalons élégants confectionnés dans des tissus résistants et confortables.',
      fabric: 'Laine premium · Coton haut de gamme · Mélanges techniques',
      origin: 'Confection premium',
      advice: 'Associez-les à des chaussures et une ceinture assorties pour une tenue parfaitement équilibrée.',
    },
  },
  'pantalons-kaki': {
    images: [pantalon8Img],
    fallback: {
      title: 'Pantalons Kaki & Colorés',
      description: 'Des pantalons polyvalents et modernes parfaits pour un style business casual ou décontracté élégant.',
      fabric: 'Coton léger premium · Mélanges techniques',
      origin: 'Sélection premium',
      advice: 'Associez-les avec une veste marine ou un polo sobre pour un rendu chic et moderne.',
    },
  },
  ceintures: {
    images: [ceinture1Img, ceinture2Img, ceinture3Img, ceinture4Img, ceinture5Img],
    fallback: {
      title: 'Ceintures',
      description: 'Ceintures en cuir véritable avec finitions élégantes et textures raffinées.',
      fabric: 'Cuir pleine fleur · Cuir box-calf',
      origin: 'Fabrication artisanale',
      advice: 'La ceinture doit toujours être assortie à vos chaussures pour une tenue élégante.',
    },
  },
  chaussettes: {
    images: [chaussetteImg, chaussette1Img],
    fallback: {
      title: 'Chaussettes',
      description: 'Chaussettes premium confortables et élégantes adaptées aux tenues formelles et casual.',
      fabric: 'Coton mercérisé · Laine mérinos',
      origin: 'Qualité textile premium',
      advice: 'Pour une tenue formelle, choisissez des chaussettes assorties à votre pantalon.',
    },
  },
};

export function ProductShowcase() {
  const { category } = useParams();
  const { t } = useTranslation();

  const currentCategory = category || 'costumes';
  const staticData = staticProductData[currentCategory] || staticProductData.costumes;

  const product = {
    images: staticData.images,
    title: t(`showcase.products.${currentCategory}.title`, staticData.fallback.title),
    description: t(`showcase.products.${currentCategory}.description`, staticData.fallback.description),
    fabric: t(`showcase.products.${currentCategory}.fabric`, staticData.fallback.fabric),
    origin: t(`showcase.products.${currentCategory}.origin`, staticData.fallback.origin),
    advice: t(`showcase.products.${currentCategory}.advice`, staticData.fallback.advice),
  };

  // Schéma structuré CollectionPage pour nettoyer le SEO de Google Search Console
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": `${product.title} Premium — David Roma Dakar`,
    "description": product.description,
    "url": `https://www.david-roma.com/collections/${currentCategory}`,
    "mainEntity": {
      "@type": "ItemList",
      "name": `Sélection de ${product.title}`,
      "numberOfItems": product.images.length,
      "itemListElement": product.images.map((img, idx) => ({
        "@type": "ListItem",
        "position": idx + 1,
        "image": img,
        "name": `${product.title} Option ${idx + 1}`
      }))
    }
  };

  return (
    <div>
      <Helmet>
        <title>{t('showcase.seo.title', '{{title}} — David Roma | Mode premium à Dakar', { title: product.title })}</title>
        <meta name="description" content={t('showcase.seo.description', '{{title}} premium disponibles chez David Roma à Dakar. {{desc}}', { title: product.title, desc: product.description })} />
        <meta property="og:title" content={t('showcase.seo.ogTitle', '{{title}} — David Roma Dakar', { title: product.title })} />
        <meta property="og:description" content={product.description} />
        <link rel="canonical" href={`https://www.david-roma.com/collections/${currentCategory}`} />
        
        {/* Balisage JSON-LD sécurisé sans attributs marchands requis */}
        <script type="application/ld+json">
          {JSON.stringify(collectionSchema)}
        </script>
      </Helmet>

      {/* Back Button */}
      <div className="bg-black py-6 px-4 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <Link
            to="/collections"
            className="inline-flex items-center gap-2 text-[#d4af37] hover:text-white transition-colors duration-300 group"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            <span>{t('showcase.back', 'Retour aux collections')}</span>
          </Link>
        </div>
      </div>

      {/* Main Showcase Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

              {/* Images Container */}
              <div className="space-y-6">
                {product.images.map((image, index) => (
                  <div key={image} className="overflow-hidden">
                    <motion.img
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                      src={image}
                      alt={`${product.title} ${index + 1} — David Roma Dakar`}
                      loading="lazy"
                      decoding="async"
                      className={`w-full ${
                        currentCategory === 'ceintures'
                          ? 'h-[420px] object-contain bg-white'
                          : 'h-[700px] object-cover'
                      }`}
                    />
                  </div>
                ))}
              </div>

              {/* Details Content Panel */}
              <div className="space-y-10 lg:sticky lg:top-32 lg:self-start">
                <div>
                  <h1
                    className="mb-6 text-[#0a0a0a]"
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                      letterSpacing: '-0.02em',
                    }}
                  >
                    {product.title}
                  </h1>

                  <div className="w-24 h-[3px] bg-[#d4af37] mb-8"></div>

                  <p className="text-gray-700 text-xl leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Value Proposition Badge */}
                <div className="bg-gradient-to-r from-[#d4af37]/10 to-transparent border-l-4 border-[#d4af37] p-6">
                  <p
                    className="text-[#0a0a0a] font-medium mb-1"
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.1rem',
                    }}
                  >
                    {t('showcase.proposition.title', '100% Original · Sélection premium')}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {t('showcase.proposition.desc', 'Pièces sélectionnées avec exigence auprès d’ateliers haut de gamme')}
                  </p>
                </div>

                {/* Technical Product Details */}
                <div className="border-t border-gray-200 pt-8 space-y-6">
                  <div>
                    <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-3" style={{ letterSpacing: '0.15em' }}>
                      {t('showcase.details.fabric', 'Matière')}
                    </h3>
                    <p className="text-gray-800 text-lg">{product.fabric}</p>
                  </div>

                  <div>
                    <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-3" style={{ letterSpacing: '0.15em' }}>
                      {t('showcase.details.origin', 'Origine')}
                    </h3>
                    <p className="text-gray-800 text-lg">{product.origin}</p>
                  </div>

                  <div>
                    <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-3" style={{ letterSpacing: '0.15em' }}>
                      {t('showcase.details.advice', 'Conseil de style')}
                    </h3>
                    <p className="text-gray-800 text-lg leading-relaxed">{product.advice}</p>
                  </div>
                </div>

                {/* Actions / CTA */}
                <div className="border-t border-gray-200 pt-8 space-y-4">
                  <Link
                    to="/contact"
                    className="block w-full text-center bg-[#0f2557] text-white px-8 py-5 hover:bg-[#0a1a3a] transition-all duration-300 hover:scale-[1.02]"
                    style={{ letterSpacing: '0.05em' }}
                  >
                    {t('nav.contact', 'Nous contacter')}
                  </Link>

                  <Link
                    to="/contact"
                    className="block w-full text-center border-2 border-[#0f2557] text-[#0f2557] px-8 py-5 hover:bg-[#0f2557] hover:text-white transition-all duration-300 hover:scale-[1.02]"
                    style={{ letterSpacing: '0.05em' }}
                  >
                    {t('home.hero.btnAppointment', 'Prendre rendez-vous')}
                  </Link>
                </div>

                {/* Trust & Guarantees section */}
                <div className="bg-gradient-to-br from-[#0f2557] to-black text-white p-8 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#d4af37] rounded-full blur-[80px] opacity-30"></div>

                  <div className="relative z-10">
                    <h3
                      className="mb-4 text-[#d4af37]"
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: '1.5rem',
                      }}
                    >
                      {t('showcase.trust.title', 'Élégance · Qualité · Authenticité')}
                    </h3>

                    <ul className="space-y-3 text-gray-200">
                      {[
                        t('home.engagement.points.authenticity.desc', 'Pièces 100% originales'),
                        t('showcase.trust.point2', 'Sélection premium haut de gamme'),
                        t('showcase.trust.point3', 'Excellent rapport qualité-prix'),
                        t('showcase.trust.point4', 'Conseils basés sur plus de 15 ans d’expérience'),
                      ].map((point, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-[#d4af37] flex-shrink-0 mt-0.5" />
                          <span className="text-sm leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}