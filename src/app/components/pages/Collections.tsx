import { Link } from 'react-router';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { AnimatedSection } from '../AnimatedSection';
import costumeImg from '../../../imports/Costume2.jpeg';
import chemiseImg from '../../../imports/Chemise.jpeg';
import chaussureImg from '../../../imports/Chaussure7.jpeg';
import chaussureSurMesureImg from '../../../imports/chaussureSurMesure.jpeg';
import cravateImg from '../../../imports/Cravate.jpg';
import poloImg from '../../../imports/Polo2.jpeg';
import tshirtImg from '../../../imports/T-shirt1.jpeg';
import pantalonImg from '../../../imports/pentalon.jpeg';
import kakiImg from '../../../imports/pentalon8.jpeg';
import ceintureImg from '../../../imports/Ceinture.jpeg';
import chaussetteImg from '../../../imports/Chaussette.jpeg';
import blazerImg from '../../../imports/Blazer3.jpeg';
import blazer2Img from '../../../imports/Blazer.jpeg';

export function Collections() {
  const { t, i18n } = useTranslation();

  // Définition locale des collections pour mapper les images et slugs avec les traductions de i18n.ts
  const collectionsData = [
    { key: 'costumes', slug: 'costumes', image: costumeImg, fallbackName: 'Costumes', fallbackDesc: "Taillés dans des tissus d'exception" },
    { key: 'blazers', slug: 'blazers', image: blazerImg, fallbackName: 'Blazers', fallbackDesc: 'La pièce maîtresse du style masculin' },
    { key: 'chemises', slug: 'chemises', image: chemiseImg, fallbackName: 'Chemises', fallbackDesc: 'Coton premium & lin italien' },
    { key: 'pantalons', slug: 'pantalons', image: pantalonImg, fallbackName: 'Pantalons', fallbackDesc: 'Coupe italienne, tissus nobles' },
    { key: 'pantalons-kaki', slug: 'pantalons-kaki', image: kakiImg, fallbackName: 'Pantalons Kaki', fallbackDesc: 'Polyvalents, du bureau au week-end' },
    { key: 'chaussures', slug: 'chaussures', image: chaussureImg, fallbackName: 'Chaussures', fallbackDesc: 'Cuir véritable, fait main' },
    { key: 'chaussures-sur-mesure', slug: 'chaussures-sur-mesure', image: chaussureSurMesureImg, fallbackName: 'Chaussures Sur Mesure', fallbackDesc: 'Confectionnées à la main sur commande' },
    { key: 'ceintures', slug: 'ceintures', image: ceintureImg, fallbackName: 'Ceintures', fallbackDesc: "Cuir pleine fleur d'Italie" },
    { key: 'cravates', slug: 'cravates', image: cravateImg, fallbackName: 'Cravates', fallbackDesc: 'Soie 100% italienne' },
    { key: 'polos', slug: 'polos', image: poloImg, fallbackName: 'Polos', fallbackDesc: 'Style décontracté raffiné' },
    { key: 'chaussettes', slug: 'chaussettes', image: chaussetteImg, fallbackName: 'Chaussettes', fallbackDesc: 'Le détail qui fait la différence' },
    { key: 'tshirts', slug: 'tshirts', image: tshirtImg, fallbackName: 'T-shirts', fallbackDesc: 'Coton peigné premium' },
  ];

  // Reconstruction dynamique du tableau avec les traductions issues du i18n
  const localizedCollections = collectionsData.map(col => {
    let nameKey = '';
    
    // Cas particulier pour les chaussures sur mesure afin d'éviter le piège du i18n.exists
    if (col.key === 'chaussures-sur-mesure') {
      nameKey = 'collections.prestige.title';
    } else {
      const hasShowcaseTitle = i18n.exists(`showcase.products.${col.key}.title`);
      nameKey = hasShowcaseTitle 
        ? `showcase.products.${col.key}.title`
        : `home.collections.categories.${col.key}`;
    }

    return {
      name: t(nameKey, col.fallbackName),
      slug: col.slug,
      image: col.image,
      description: t(`collections.descriptions.${col.key}`, col.fallbackDesc)
    };
  });

  function CollectionCard({ col, height = 400 }: { col: typeof localizedCollections[0]; height?: number }) {
    return (
      <Link to={`/collection/${col.slug}`} className="group block relative overflow-hidden" style={{ height }}>
        <motion.img
          whileHover={{ scale: 1.07 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          src={col.image}
          alt={`${col.name} — David Roma`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
          <p className="text-[#d4af37] text-xs tracking-widest mb-1 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0 hidden md:block">
            {col.description}
          </p>
          <p className="text-[#d4af37] text-xs tracking-widest mb-1 md:hidden">
            {col.description}
          </p>
          <div className="flex items-end justify-between">
            <h2
              className="text-white"
              style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.2rem, 4vw, 2rem)', letterSpacing: '-0.01em' }}
            >
              {col.name}
            </h2>
            <div className="flex items-center gap-1 text-[#d4af37]">
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <div style={{ background: '#0a0a0a' }}>
      <Helmet>
  <title>{t('collections.seo.title', 'Collections — David Roma | Vêtements & Accessoires italiens à Dakar')}</title>
  <meta name="description" content={t('collections.seo.description', "Blazers, costumes, chemises, pantalons, ceintures, chaussettes et chaussures 100% made in Italy. Moins chers qu'en Italie. Showroom David Roma à Dakar, SICAP Liberté 1.")} />
  <link rel="canonical" href="https://david-roma.vercel.app/collections" />
  
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": t('collections.seo.ogTitle', 'Collections David Roma'),
      "url": "https://david-roma.vercel.app/collections",
      "description": t('collections.seo.ogDesc', 'Collections de vêtements et accessoires italiens premium à Dakar.'),
      "mainEntity": {
        "@type": "ItemList",
        "numberOfItems": localizedCollections.length,
        "itemListElement": localizedCollections.map((col, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": col.name,
          "url": `https://david-roma.vercel.app/collection/${col.slug}`
        }))
      }
    })}
  </script>
</Helmet>

      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden" style={{ height: 'calc(100svh - 0px)', minHeight: 500 }}>
        <motion.img
          initial={{ scale: 1.08 }} animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
          src={blazer2Img}
          alt="Collections David Roma"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/90" />

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#d4af37] text-xs tracking-[0.35em] mb-6 uppercase"
          >
            {t('collections.hero.tag', 'Made in Italy · 100% Originaux')}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            style={{ 
              fontFamily: 'var(--font-serif)', 
              fontSize: 'clamp(3rem, 13vw, 8rem)', // Légère réduction du max-fluid pour les minis mobiles
              letterSpacing: '-0.03em', 
              lineHeight: 0.9 
            }}
            className="text-white mb-8 whitespace-nowrap md:whitespace-normal"
          >
            {t('collections.hero.title', 'Collections')}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }} animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="w-16 h-px bg-[#d4af37] mb-6"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-gray-300 text-base max-w-xs md:max-w-xl leading-relaxed"
          >
            {t('collections.hero.desc', "Pièces d'exception fabriquées en Italie — à des prix inférieurs à ceux pratiqués en Italie")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          >
            <span className="text-gray-500 text-xs tracking-widest">{t('collections.hero.discover', 'DÉCOUVRIR')}</span>
            <motion.div
              animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}
              className="w-px h-10 bg-gradient-to-b from-[#d4af37] to-transparent"
            />
          </motion.div>
        </div>
      </section>

      {/* ===== BANDEAU DÉFILANT ===== */}
      <div className="bg-[#d4af37] py-3 px-4 overflow-hidden">
        <motion.div
          animate={{ x: [0, -600] }}
          transition={{ repeat: Infinity, duration: 18, ease: 'linear' }}
          className="flex gap-12 whitespace-nowrap"
        >
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex gap-12 items-center">
              {[
                t('home.engagement.points.authenticity.title', '100% Originaux'),
                t('home.engagement.points.direct.title', 'Achat direct ateliers'),
                t('about.pricing.intermediary.title', 'Zéro intermédiaire'),
                t('collections.ticker.cheaper', "Moins cher qu'en Italie")
              ].map((txt, j) => (
                <div key={j} className="flex items-center gap-2">
                  <ShieldCheck className="h-3 w-3 text-black flex-shrink-0" />
                  <span className="text-black text-xs tracking-widest uppercase font-medium">{txt}</span>
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>

      {/* ===== GRILLE ÉDITORIALE ===== */}
      <section className="px-3 py-10 md:px-4 md:py-16" style={{ background: '#0a0a0a' }}>
        <div className="max-w-7xl mx-auto">

          <AnimatedSection>
            <div className="flex items-center gap-6 mb-8">
              <div className="flex-1 h-px bg-white/10" />
              <p className="text-gray-500 text-xs tracking-[0.35em] uppercase whitespace-nowrap">
                {t('collections.grid.title', 'Toutes les collections')}
              </p>
              <div className="flex-1 h-px bg-white/10" />
            </div>
          </AnimatedSection>

          {/* Rangée 1 — Costumes + Blazers */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-3">
            <div className="lg:col-span-2">
              <AnimatedSection delay={0}>
                <CollectionCard col={localizedCollections[0]} height={500} />
              </AnimatedSection>
            </div>
            <div>
              <AnimatedSection delay={0.1}>
                <CollectionCard col={localizedCollections[1]} height={500} />
              </AnimatedSection>
            </div>
          </div>

          {/* Rangée 2 — Chemises + Pantalons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
            <AnimatedSection delay={0}>
              <CollectionCard col={localizedCollections[2]} height={380} />
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <CollectionCard col={localizedCollections[3]} height={380} />
            </AnimatedSection>
          </div>

          {/* Rangée 3 — Pantalons Kaki + Chaussures */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
            <AnimatedSection delay={0}>
              <CollectionCard col={localizedCollections[4]} height={420} />
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <CollectionCard col={localizedCollections[5]} height={420} />
            </AnimatedSection>
          </div>

          {/* BLOCK PRESTIGE DÉDIÉ : CHAUSSURES SUR MESURE */}
          <div className="mb-3">
            <AnimatedSection delay={0.1}>
              <Link to="/contact" className="group block relative overflow-hidden border border-[#d4af37]/20 bg-gradient-to-r from-black via-[#111] to-[#0a0a0a]" style={{ minHeight: 350 }}>
                <div className="grid grid-cols-1 lg:grid-cols-5 h-full items-center">
                  
                  {/* Côté texte */}
                  <div className="p-8 md:p-12 lg:col-span-2 flex flex-col justify-center text-left relative z-10">
                    <div className="inline-flex items-center gap-2 bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#d4af37] px-3 py-1 text-[10px] tracking-[0.2em] uppercase font-semibold mb-6 w-fit rounded-full">
                      <Sparkles className="h-3 w-3" /> {t('collections.prestige.badge', 'Service Exclusif sur RDV')}
                    </div>
                    <h2 className="text-white mb-3 font-serif text-3xl md:text-4xl tracking-tight leading-tight">
                      {localizedCollections[6].name}
                    </h2>
                    <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6">
                      {localizedCollections[6].description}. {t('collections.prestige.descExt', "Une expérience de cordonnerie traditionnelle d'excellence, adaptée à la morphologie unique de votre pied.")}
                    </p>
                    <div className="flex items-center gap-2 text-[#d4af37] text-xs tracking-widest uppercase font-medium group-hover:text-white transition-colors duration-300">
                      <span>{t('collections.prestige.btn', 'Lancer la configuration')}</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-2" />
                    </div>
                  </div>

                  {/* Côté Image */}
                  <div className="relative h-64 lg:h-[400px] lg:col-span-3 overflow-hidden w-full">
                    <motion.img
                      whileHover={{ scale: 1.04 }}
                      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                      src={localizedCollections[6].image}
                      alt="Service Chaussures sur mesure David Roma"
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-black via-transparent to-transparent" />
                  </div>

                </div>
              </Link>
            </AnimatedSection>
          </div>

          {/* Encart Citation Éditoriale */}
          <div className="border border-white/5 px-6 py-10 md:px-12 md:py-14 text-center mb-3 max-w-3xl mx-auto bg-white/[0.01]">
            <p className="text-[#d4af37] text-xs tracking-[0.3em] uppercase mb-4">{t('home.engagement.tag', 'NOTRE ENGAGEMENT')}</p>
            <p className="text-white leading-relaxed font-serif text-lg md:text-xl">
              {t('home.config.proprietaire.citation', '"Mon objectif est simple : vous offrir l\'authenticité italienne à un prix juste, sans jamais sacrifier la qualité."')}
            </p>
            <div className="w-10 h-px bg-[#d4af37] mx-auto mt-6" />
          </div>

          {/* Rangée 4 — Ceintures + Cravates */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
            <AnimatedSection delay={0}>
              <CollectionCard col={localizedCollections[7]} height={380} />
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <CollectionCard col={localizedCollections[8]} height={380} />
            </AnimatedSection>
          </div>

          {/* Rangée 5 — Polos + Chaussettes + T-shirts */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <AnimatedSection delay={0}>
              <CollectionCard col={localizedCollections[9]} height={360} />
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <CollectionCard col={localizedCollections[10]} height={360} />
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <CollectionCard col={localizedCollections[11]} height={360} />
            </AnimatedSection>
          </div>

        </div>
      </section>

      {/* ===== CTA ===== */}
      <AnimatedSection>
        <section className="py-20 md:py-32 px-6" style={{ background: '#111' }}>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-[#d4af37] text-xs tracking-[0.4em] uppercase mb-6">{t('home.cta.title2', 'à Dakar')}</p>
            <h2
              className="text-white mb-6"
              style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 6vw, 4rem)', letterSpacing: '-0.02em' }}
            >
              {t('collections.cta.title', 'Une question sur nos collections ?')}
            </h2>
            <p className="text-gray-400 text-lg mb-4 leading-relaxed">
              {t('collections.cta.desc', 'Prenez rendez-vous et bénéficiez des conseils personnalisés de David Roma.')}
            </p>
            <p className="text-[#d4af37] text-base mb-10 italic" style={{ fontFamily: 'var(--font-serif)' }}>
              {t('home.hero.tagline', 'Conseil en style · Originaux italiens · Prix imbattables')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact"
                className="group inline-flex items-center justify-center gap-3 bg-[#d4af37] text-black px-8 py-4 hover:bg-[#c49d2e] transition-all duration-300 hover:scale-105">
                <span style={{ letterSpacing: '0.08em', fontSize: '0.8rem' }}>{t('home.hero.btnAppointment', 'Prendre rendez-vous')}</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/contact"
                className="inline-flex items-center justify-center gap-3 border border-white/20 text-white px-8 py-4 hover:border-white/50 transition-all duration-300">
                <span style={{ letterSpacing: '0.08em', fontSize: '0.8rem' }}>{t('nav.contact', 'Contact')}</span>
              </Link>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
}