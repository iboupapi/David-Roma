import { Link } from 'react-router';
import { motion } from 'motion/react';
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

const collections = [
  { name: 'Costumes', slug: 'costumes', image: costumeImg, description: "Taillés dans des tissus d'exception" },
  { name: 'Blazers', slug: 'blazers', image: blazerImg, description: 'La pièce maîtresse du style masculin' },
  { name: 'Chemises', slug: 'chemises', image: chemiseImg, description: 'Coton premium & lin italien' },
  { name: 'Pantalons', slug: 'pantalons', image: pantalonImg, description: 'Coupe italienne, tissus nobles' },
  { name: 'Pantalons Kaki', slug: 'pantalons-kaki', image: kakiImg, description: 'Polyvalents, du bureau au week-end' },
  { name: 'Chaussures', slug: 'chaussures', image: chaussureImg, description: 'Cuir véritable, fait main' },
  { name: 'Ceintures', slug: 'ceintures', image: ceintureImg, description: "Cuir pleine fleur d'Italie" },
  { name: 'Cravates', slug: 'cravates', image: cravateImg, description: 'Soie 100% italienne' },
  { name: 'Polos', slug: 'polos', image: poloImg, description: 'Style décontracté raffiné' },
  { name: 'Chaussettes', slug: 'chaussettes', image: chaussetteImg, description: 'Le détail qui fait la différence' },
  { name: 'T-shirts', slug: 'tshirts', image: tshirtImg, description: 'Coton peigné premium' },
];

