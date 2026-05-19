import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { SITE_CONFIG } from '../../../content';
import {
  Award,
  Star,
  MapPin,
  ShieldCheck,
  Scissors,
  Banknote,
} from 'lucide-react';
import { AnimatedSection } from '../AnimatedSection';

import costumeImg from '../../../imports/Costume3.jpeg';
import chemiseImg from '../../../imports/Chemise.jpeg';
import proprietaireImg from '../../../imports/proprietaire.jpeg';
import proprietaireHakilImg from '../../../imports/proprietaire_Hakil.jpeg';
import proprietaire2Img from '../../../imports/proprietaire2.jpeg';
import proprietaireConseilImg from '../../../imports/proprietaireConseil.jpeg';
import proprietaireConseil1Img from '../../../imports/proprietaireConseil1.jpeg';
import costume4Img from '../../../imports/Costume4.jpeg';
import blazerHommeNoirImg from '../../../imports/BlazerHommeNoir.jpeg';

export function About() {
  const { t, i18n } = useTranslation();

  const values = [
    {
      title: t('about.values.elegance.title', 'Élégance'),
      description: t('about.values.elegance.desc', "Chaque pièce est sélectionnée pour incarner le raffinement et la sophistication à l'italienne."),
    },
    {
      title: t('about.values.qualite.title', 'Qualité'),
      description: t('about.values.qualite.desc', 'Des tissus premium et une confection artisanale garantissent une durabilité exceptionnelle.'),
    },
    {
      title: t('about.values.authenticite.title', 'Authenticité'),
      description: t('about.values.authenticite.desc', "Un engagement total envers l'excellence du Made in Italy et l'identité sénégalaise."),
    },
  ];

  const prixPoints = [
    {
      icon: ShieldCheck,
      titre: t('about.pricing.atelier.title', "Directement de l'atelier"),
      detail: t('about.pricing.atelier.detail', 'Achat à la source, en Italie'),
    },
    {
      icon: Scissors,
      titre: t('about.pricing.intermediary.title', 'Zéro intermédiaire'),
      detail: t('about.pricing.intermediary.detail', 'Pas de distributeur ni de revendeur'),
    },
    {
      icon: Banknote,
      titre: t('about.pricing.unbeatable.title', 'Prix imbattables'),
      detail: t('about.pricing.unbeatable.detail', "Jusqu'à 40% moins cher qu'en Italie"),
    },
  ];

  // Récupération dynamique de la liste d'expertise depuis i18n
  const expertiseListe = t('config.proprietaire.expertise', { returnObjects: true }) as string[];

  const aboutSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: `À Propos — David Roma`,
    url: 'https://david-roma.vercel.app/a-propos',
    description: t('about.seo.description', "Découvrez l'histoire de David Roma, spécialiste des vêtements et costumes italiens à Dakar avec plus de 15 ans d'expérience en Italie."),
    mainEntity: {
      '@type': 'Store',
      name: 'David Roma',
      url: 'https://david-roma.vercel.app',
      image: 'https://david-roma.vercel.app/og-image.jpg',
      logo: 'https://david-roma.vercel.app/logo.png',
      description: t('about.seo.storeDesc', 'Boutique de vêtements et costumes italiens haut de gamme à Dakar.'),
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'SICAP Liberté 1',
        addressLocality: 'Dakar',
        addressCountry: 'SN',
      },
      founder: {
        '@type': 'Person',
        name: t('config.proprietaire.nom', 'David Roma'),
        jobTitle: t('config.proprietaire.titre', 'Fondateur & Expert Style'),
        description: t('config.proprietaire.description', "Passionné de mode masculine italienne et fort de 15 années passées au cœur de l'artisanat transalpin."),
      },
    },
  };

  return (
    <div>
      <Helmet>
        <title>{t('about.seo.title', "À Propos — David Roma | 15+ ans d'expérience en Italie")}</title>
        <meta name="description" content={t('about.seo.metaDesc', "Découvrez David Roma, expert mode italienne avec plus de 15 ans d'expérience en Italie. Partenariats directs avec les ateliers italiens. Originaux moins chers qu'en Italie à Dakar.")} />
        <meta name="keywords" content={t('about.seo.keywords', "David Roma histoire, mode italienne Dakar, expert mode Sénégal, vêtements italiens Dakar, costumes italiens Sénégal")} />
        
        <meta property="og:title" content={t('about.seo.ogTitle', "À Propos — David Roma | Expert mode italienne à Dakar")} />
        <meta property="og:description" content={t('about.seo.ogDesc', "15+ ans d'expérience en Italie. Partenariats directs ateliers italiens. Originaux moins chers qu'en Italie.")} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://david-roma.vercel.app/a-propos" />
        <meta property="og:locale" content={i18n.language === 'it' ? 'it_IT' : 'fr_SN'} />
        <link rel="canonical" href="https://david-roma.vercel.app/a-propos" />

        <script type="application/ld+json">
          {JSON.stringify(aboutSchema)}
        </script>
      </Helmet>

      {/* Hero */}
      <section className="relative flex h-[70vh] items-center justify-center overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <img
            src={costumeImg}
            alt={t('about.hero.imgAlt', "David Roma — Élégance masculine italienne à Dakar")}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
        </motion.div>

        <div className="relative z-10 px-4 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white"
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(3rem, 7vw, 5rem)',
              letterSpacing: '-0.02em',
            }}
          >
            {t('about.hero.title', 'À Propos')}
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mx-auto mt-6 h-[3px] w-24 bg-[#d4af37]"
          />
        </div>
      </section>

      {/* ===== PRÉSENTATION DU PROPRIÉTAIRE ===== */}
      <section className="bg-white py-32 px-4">
        <div className="mx-auto max-w-6xl">
          <AnimatedSection>
            <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.5 }}
                  className="overflow-hidden"
                >
                  <img
                    src={proprietaireImg}
                    alt={t('about.founder.imgAlt', "David Roma — Fondateur dans sa boutique à Dakar")}
                    className="h-[620px] w-full object-cover object-top"
                  />
                </motion.div>

                <div className="absolute -right-6 -bottom-6 bg-[#d4af37] p-6 text-center text-black shadow-xl">
                  <p
                    className="text-4xl font-bold"
                    style={{ fontFamily: 'var(--font-serif)' }}
                  >
                    15+
                  </p>
                  <p className="mt-1 text-sm tracking-wider">
                    {t('about.founder.experienceBadge', 'ANS EN ITALIE')}
                  </p>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <p className="mb-3 text-sm tracking-widest text-[#d4af37]">
                    {t('about.founder.tagline', 'LE FONDATEUR')}
                  </p>

                  <h2
                    className="mb-2 text-[#0a0a0a]"
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: 'clamp(2rem, 4vw, 3rem)',
                      letterSpacing: '-0.02em',
                    }}
                  >
                    {SITE_CONFIG.proprietaire?.nom || "David Roma"}
                  </h2>

                  <p className="mb-6 text-lg text-gray-500">
                    {t('config.proprietaire.titre')}
                  </p>
                  <div className="mb-8 h-[3px] w-16 bg-[#d4af37]"></div>
                </div>

                <p className="text-xl leading-relaxed text-gray-700">
                  {t('config.proprietaire.description')}
                </p>

                <blockquote className="border-l-4 border-[#d4af37] py-2 pl-6">
                  <p
                    className="text-lg italic leading-relaxed text-gray-600"
                    style={{ fontFamily: 'var(--font-serif)' }}
                  >
                    "{t('config.proprietaire.citation')}"
                  </p>
                  <cite className="mt-3 block text-sm tracking-wider text-[#d4af37]">
                    — {SITE_CONFIG.proprietaire?.nom || 'David Roma'}
                  </cite>
                </blockquote>

                <div className="grid grid-cols-1 gap-4 pt-4">
                  {Array.isArray(expertiseListe) && expertiseListe.map((point, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#d4af37]">
                        <Star className="h-3 w-3 text-black" />
                      </div>
                      <span className="text-gray-700">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== EN ACTION ===== */}
      <section className="bg-gray-50 py-24 px-4">
        <div className="mx-auto max-w-6xl">
          <AnimatedSection>
            <div className="mb-16 text-center">
              <p className="mb-4 text-sm tracking-widest text-[#d4af37]">
                {t('about.action.tagline', 'AU QUOTIDIEN')}
              </p>
              <h2
                className="text-[#0a0a0a]"
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(2rem, 4vw, 3rem)',
                  letterSpacing: '-0.02em',
                }}
              >
                David Roma <span className="text-[#d4af37]">{t('about.action.titleHighlight', 'en Action')}</span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                img: proprietaire2Img,
                alt: t('about.action.step1.alt', 'David Roma dans un atelier de luxe en Italie'),
                titre: t('about.action.step1.title', 'En Italie'),
                desc: t('about.action.step1.desc', 'Sélection personnelle dans les meilleurs ateliers italiens.'),
              },
              {
                img: proprietaireHakilImg,
                alt: t('about.action.step2.alt', 'David Roma habillant un client'),
                titre: t('about.action.step2.title', "L'Habillage"),
                desc: t('about.action.step2.desc', 'Accompagnement personnalisé pour une tenue parfaitement ajustée.'),
              },
              {
                img: proprietaireConseilImg,
                alt: t('about.action.step3.alt', 'David Roma conseillant un client sur les tissus'),
                titre: t('about.action.step3.title', 'Le Conseil'),
                desc: t('about.action.step3.desc', 'Choix des tissus, des couleurs et des associations.'),
              },
              {
                img: proprietaireConseil1Img,
                alt: t('about.action.step4.alt', 'David Roma et un client dans la boutique'),
                titre: t('about.action.step4.title', 'La Boutique'),
                desc: t('about.action.step4.desc', 'Un accueil chaleureux dans un espace pensé pour vous.'),
              },
            ].map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.12}>
                <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.3 }}>
                  <div className="mb-4 overflow-hidden">
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6 }}
                      src={item.img}
                      alt={item.alt}
                      className="h-[340px] w-full object-cover object-top"
                    />
                  </div>
                  <div className="border-l-4 border-[#d4af37] pl-4">
                    <h3 className="mb-1 text-lg text-[#0a0a0a]" style={{ fontFamily: 'var(--font-serif)' }}>
                      {item.titre}
                    </h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ARGUMENT PRIX ===== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0f2557] to-black py-24 px-4 text-white">
        <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-[#d4af37] opacity-10 blur-[180px]"></div>

        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <AnimatedSection>
            <Award className="mx-auto mb-6 h-12 w-12 text-[#d4af37]" />
            <h2
              className="mb-6 text-white"
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                letterSpacing: '-0.02em',
              }}
            >
              {t('about.pricing.title', "Pourquoi moins cher qu'en Italie ?")}
            </h2>

            <p className="mx-auto mb-12 max-w-3xl text-xl leading-relaxed text-gray-300">
              {t('about.pricing.description', "En 15 ans passés en Italie, David Roma a tissé des relations directes avec les fabricants et ateliers. Ces partenariats exclusifs éliminent tous les intermédiaires et vous permettent d'accéder aux mêmes produits originaux à des prix que vous ne trouverez nulle part ailleurs à Dakar.")}
            </p>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {prixPoints.map((item, index) => (
                <AnimatedSection key={index} delay={index * 0.15}>
                  <motion.div
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.3 }}
                    className="border border-white/10 bg-white/5 p-8 transition-colors duration-300 hover:border-[#d4af37]/40"
                  >
                    <item.icon className="mx-auto mb-4 h-8 w-8 text-[#d4af37]" />
                    <h3 className="mb-3 text-xl text-[#d4af37]" style={{ fontFamily: 'var(--font-serif)' }}>
                      {item.titre}
                    </h3>
                    <p className="text-gray-400">{item.detail}</p>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== INSPIRATIONS ===== */}
      <section className="bg-white py-24 px-4">
        <div className="mx-auto max-w-6xl">
          <AnimatedSection>
            <div className="mb-16 text-center">
              <p className="mb-4 text-sm tracking-widest text-[#d4af37]">
                {t('about.inspiration.tagline', 'SÉLECTION DAVID ROMA')}
              </p>
              <h2
                className="text-[#0a0a0a]"
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(2rem, 4vw, 3rem)',
                  letterSpacing: '-0.02em',
                }}
              >
                {t('about.inspiration.title', 'Inspirations')} <span className="text-[#d4af37]">{t('about.inspiration.titleHighlight', 'Style')}</span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
                {t('about.inspiration.description', 'Des looks pensés par David Roma pour vous inspirer au quotidien.')}
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <AnimatedSection delay={0}>
              <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.5 }} className="overflow-hidden">
                <img
                  src={costume4Img}
                  alt={t('about.inspiration.look1.alt', 'Look formel — costume 3 pièces marine David Roma')}
                  className="h-[600px] w-full object-cover object-top"
                />
              </motion.div>
              <p className="mt-4 text-center text-sm uppercase tracking-wider text-gray-500">
                {t('about.inspiration.look1.label', 'Look Formel — Costume 3 Pièces')}
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.5 }} className="overflow-hidden">
                <img
                  src={blazerHommeNoirImg}
                  alt={t('about.inspiration.look2.alt', 'Look moderne — blazer noir haut de gamme David Roma')}
                  className="h-[600px] w-full object-cover object-top"
                />
              </motion.div>
              <p className="mt-4 text-center text-sm uppercase tracking-wider text-gray-500">
                {t('about.inspiration.look2.label', 'Look Contemporain — Le Blazer Noir')}
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ===== HISTOIRE ===== */}
      <section className="bg-gray-50 py-32 px-4">
        <div className="mx-auto max-w-4xl">
          <AnimatedSection>
            <h2
              className="mb-12 text-center text-[#0a0a0a]"
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                letterSpacing: '-0.02em',
              }}
            >
              {t('about.story.title', 'Notre')} <span className="text-[#d4af37]">{t('about.story.titleHighlight', 'Histoire')}</span>
            </h2>

            <div className="space-y-8 text-xl leading-relaxed text-gray-700">
              <p>{t('about.story.p1', "David Roma est né d'une passion pour l'élégance masculine et d'un profond respect pour le savoir-faire italien. Basée à Dakar, notre maison célèbre l'union entre l'identité sénégalaise et l'excellence de la mode transalpine.")}</p>
              <p>{t('about.story.p2', 'Chaque costume, chemise ou paire de chaussures que nous proposons est fabriqué en Italie, berceau historique de la haute couture masculine. Nous travaillons avec des ateliers renommés qui perpétuent des traditions artisanales centenaires.')}</p>
              <p>{t('about.story.p3', "Notre mission est d'offrir à l'homme africain moderne une garde-robe qui reflète son succès, son raffinement et son goût pour l'excellence — à des prix qu'il ne trouverait pas même en allant directement en Italie.")}</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== VALEURS ===== */}
      <section className="bg-gradient-to-br from-black via-[#0a0a0a] to-[#0f2557] py-32 px-4 text-white">
        <div className="mx-auto max-w-6xl">
          <AnimatedSection>
            <h2
              className="mb-20 text-center text-white"
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                letterSpacing: '-0.02em',
              }}
            >
              {t('about.values.title', 'Nos')} <span className="text-[#d4af37]">{t('about.values.titleHighlight', 'Valeurs')}</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            {values.map((value, index) => (
              <AnimatedSection key={index} delay={index * 0.15}>
                <motion.div whileHover={{ y: -10 }} transition={{ duration: 0.3 }} className="group text-center">
                  <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#d4af37] to-[#c49d2e] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12">
                    <Star className="h-8 w-8 text-black" />
                  </div>
                  <h3 className="mb-4 text-[#d4af37]" style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem' }}>
                    {value.title}
                  </h3>
                  <p className="text-lg leading-relaxed text-gray-300">{value.description}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ARTISANAT ===== */}
      <section className="bg-white py-32 px-4">
        <div className="mx-auto max-w-7xl">
          <AnimatedSection>
            <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
              <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.5 }} className="overflow-hidden">
                <img
                  src={chemiseImg}
                  alt={t('about.detail.imgAlt', 'Artisanat et confection italienne — chemise David Roma')}
                  className="h-[600px] w-full object-cover"
                />
              </motion.div>

              <div className="space-y-8">
                <h2
                  className="text-[#0a0a0a]"
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                    letterSpacing: '-0.02em',
                  }}
                >
                  {t('about.detail.title', "L'Art du")} <span className="text-[#d4af37]">{t('about.detail.titleHighlight', 'Détail')}</span>
                </h2>
                <div className="h-[3px] w-24 bg-[#d4af37]"></div>

                <p className="text-xl leading-relaxed text-gray-700">{t('about.detail.p1', 'De la sélection des tissus les plus nobles à la finition minutieuse de chaque couture, nos partenaires italiens accordent une attention obsessionnelle aux détails.')}</p>
                <p className="text-xl leading-relaxed text-gray-700">{t('about.detail.p2', "C'est cette quête de perfection qui fait de chaque vêtement David Roma une pièce unique, taillée pour durer et sublimer celui qui la porte.")}</p>

                <div className="flex items-start gap-4 p-3 rounded-sm hover:bg-gray-50 transition-colors duration-250">
  <div className="flex-shrink-0 w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center border border-gray-200/50">
    <MapPin className="h-4 w-4 text-[#d4af37]" />
  </div>
  
  <div className="flex-1 min-w-0">
    <h4 className="text-xs tracking-widest uppercase font-semibold text-gray-400 mb-0.5">
      {t('contact.info.addressTitle', 'Notre Showroom')}
    </h4>
    {/* Remplacement ici : On appelle directement la configuration brute */}
    <p className="text-gray-700 text-sm sm:text-base font-medium leading-relaxed whitespace-pre-line">
      {SITE_CONFIG.adresse}
    </p>
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