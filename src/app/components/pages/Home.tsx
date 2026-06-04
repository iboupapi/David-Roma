import { Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowRight, Star, ShieldCheck, Scissors, Banknote, Award, Sparkles } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { AnimatedSection } from '../AnimatedSection';
import { SITE_CONFIG } from '../../../content';

// Importations d'images
import heroImage from '../../../imports/Costume2.jpeg';
import chemiseImg from '../../../imports/Chemise.jpeg';
import chaussureImg from '../../../imports/Chaussure7.jpeg';
import chaussureSurMesureImg from '../../../imports/chaussureSurMesure.jpeg';
import cravateImg from '../../../imports/Cravate.jpg';
import poloImg from '../../../imports/Polo2.jpeg';
import tshirtImg from '../../../imports/T-shirt1.jpeg';
import pantalonImg from '../../../imports/pentalon.jpeg'; 
import ceintureImg from '../../../imports/Ceinture.jpeg';
import chaussetteImg from '../../../imports/Chaussette.jpeg';
import styleImg from '../../../imports/style_conseil.jpeg';
import complet1Img from '../../../imports/Complet.jpeg';
import complet2Img from '../../../imports/Complet1.jpeg';
import complet3Img from '../../../imports/Complet2.jpeg';

interface ConseilItem {
  titre: string;
  conseil: string;
}