function CollectionCard({ col, height = 400 }: { col: typeof collections[0]; height?: number }) {
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

export function Collections() {
  return (
    <div style={{ background: '#0a0a0a' }}>
      <Helmet>
        <title>Collections — David Roma | Vêtements & Accessoires italiens à Dakar</title>
        <meta name="description" content="Blazers, costumes, chemises, pantalons, ceintures, chaussettes et chaussures 100% made in Italy. Moins chers qu'en Italie. Showroom David Roma à Dakar, SICAP Liberté 1." />
        <link rel="canonical" href="https://davidroma.sn/collections" />
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
            Made in Italy · 100% Originaux
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(3.5rem, 15vw, 8rem)', letterSpacing: '-0.03em', lineHeight: 0.9 }}
            className="text-white mb-8"
          >
            Collec<span className="text-[#d4af37]">tions</span>
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
            Pièces d'exception fabriquées en Italie — à des prix inférieurs à ceux pratiqués en Italie
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          >
            <span className="text-gray-500 text-xs tracking-widest">DÉCOUVRIR</span>
            <motion.div
              animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}
              className="w-px h-10 bg-gradient-to-b from-[#d4af37] to-transparent"
            />
          </motion.div>
        </div>
      </section>

      {/* ===== BANDEAU ===== */}
      <div className="bg-[#d4af37] py-3 px-4 overflow-hidden">
        <motion.div
          animate={{ x: [0, -600] }}
          transition={{ repeat: Infinity, duration: 18, ease: 'linear' }}
          className="flex gap-12 whitespace-nowrap"
        >
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex gap-12 items-center">
              {["100% Originaux italiens", "Achat direct ateliers", "Zéro intermédiaire", "Moins cher qu'en Italie"].map((txt, j) => (
                <div key={j} className="flex items-center gap-2">
                  <ShieldCheck className="h-3 w-3 text-black flex-shrink-0" />
                  <span className="text-black text-xs tracking-widest uppercase font-medium">{txt}</span>
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>

      {/* ===== GRILLE MOBILE-FIRST ===== */}
      <section className="px-3 py-10 md:px-4 md:py-16" style={{ background: '#0a0a0a' }}>
        <div className="max-w-7xl mx-auto">

          <AnimatedSection>
            <div className="flex items-center gap-6 mb-8">
              <div className="flex-1 h-px bg-white/10" />
              <p className="text-gray-500 text-xs tracking-[0.35em] uppercase whitespace-nowrap">Toutes les collections</p>
              <div className="flex-1 h-px bg-white/10" />
            </div>
          </AnimatedSection>

          {/* MOBILE : 1 colonne pleine largeur
              TABLETTE : 2 colonnes
              DESKTOP : grille éditoriale */}

          {/* Rangée 1 — Costumes (grande) + Blazers */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-3">
            <div className="lg:col-span-2">
              <AnimatedSection delay={0}>
                <CollectionCard col={collections[0]} height={500} />
              </AnimatedSection>
            </div>
            <div>
              <AnimatedSection delay={0.1}>
                <CollectionCard col={collections[1]} height={500} />
              </AnimatedSection>
            </div>
          </div>

          {/* Rangée 2 — Chemises + Pantalons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
            <AnimatedSection delay={0}>
              <CollectionCard col={collections[2]} height={380} />
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <CollectionCard col={collections[3]} height={380} />
            </AnimatedSection>
          </div>

          {/* Rangée 3 — Kaki + Chaussures + encart citation */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-3">
            <AnimatedSection delay={0}>
              <CollectionCard col={collections[4]} height={420} />
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <CollectionCard col={collections[5]} height={420} />
            </AnimatedSection>
            {/* Citation éditoriale — cachée sur mobile, visible à partir de lg */}
            <div className="hidden lg:flex items-center justify-center border border-white/5 px-8 py-10 text-center" style={{ height: 420 }}>
              <div>
                <p className="text-[#d4af37] text-xs tracking-[0.3em] uppercase mb-4">L'engagement David Roma</p>
                <p className="text-white leading-relaxed" style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem' }}>
                  "Chaque pièce est sélectionnée personnellement en Italie et vous parvient à un prix que vous ne trouverez nulle part ailleurs."
                </p>
                <div className="w-10 h-px bg-[#d4af37] mx-auto mt-6" />
              </div>
            </div>
          </div>

          {/* Citation sur mobile uniquement */}
          <div className="lg:hidden border border-white/5 px-6 py-8 text-center mb-3">
            <p className="text-[#d4af37] text-xs tracking-[0.3em] uppercase mb-3">L'engagement David Roma</p>
            <p className="text-white leading-relaxed" style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem' }}>
              "Chaque pièce est sélectionnée personnellement en Italie et vous parvient à un prix que vous ne trouverez nulle part ailleurs."
            </p>
            <div className="w-10 h-px bg-[#d4af37] mx-auto mt-4" />
          </div>

          {/* Rangée 4 — Ceintures + Cravates */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
            <AnimatedSection delay={0}>
              <CollectionCard col={collections[6]} height={380} />
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <CollectionCard col={collections[7]} height={380} />
            </AnimatedSection>
          </div>

          {/* Rangée 5 — Polos + Chaussettes + T-shirts */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <AnimatedSection delay={0}>
              <CollectionCard col={collections[8]} height={360} />
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <CollectionCard col={collections[9]} height={360} />
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <CollectionCard col={collections[10]} height={360} />
            </AnimatedSection>
          </div>

        </div>
      </section>

      {/* ===== CTA ===== */}
      <AnimatedSection>
        <section className="py-20 md:py-32 px-6" style={{ background: '#111' }}>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-[#d4af37] text-xs tracking-[0.4em] uppercase mb-6">Showroom · Dakar</p>
            <h2
              className="text-white mb-6"
              style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 6vw, 4rem)', letterSpacing: '-0.02em' }}
            >
              Une question sur nos collections ?
            </h2>
            <p className="text-gray-400 text-lg mb-4 leading-relaxed">
              Prenez rendez-vous et bénéficiez des conseils personnalisés de David Roma.
            </p>
            <p className="text-[#d4af37] text-base mb-10 italic" style={{ fontFamily: 'var(--font-serif)' }}>
              Originaux italiens · Prix inférieurs à l'Italie · Conseil expert inclus
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact"
                className="group inline-flex items-center justify-center gap-3 bg-[#d4af37] text-black px-8 py-4 hover:bg-[#c49d2e] transition-all duration-300 hover:scale-105">
                <span style={{ letterSpacing: '0.08em', fontSize: '0.8rem' }}>PRENDRE RENDEZ-VOUS</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/contact"
                className="inline-flex items-center justify-center gap-3 border border-white/20 text-white px-8 py-4 hover:border-white/50 transition-all duration-300">
                <span style={{ letterSpacing: '0.08em', fontSize: '0.8rem' }}>NOUS CONTACTER</span>
              </Link>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
}