import { Link } from 'react-router';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { AnimatedSection } from '../AnimatedSection';
import costumeImg from '../../../imports/Costume2.jpeg';
import chemiseImg from '../../../imports/Chemise.jpeg';
import chaussureImg from '../../../imports/Chaussure7.jpeg';
import cravateImg from '../../../imports/Cravate.jpg';
import poloImg from '../../../imports/Polo2.jpeg';
import tshirtImg from '../../../imports/T-shirt1.jpeg';
import pantalonImg from '../../../imports/pentalon.jpeg';
import kakiImg from '../../../imports/pentalon8.jpeg';
import ceintureImg from '../../../imports/Ceinture.jpeg';
import chaussetteImg from '../../../imports/Chaussette.jpeg';
import blazerImg from '../../../imports/Blazer3.jpeg';
import blazer2Img from '../../../imports/Blazer.jpeg';

// Toutes les collections avec leurs dimensions éditoriales
const collections = [
  {
    name: 'Costumes',
    slug: 'costumes',
    image: costumeImg,
    description: 'Taillés dans des tissus d\'exception',
    span: 'col-span-2 row-span-2', // grande
    height: 680,
  },
  {
    name: 'Blazers',
    slug: 'blazers',
    image: blazerImg,
    description: 'La pièce maîtresse du style masculin',
    span: 'col-span-1 row-span-2',
    height: 680,
  },
  {
    name: 'Chemises',
    slug: 'chemises',
    image: chemiseImg,
    description: 'Coton premium & lin italien',
    span: 'col-span-1 row-span-1',
    height: 420,
  },
  {
    name: 'Pantalons',
    slug: 'pantalons',
    image: pantalonImg,
    description: 'Coupe italienne, tissus nobles',
    span: 'col-span-1 row-span-1',
    height: 420,
  },
  {
    name: 'Chaussures',
    slug: 'chaussures',
    image: chaussureImg,
    description: 'Cuir véritable, fait main',
    span: 'col-span-1 row-span-2',
    height: 560,
  },
  {
    name: 'Ceintures',
    slug: 'ceintures',
    image: ceintureImg,
    description: 'Cuir pleine fleur d\'Italie',
    span: 'col-span-1 row-span-1',
    height: 360,
  },
  {
    name: 'Pantalons Kaki',
    slug: 'pantalons-kaki',
    image: kakiImg,
    description: 'Polyvalents, du bureau au week-end',
    span: 'col-span-1 row-span-1',
    height: 360,
  },
  {
    name: 'Cravates',
    slug: 'cravates',
    image: cravateImg,
    description: 'Soie 100% italienne',
    span: 'col-span-1 row-span-1',
    height: 400,
  },
  {
    name: 'Polos',
    slug: 'polos',
    image: poloImg,
    description: 'Style décontracté raffiné',
    span: 'col-span-1 row-span-1',
    height: 400,
  },
  {
    name: 'Chaussettes',
    slug: 'chaussettes',
    image: chaussetteImg,
    description: 'Le détail qui fait la différence',
    span: 'col-span-1 row-span-1',
    height: 400,
  },
  {
    name: 'T-shirts',
    slug: 'tshirts',
    image: tshirtImg,
    description: 'Coton peigné premium',
    span: 'col-span-1 row-span-1',
    height: 400,
  },
];