export function Home() {
  const { t, i18n } = useTranslation();

  const categories = [
    { name: t('home.collections.categories.costumes', 'Costumes'), image: heroImage, path: '/collection/costumes' },
    { name: t('home.collections.categories.chemises', 'Chemises'), image: chemiseImg, path: '/collection/chemises' },
    { name: t('home.collections.categories.pantalons', 'Pantalons'), image: pantalonImg, path: '/collection/pantalons' },
    { name: t('home.collections.categories.chaussures', 'Chaussures'), image: chaussureImg, path: '/collection/chaussures' },
    { name: t('home.collections.categories.ceintures', 'Ceintures'), image: ceintureImg, path: '/collection/ceintures' },
    { name: t('home.collections.categories.chaussettes', 'Chaussettes'), image: chaussetteImg, path: '/collection/chaussettes' },
    { name: t('home.collections.categories.cravates', 'Cravates'), image: cravateImg, path: '/collection/cravates' },
    { name: t('home.collections.categories.polos', 'Polos'), image: poloImg, path: '/collection/polos' },
    { name: t('home.collections.categories.tshirts', 'T-shirts'), image: tshirtImg, path: '/collection/tshirts' },
  ];

  const flatlays = [
    { img: complet1Img, label: t('home.style.flatlays.look1.label', 'Look Business Casual'), desc: t('home.style.flatlays.look1.desc', 'Pantalon bleu clair · Chemise imprimée · Veste marine · Oxford marine') },
    { img: complet2Img, label: t('home.style.flatlays.look2.label', 'Look Classique Gris'), desc: t('home.style.flatlays.look2.desc', 'Costume gris prince-de-galles · Chemise bleue · Oxford marron') },
    { img: complet3Img, label: t('home.style.flatlays.look3.label', 'Look Décontracté Chic'), desc: t('home.style.flatlays.look3.desc', 'Pantalon blanc · Veste bleue · Chemise denim · Mocassins') },
  ];

  const prixPoints = [
    { icon: ShieldCheck, titre: t('home.engagement.points.authenticity.title', '100% Original'), detail: t('home.engagement.points.authenticity.desc', 'Jamais des imitations, toujours des pièces authentiques') },
    { icon: Scissors, titre: t('home.engagement.points.direct.title', 'Achat direct'), detail: t('home.engagement.points.direct.desc', 'Directement auprès des ateliers italiens, sans intermédiaires') },
    { icon: Banknote, titre: t('home.engagement.points.prices.title', 'Prix réduits'), detail: t('home.engagement.points.prices.desc', "Jusqu'à 40% moins cher que les prix pratiqués en Italie") },
    { icon: Award, titre: t('home.engagement.points.expert.title', 'Expert sur place'), detail: t('home.engagement.points.expert.desc', '15+ ans en Italie pour sélectionner les meilleures pièces') },
  ];

  const defaultConseils: ConseilItem[] = [
    { 
      titre: "Le Costume Parfait", 
      conseil: "Un costume bien ajusté est votre meilleur allié. La veste doit épouser vos épaules sans déborder." 
    },
    { 
      titre: "Ceinture & Chaussures", 
      conseil: "Assurez-vous toujours que votre ceinture et vos chaussures sont de la même couleur." 
    }
  ];

  const conseilsListe = (t('config.conseils', { returnObjects: true }) as ConseilItem[]) || defaultConseils;

  // Création du schéma de Commerce Local propre pour la page d'accueil (évite les erreurs Product)
  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "Store",
    "name": "David Roma",
    "image": "https://www.david-roma.com/og-image.jpg", 
    "@id": "https://www.david-roma.com/#store",
    "url": "https://www.david-roma.com/",
    "telephone": SITE_CONFIG.telephone || "",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "SICAP Liberté 1",
      "addressLocality": "Dakar",
      "addressCountry": "SN"
    },
    "priceRange": "$$$"
  };

  return (
    <div>
      <Helmet>
        <title>{t('home.seo.title', 'David Roma — Costume & Vêtements Italiens à Dakar, Sénégal')}</title>
        <meta name="description" content={t('home.seo.desc', 'Achetez des costumes, blazers et vêtements 100% italiens à Dakar au Sénégal.')} />
        <meta name="keywords" content="costume italien Dakar, vêtement italien Sénégal, blazer italien Dakar, mode homme Sénégal, costume homme Dakar, made in Italy Dakar, chemise italienne Sénégal, chaussure italienne Dakar, costume mariage Dakar, boutique costume Dakar, chaussures sur mesure dakar" />
        <meta property="og:title" content={t('home.seo.title', 'David Roma — Costume & Vêtements Italiens à Dakar, Sénégal')} />
        <meta property="og:description" content={t('home.seo.ogDesc', 'Costumes, blazers, chemises et chaussures 100% Made in Italy à Dakar.')} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.david-roma.com/" />
        <meta property="og:locale" content={i18n.language === 'it' ? 'it_IT' : 'fr_SN'} />
        <link rel="canonical" href="https://www.david-roma.com/" />
        
        {/* Injecté de manière propre sans aucune référence à `@type: "Product"` */}
        <script type="application/ld+json">
          {JSON.stringify(homeSchema)}
        </script>
      </Helmet>

      {/* ===== HERO ===== */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div initial={{ scale: 1.1 }} animate={{ scale: 1 }} transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }} className="absolute inset-0">
          <img src={heroImage} alt="David Roma — Costume italien élégant à Dakar" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70"></div>
        </motion.div>

        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-8 text-white"
            style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.5rem, 7vw, 6rem)', lineHeight: '1.1', letterSpacing: '-0.02em' }}
          >
            {t('home.hero.title1', "L'élégance italienne,")}
            <br /><span className="text-[#d4af37]">{t('home.hero.title2', "au cœur de Dakar")}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-12 text-gray-200 text-xl max-w-2xl mx-auto"
          >
            {t('home.intro.desc')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/collections" className="group inline-flex items-center gap-3 bg-[#d4af37] text-black px-10 py-5 hover:bg-[#c49d2e] transition-all duration-300 hover:scale-105">
              <span style={{ letterSpacing: '0.05em' }}>{t('home.hero.btnDiscover', 'Découvrir la collection')}</span>
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-3 border-2 border-white text-white px-10 py-5 hover:bg-white hover:text-black transition-all duration-300 hover:scale-105">
              <span style={{ letterSpacing: '0.05em' }}>{t('home.hero.btnAppointment', 'Prendre rendez-vous')}</span>
            </Link>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 1 }} className="absolute bottom-12 left-1/2 -translate-x-1/2">
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="w-[2px] h-16 bg-gradient-to-b from-transparent via-white to-transparent" />
        </motion.div>
      </section>

      {/* ===== ENGAGEMENT & PRIX ===== */}
      <section className="py-24 px-4 bg-gradient-to-br from-[#0f2557] via-[#0a1a3a] to-black text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#d4af37] rounded-full blur-[200px] opacity-10"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <AnimatedSection>
            <div className="text-center mb-16">
              <p className="text-[#d4af37] text-sm tracking-widest mb-4">{t('home.engagement.tag', 'NOTRE ENGAGEMENT')}</p>
              
              <h2 className="mb-4 text-white" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3.5rem)', letterSpacing: '-0.02em' }}>
                {t('home.madeInItaly.title', 'Made in Italy')}
              </h2>
              <p className="text-[#d4af37] text-2xl mb-6" style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic' }}>
                {t('home.engagement.points.direct.title', 'Achat direct')}
              </p>
              <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
                {t('home.madeInItaly.desc1', 'Nos vêtements et chaussures sont confectionnés en Italie par des artisans d\'exception.')}
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {prixPoints.map((point, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.3 }}
                  className="bg-white/5 border border-white/10 p-6 hover:border-[#d4af37]/50 transition-all duration-300">
                  <point.icon className="h-8 w-8 text-[#d4af37] mb-4" />
                  <h3 className="text-white text-lg mb-2" style={{ fontFamily: 'var(--font-serif)' }}>{point.titre}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{point.detail}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== INTRODUCTION ===== */}
      <AnimatedSection>
        <section className="py-32 px-4 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-8 text-[#0a0a0a]" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', letterSpacing: '-0.02em' }}>
              {t('home.intro.title1', 'L’excellence italienne')}
              <br /><span className="text-[#d4af37]">{t('home.intro.title2', 'pour l’homme moderne')}</span>
            </h2>
            <p className="text-gray-600 text-xl leading-relaxed">
              {t('home.intro.desc', 'David Roma incarne l’alliance parfaite entre l’élégance intemporelle de la mode italienne et le raffinement de la clientèle africaine.')}
            </p>
          </div>
        </section>
      </AnimatedSection>

      {/* ===== SECTION EXCLUSIVE : NOUVEAUTÉ CHAUSSURES SUR MESURE ===== */}
      <section className="py-16 sm:py-24 px-4 bg-[#0a0a0a] border-t border-b border-white/5 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              <div className="lg:col-span-6 relative group overflow-hidden w-full rounded-sm shadow-2xl">
                <div className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-[#d4af37] text-black text-[10px] sm:text-[11px] font-bold tracking-[0.15em] uppercase px-3 py-1.5 sm:px-4 sm:py-1.5 shadow-lg">
                  <Sparkles className="h-3 w-3 fill-black" /> {t('home.exclusive.badge', 'NOUVEAUTÉ EXCLUSIVE')}
                </div>
                
                <motion.div 
                  whileHover={{ scale: 1.02 }} 
                  transition={{ duration: 0.5 }} 
                  className="w-full aspect-square sm:aspect-[4/5] lg:h-[520px]"
                >
                  <img 
                    src={chaussureSurMesureImg} 
                    alt="Nouvelle collection Chaussures sur mesure par David Roma" 
                    className="w-full h-full object-cover object-center" 
                    loading="lazy"
                  />
                </motion.div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
              </div>

              <div className="lg:col-span-6 text-left lg:pl-4 mt-4 lg:mt-0">
                <p className="text-[#d4af37] text-xs tracking-[0.3em] uppercase mb-3 font-semibold">{t('home.exclusive.tag', 'HAUTE CORDONNERIE')}</p>
                <h2 className="text-white mb-5 sm:mb-6" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.8rem, 4vw, 3.2rem)', letterSpacing: '-0.02em', lineHeight: 1.15 }}>
                  {t('home.exclusive.title1', 'Souliers ')}<span className="text-[#d4af37]">{t('home.exclusive.title2', 'Sur Mesure')}</span>
                </h2>
                <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-5 sm:mb-6">
                  {t('home.exclusive.desc1', 'David Roma franchit une nouvelle étape dans le prestige. Découvrez notre tout nouveau service de confection artisanale à la commande.')}
                </p>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 border-l-2 border-[#d4af37] pl-4 italic">
                  {t('home.exclusive.desc2', 'Chaque paire est fabriquée de manière unique en Italie, moulée selon la morphologie de votre pied avec les cuirs les plus nobles de la péninsule.')}
                </p>
                
                <Link to="/contact" className="group flex sm:inline-flex items-center justify-center gap-3 bg-transparent border border-[#d4af37] text-[#d4af37] px-8 py-4 hover:bg-[#d4af37] hover:text-black transition-all duration-300 w-full sm:w-auto">
                  <span style={{ letterSpacing: '0.05em', fontSize: '0.85rem' }}>{t('home.exclusive.btn', 'PRENDRE RENDEZ-VOUS')}</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>

            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== COLLECTIONS ===== */}
      <section className="py-32 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <h2 className="text-center mb-20 text-white" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', letterSpacing: '-0.02em' }}>
              {t('home.collections.title1', 'Nos ')}<span className="text-[#d4af37]">{t('home.collections.title2', 'Collections')}</span>
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <AnimatedSection key={index} delay={index * 0.08}>
                <Link to={category.path} className="group relative h-[500px] overflow-hidden block">
                  <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }} className="w-full h-full">
                    <img src={category.image} alt={`${category.name} David Roma`} className="w-full h-full object-cover" />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 flex flex-col items-center justify-end p-8">
                    <h3 className="text-white transform transition-transform duration-500 group-hover:-translate-y-2"
                      style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}>
                      {category.name}
                    </h3>
                    <div className="w-16 h-[2px] bg-[#d4af37] mt-4 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CONSEILS STYLE ===== */}
      <section className="py-32 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <AnimatedSection>
              <div>
                <p className="text-[#d4af37] text-sm tracking-widest mb-4">{t('home.style.tag', 'EXPERTISE DAVID ROMA')}</p>
                <h2 className="mb-6 text-[#0a0a0a]" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3.5rem)', letterSpacing: '-0.02em' }}>
                  {t('home.style.title1', 'Conseils ')}<span className="text-[#d4af37]">{t('home.style.title2', 'Style')}</span>
                </h2>
                <p className="text-gray-600 text-xl leading-relaxed mb-8">
                  {t('home.style.desc', 'Fort de 15+ ans d’expérience en Italie, David Roma vous guide pour vous habiller avec élégance.')}
                </p>
                <Link to="/contact" className="inline-flex items-center gap-2 bg-[#0f2557] text-white px-8 py-4 hover:bg-[#0a1a3a] transition-all duration-300 hover:scale-105">
                  <span style={{ letterSpacing: '0.05em' }}>{t('home.style.btn', 'Conseil personnalisé')}</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.5 }} className="overflow-hidden">
                <img src={styleImg} alt="Style David Roma — élégance masculine italienne" className="w-full h-[500px] object-cover object-top" />
              </motion.div>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
            {Array.isArray(conseilsListe) && conseilsListe.map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.3 }}
                  className="bg-white p-8 border-l-4 border-[#d4af37] shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-[#d4af37] flex items-center justify-center text-black font-bold text-lg">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="mb-3 text-[#0a0a0a] text-xl" style={{ fontFamily: 'var(--font-serif)' }}>
                        {item.titre}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {item.conseil}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>

          {/* FLATLAYS */}
          <AnimatedSection>
            <div className="text-center mb-12">
              <p className="text-[#d4af37] text-sm tracking-widest mb-3">{t('home.style.inspirationsTag', 'INSPIRATIONS')}</p>
              <h3 className="text-[#0a0a0a]" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', letterSpacing: '-0.01em' }}>
                {t('home.style.inspirationsTitle1', 'Tenues ')}<span className="text-[#d4af37]">{t('home.style.inspirationsTitle2', 'Complètes')}</span>
              </h3>
              <p className="text-gray-500 mt-3">{t('home.style.inspirationsDesc', 'Des associations pensées par David Roma — prêtes à porter')}</p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {flatlays.map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.12}>
                <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.3 }}>
                  <div className="overflow-hidden mb-4 bg-gray-100">
                    <motion.img whileHover={{ scale: 1.04 }} transition={{ duration: 0.6 }}
                      src={item.img} alt={`${item.label} — David Roma`}
                      className="w-full h-[400px] object-cover" />
                  </div>
                  <h4 className="text-[#0a0a0a] text-lg mb-1" style={{ fontFamily: 'var(--font-serif)' }}>{item.label}</h4>
                  <p className="text-gray-500 text-sm">{item.desc}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MADE IN ITALY ===== */}
      <AnimatedSection>
        <section className="py-32 px-4 bg-gradient-to-br from-[#0f2557] via-[#0a1a3a] to-black text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#d4af37] rounded-full blur-[120px]"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#0f2557] rounded-full blur-[120px]"></div>
          </div>
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <h2 className="mb-8 text-[#d4af37]" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', letterSpacing: '-0.02em' }}>
              {t('home.madeInItaly.title', 'Made in Italy')}
            </h2>
            <p className="text-gray-200 text-xl leading-relaxed mb-16 max-w-3xl mx-auto">
              {t('home.madeInItaly.desc1', 'Nos vêtements et chaussures sont confectionnés en Italie par des artisans d’exception. Achetés directement à la source, ils vous reviennent ')}
              <strong className="text-[#d4af37]">{t('home.madeInItaly.desc2', 'moins cher qu’en boutique en Italie')}</strong>.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { value: '100%', label: t('home.madeInItaly.stats.stat1', 'Originaux italiens') },
                { value: '15+', label: t('home.madeInItaly.stats.stat2', 'Ans d’expérience en Italie') },
                { value: '-40%', label: t('home.madeInItaly.stats.stat3', 'vs prix en Italie') },
              ].map((stat, index) => (
                <AnimatedSection key={index} delay={index * 0.15}>
                  <div className="group">
                    <div className="text-6xl mb-4 text-[#d4af37] transition-transform duration-500 group-hover:scale-110" style={{ fontFamily: 'var(--font-serif)' }}>
                      {stat.value}
                    </div>
                    <div className="text-gray-300 text-lg">{stat.label}</div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ===== CTA ===== */}
      <AnimatedSection>
        <section className="py-32 px-4 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <Star className="h-10 w-10 text-[#d4af37] mx-auto mb-6" />
            <h2 className="mb-8 text-[#0a0a0a]" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', letterSpacing: '-0.02em' }}>
              {t('home.cta.title1', 'Visitez notre showroom')}
              <br /><span className="text-[#d4af37]">{t('home.cta.title2', 'à Dakar')}</span>
            </h2>
            <p className="text-gray-600 text-xl mb-12 leading-relaxed">{SITE_CONFIG.adresse}</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-[#0f2557] text-white px-10 py-5 hover:bg-[#0a1a3a] transition-all duration-300 hover:scale-105">
                <span>{t('home.hero.btnAppointment', 'Prendre rendez-vous')}</span>
              </Link>
              <Link to="/collections" className="inline-flex items-center justify-center gap-2 border-2 border-[#0f2557] text-[#0f2557] px-10 py-5 hover:bg-[#0f2557] hover:text-white transition-all duration-300 hover:scale-105">
                <span>{t('home.cta.btnCollections', 'Voir les collections')}</span>
              </Link>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
}