import { Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle, Star, ShieldCheck, Scissors, Banknote, Award } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { AnimatedSection } from '../AnimatedSection';
import { SITE_CONFIG } from '../../../content';
import heroImage from '../../../imports/Costume2.jpeg';
import chemiseImg from '../../../imports/Chemise.jpeg';
import chaussureImg from '../../../imports/Chaussure7.jpeg';
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

export function Home() {
  const categories = [
    { name: 'Costumes', image: heroImage, path: '/collection/costumes' },
    { name: 'Chemises', image: chemiseImg, path: '/collection/chemises' },
    { name: 'Pantalons', image: pantalonImg, path: '/collection/pantalons' },
    { name: 'Chaussures', image: chaussureImg, path: '/collection/chaussures' },
    { name: 'Ceintures', image: ceintureImg, path: '/collection/ceintures' },
    { name: 'Chaussettes', image: chaussetteImg, path: '/collection/chaussettes' },
    { name: 'Cravates', image: cravateImg, path: '/collection/cravates' },
    { name: 'Polos', image: poloImg, path: '/collection/polos' },
    { name: 'T-shirts', image: tshirtImg, path: '/collection/tshirts' },
  ];

  const flatlays = [
    { img: complet1Img, label: 'Look Business Casual', desc: 'Pantalon bleu clair · Chemise imprimée · Veste marine · Oxford marine' },
    { img: complet2Img, label: 'Look Classique Gris', desc: 'Costume gris prince-de-galles · Chemise bleue · Oxford marron' },
    { img: complet3Img, label: 'Look Décontracté Chic', desc: 'Pantalon blanc · Veste bleue · Chemise denim · Mocassins' },
  ];

  const prixPoints = [
    { icon: ShieldCheck, titre: '100% Originaux', detail: 'Jamais des imitations, toujours des pièces authentiques' },
    { icon: Scissors, titre: 'Achat direct', detail: 'Directement auprès des ateliers italiens, sans intermédiaires' },
    { icon: Banknote, titre: 'Prix réduits', detail: "Jusqu'à 40% moins cher que les prix pratiqués en Italie" },
    { icon: Award, titre: 'Expert sur place', detail: '15+ ans en Italie pour sélectionner les meilleures pièces' },
  ];

  return (
    <div>
      <Helmet>
        <title>David Roma — Mode italienne authentique à Dakar</title>
        <meta name="description" content="David Roma, mode masculine italienne à Dakar. Produits 100% originaux fabriqués en Italie à des prix inférieurs. 15+ ans d'expérience. Costumes, chemises, chaussures, ceintures, chaussettes." />
        <meta name="keywords" content="mode homme Dakar, costume italien Sénégal, David Roma, produits originaux italiens Dakar, SICAP Liberté" />
        <meta property="og:title" content="David Roma — Mode italienne authentique à Dakar" />
        <meta property="og:description" content="Produits italiens authentiques à Dakar. 15+ ans d'expérience en Italie. Zéro intermédiaire = prix réduits." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://davidroma.sn/" />
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
            L'élégance italienne,
            <br /><span className="text-[#d4af37]">au cœur de Dakar</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-12 text-gray-200 text-xl max-w-2xl mx-auto"
          >
            {SITE_CONFIG.sous_slogan}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/collections" className="group inline-flex items-center gap-3 bg-[#d4af37] text-black px-10 py-5 hover:bg-[#c49d2e] transition-all duration-300 hover:scale-105">
              <span style={{ letterSpacing: '0.05em' }}>Découvrir la collection</span>
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-3 border-2 border-white text-white px-10 py-5 hover:bg-white hover:text-black transition-all duration-300 hover:scale-105">
              <span style={{ letterSpacing: '0.05em' }}>Prendre rendez-vous</span>
            </Link>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 1 }} className="absolute bottom-12 left-1/2 -translate-x-1/2">
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="w-[2px] h-16 bg-gradient-to-b from-transparent via-white to-transparent" />
        </motion.div>
      </section>

      {/* ===== PRIX IMBATTABLES ===== */}
      <section className="py-24 px-4 bg-gradient-to-br from-[#0f2557] via-[#0a1a3a] to-black text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#d4af37] rounded-full blur-[200px] opacity-10"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <AnimatedSection>
            <div className="text-center mb-16">
              <p className="text-[#d4af37] text-sm tracking-widest mb-4">NOTRE ENGAGEMENT</p>
              <h2 className="mb-4 text-white" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3.5rem)', letterSpacing: '-0.02em' }}>
                {SITE_CONFIG.prix.titre}
              </h2>
              <p className="text-[#d4af37] text-2xl mb-6" style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic' }}>
                {SITE_CONFIG.prix.sous_titre}
              </p>
              <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">{SITE_CONFIG.prix.description}</p>
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
              L'excellence italienne
              <br /><span className="text-[#d4af37]">pour l'homme moderne</span>
            </h2>
            <p className="text-gray-600 text-xl leading-relaxed">
              David Roma incarne l'alliance parfaite entre l'élégance intemporelle de la mode italienne
              et le raffinement de la clientèle africaine. Chaque pièce est soigneusement sélectionnée
              en Italie pour vous offrir le meilleur du savoir-faire transalpin.
            </p>
          </div>
        </section>
      </AnimatedSection>

      {/* ===== COLLECTIONS ===== */}
      <section className="py-32 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <h2 className="text-center mb-20 text-white" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', letterSpacing: '-0.02em' }}>
              Nos <span className="text-[#d4af37]">Collections</span>
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
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
              <div>
                <p className="text-[#d4af37] text-sm tracking-widest mb-4">EXPERTISE DAVID ROMA</p>
                <h2 className="mb-6 text-[#0a0a0a]" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3.5rem)', letterSpacing: '-0.02em' }}>
                  Conseils <span className="text-[#d4af37]">Style</span>
                </h2>
                <p className="text-gray-600 text-xl leading-relaxed mb-8">
                  Fort de 15+ ans d'expérience en Italie, David Roma vous guide pour vous habiller avec élégance et assurance au quotidien.
                </p>
                <Link to="/contact" className="inline-flex items-center gap-2 bg-[#0f2557] text-white px-8 py-4 hover:bg-[#0a1a3a] transition-all duration-300 hover:scale-105">
                  <span style={{ letterSpacing: '0.05em' }}>Conseil personnalisé</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.5 }} className="overflow-hidden">
                <img src={styleImg} alt="Style David Roma — élégance masculine italienne" className="w-full h-[500px] object-cover object-top" />
              </motion.div>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
            {SITE_CONFIG.conseils.map((conseil, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.3 }}
                  className="bg-white p-8 border-l-4 border-[#d4af37] shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-[#d4af37] flex items-center justify-center text-black font-bold text-lg">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="mb-3 text-[#0a0a0a] text-xl" style={{ fontFamily: 'var(--font-serif)' }}>{conseil.titre}</h3>
                      <p className="text-gray-600 leading-relaxed">{conseil.conseil}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>

          {/* FLATLAYS */}
          <AnimatedSection>
            <div className="text-center mb-12">
              <p className="text-[#d4af37] text-sm tracking-widest mb-3">INSPIRATIONS</p>
              <h3 className="text-[#0a0a0a]" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', letterSpacing: '-0.01em' }}>
                Tenues <span className="text-[#d4af37]">Complètes</span>
              </h3>
              <p className="text-gray-500 mt-3">Des associations pensées par David Roma — prêtes à porter</p>
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
              Made in Italy
            </h2>
            <p className="text-gray-200 text-xl leading-relaxed mb-16 max-w-3xl mx-auto">
              Nos vêtements et chaussures sont confectionnés en Italie par des artisans d'exception.
              Achetés directement à la source, ils vous reviennent{' '}
              <strong className="text-[#d4af37]">moins cher qu'en boutique en Italie</strong>.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { value: '100%', label: 'Originaux italiens' },
                { value: '15+', label: "Ans d'expérience en Italie" },
                { value: '-40%', label: 'vs prix en Italie' },
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
              Visitez notre showroom
              <br /><span className="text-[#d4af37]">à Dakar</span>
            </h2>
            <p className="text-gray-600 text-xl mb-12 leading-relaxed">{SITE_CONFIG.adresse}</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-[#0f2557] text-white px-10 py-5 hover:bg-[#0a1a3a] transition-all duration-300 hover:scale-105">
                <span>Prendre rendez-vous</span>
              </Link>
              <Link to="/collections" className="inline-flex items-center justify-center gap-2 border-2 border-[#0f2557] text-[#0f2557] px-10 py-5 hover:bg-[#0f2557] hover:text-white transition-all duration-300 hover:scale-105">
                <span>Voir les collections</span>
              </Link>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
}