// Carte collection avec overlay au hover
function CollectionCard({ col, delay = 0, height }: { col: typeof collections[0]; delay?: number; height: number }) {
  return (
    <AnimatedSection delay={delay}>
      <Link to={`/collection/${col.slug}`} className="group block relative overflow-hidden" style={{ height }}>
        <motion.img
          whileHover={{ scale: 1.07 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          src={col.image}
          alt={`${col.name} — David Roma`}
          className="w-full h-full object-cover"
        />
        {/* Dégradé permanent bas */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
        {/* Overlay hover */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Contenu bas */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <p className="text-[#d4af37] text-xs tracking-widest mb-1 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
            {col.description}
          </p>
          <div className="flex items-end justify-between">
            <h2
              className="text-white transition-transform duration-500 group-hover:-translate-y-1"
              style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', letterSpacing: '-0.01em' }}
            >
              {col.name}
            </h2>
            <div className="flex items-center gap-1 text-[#d4af37] opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-2 group-hover:translate-x-0">
              <span className="text-xs tracking-widest">Voir</span>
              <ArrowRight className="h-3 w-3" />
            </div>
          </div>
        </div>
      </Link>
    </AnimatedSection>
  );
}

export function Collections() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div style={{ background: '#0a0a0a' }}>
      <Helmet>
        <title>Collections — David Roma | Vêtements & Accessoires italiens à Dakar</title>
        <meta name="description" content="Blazers, costumes, chemises, pantalons, ceintures, chaussettes et chaussures 100% made in Italy. Moins chers qu'en Italie. Showroom David Roma à Dakar, SICAP Liberté 1." />
        <meta name="keywords" content="blazer italien Dakar, costume David Roma, ceinture italienne, chaussettes italiennes, pantalon kaki Dakar" />
        <link rel="canonical" href="https://davidroma.sn/collections" />
      </Helmet>

      {/* ===== HERO PARALLAX ===== */}
      <section ref={heroRef} className="relative h-screen overflow-hidden">
        <motion.div style={{ y: heroY }} className="absolute inset-0">
          <img
            src={blazer2Img}
            alt="Collections David Roma — élégance italienne"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/90" />
        </motion.div>

        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 h-full flex flex-col items-center justify-center text-white px-4 text-center"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#d4af37] text-xs tracking-[0.4em] mb-8 uppercase"
          >
            Made in Italy · 100% Originaux · Prix Imbattables
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(4rem, 10vw, 8rem)',
              letterSpacing: '-0.03em',
              lineHeight: 0.9,
            }}
            className="text-white mb-10"
          >
            Collec
            <span className="text-[#d4af37]">tions</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }} animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="w-24 h-px bg-[#d4af37] mb-10"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-gray-300 text-lg max-w-xl leading-relaxed"
          >
            Pièces d'exception fabriquées en Italie — à des prix inférieurs à ceux pratiqués en Italie
          </motion.p>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          >
            <span className="text-gray-500 text-xs tracking-widest">DÉCOUVRIR</span>
            <motion.div
              animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}
              className="w-px h-12 bg-gradient-to-b from-[#d4af37] to-transparent"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* ===== BANDEAU GARANTIES ===== */}
      <div className="bg-[#d4af37] py-4 px-4 overflow-hidden">
        <motion.div
          animate={{ x: [0, -800] }}
          transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
          className="flex gap-16 whitespace-nowrap"
        >
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex gap-16 items-center">
              {['100% Originaux italiens', 'Achat direct ateliers', 'Zéro intermédiaire', 'Moins cher qu\'en Italie', '15+ ans d\'expérience'].map((txt, j) => (
                <div key={j} className="flex items-center gap-3">
                  <ShieldCheck className="h-4 w-4 text-black flex-shrink-0" />
                  <span className="text-black text-xs tracking-widest uppercase font-medium">{txt}</span>
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>

      {/* ===== GRILLE ÉDITORIALE ===== */}
      <section className="px-4 py-16" style={{ background: '#0a0a0a' }}>
        <div className="max-w-7xl mx-auto">

          {/* Titre section */}
          <AnimatedSection>
            <div className="flex items-center gap-8 mb-12">
              <div className="flex-1 h-px bg-white/10" />
              <p className="text-gray-500 text-xs tracking-[0.4em] uppercase whitespace-nowrap">Toutes les collections</p>
              <div className="flex-1 h-px bg-white/10" />
            </div>
          </AnimatedSection>

          {/* RANGÉE 1 : Costumes (2/3) + Blazers (1/3) */}
          <div className="grid grid-cols-3 gap-3 mb-3">
            <div className="col-span-2">
              <CollectionCard col={collections[0]} height={620} delay={0} />
            </div>
            <div className="col-span-1">
              <CollectionCard col={collections[1]} height={620} delay={0.1} />
            </div>
          </div>

          {/* RANGÉE 2 : Chemises + Pantalons (chacun 1/2) */}
          <div className="grid grid-cols-2 gap-3 mb-3">
            <CollectionCard col={collections[2]} height={420} delay={0} />
            <CollectionCard col={collections[3]} height={420} delay={0.1} />
          </div>

          {/* RANGÉE 3 : Chaussures (1/3) + Ceintures & Pantalons Kaki empilés (1/3 chacun) */}
          <div className="grid grid-cols-3 gap-3 mb-3">
            <div className="col-span-1 row-span-2">
              <CollectionCard col={collections[4]} height={580} delay={0} />
            </div>
            <div className="col-span-1">
              <CollectionCard col={collections[5]} height={280} delay={0.1} />
            </div>
            <div className="col-span-1">
              <CollectionCard col={collections[6]} height={280} delay={0.2} />
            </div>
            {/* Texte éditorial entre les lignes */}
            <div className="col-span-2 flex items-center justify-center py-8 px-6 border border-white/5" style={{ height: 284 }}>
              <div className="text-center">
                <p className="text-[#d4af37] text-xs tracking-[0.35em] uppercase mb-4">L'engagement David Roma</p>
                <p
                  className="text-white leading-relaxed"
                  style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.2rem, 2vw, 1.6rem)', letterSpacing: '-0.01em' }}
                >
                  "Chaque pièce est sélectionnée personnellement en Italie et vous parvient à un prix que vous ne trouverez nulle part ailleurs."
                </p>
                <div className="w-12 h-px bg-[#d4af37] mx-auto mt-6" />
              </div>
            </div>
          </div>

          {/* RANGÉE 4 : 4 colonnes égales */}
          <div className="grid grid-cols-4 gap-3">
            <CollectionCard col={collections[7]} height={440} delay={0} />
            <CollectionCard col={collections[8]} height={440} delay={0.08} />
            <CollectionCard col={collections[9]} height={440} delay={0.16} />
            <CollectionCard col={collections[10]} height={440} delay={0.24} />
          </div>

        </div>
      </section>

      {/* ===== CTA ===== */}
      <AnimatedSection>
        <section className="py-32 px-4" style={{ background: '#111' }}>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-[#d4af37] text-xs tracking-[0.4em] uppercase mb-6">Showroom · Dakar</p>
            <h2
              className="text-white mb-6"
              style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', letterSpacing: '-0.02em' }}
            >
              Une question sur nos collections ?
            </h2>
            <p className="text-gray-400 text-xl mb-4 leading-relaxed max-w-2xl mx-auto">
              Prenez rendez-vous et bénéficiez des conseils personnalisés de David Roma — 15+ ans d'expérience au service de votre style.
            </p>
            <p className="text-[#d4af37] text-base mb-12 italic" style={{ fontFamily: 'var(--font-serif)' }}>
              Originaux italiens · Prix inférieurs à l'Italie · Conseil expert inclus
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-3 bg-[#d4af37] text-black px-10 py-5 hover:bg-[#c49d2e] transition-all duration-300 hover:scale-105"
              >
                <span style={{ letterSpacing: '0.08em', fontSize: '0.8rem' }}>PRENDRE RENDEZ-VOUS</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-3 border border-white/20 text-white px-10 py-5 hover:border-white/50 transition-all duration-300 hover:scale-105"
              >
                <span style={{ letterSpacing: '0.08em', fontSize: '0.8rem' }}>NOUS CONTACTER</span>
              </Link>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
}