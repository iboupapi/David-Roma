import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { Award, Star, MapPin, ShieldCheck, Scissors, Banknote, Users } from 'lucide-react';
import { AnimatedSection } from '../AnimatedSection';
import { SITE_CONFIG } from '../../../content';
import costumeImg from '../../../imports/Costume3.jpeg';
import chemiseImg from '../../../imports/Chemise.jpeg';
import proprietaireImg from '../../../imports/propriétaire.jpeg';
import proprietaireHakilImg from '../../../imports/propriétaire_Hakil.jpeg';
import proprietaire2Img from '../../../imports/propriétaire2.jpeg';
import proprietaireConseilImg from '../../../imports/propriétaireConseil.jpeg';
import proprietaireConseil1Img from '../../../imports/propriétaireConseil1.jpeg';
import proprietairePapeDiopImg from '../../../imports/propriétaire_pape_diop.jpeg';
import costume4Img from '../../../imports/Costume4.jpeg';
import costume5Img from '../../../imports/Costume5.jpeg';

export function About() {
  const values = [
    { title: 'Élégance', description: "Chaque pièce est sélectionnée pour incarner le raffinement et la sophistication à l'italienne." },
    { title: 'Qualité', description: 'Des tissus premium et une confection artisanale garantissent une durabilité exceptionnelle.' },
    { title: 'Authenticité', description: "Un engagement total envers l'excellence du Made in Italy et l'identité sénégalaise." },
  ];

  const prixPoints = [
    { icon: ShieldCheck, titre: "Directement de l'atelier", detail: 'Achat à la source, en Italie' },
    { icon: Scissors, titre: 'Zéro intermédiaire', detail: 'Pas de distributeur ni de revendeur' },
    { icon: Banknote, titre: 'Prix imbattables', detail: "Jusqu'à 40% moins cher qu'en Italie" },
  ];

  return (
    <div>
      <Helmet>
        <title>À Propos — David Roma | 15+ ans d'expérience en Italie</title>
        <meta name="description" content="Découvrez David Roma, expert mode italienne avec plus de 15 ans d'expérience en Italie. Partenariats directs avec les ateliers italiens. Originaux moins chers qu'en Italie à Dakar." />
        <meta name="keywords" content="David Roma histoire, mode italienne Dakar, expert mode Sénégal, 15 ans Italie" />
        <meta property="og:title" content="À Propos — David Roma | Expert mode italienne à Dakar" />
        <meta property="og:description" content="15+ ans d'expérience en Italie. Partenariats directs ateliers italiens. Originaux moins chers qu'en Italie." />
        <link rel="canonical" href="https://davidroma.sn/a-propos" />
      </Helmet>

      {/* Hero */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <motion.div initial={{ scale: 1.1 }} animate={{ scale: 1 }} transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }} className="absolute inset-0">
          <img src={costumeImg} alt="David Roma — Élégance masculine italienne à Dakar" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
        </motion.div>
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(3rem, 7vw, 5rem)', letterSpacing: '-0.02em' }}>
            À Propos
          </motion.h1>
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.8, delay: 0.5 }}
            className="w-24 h-[3px] bg-[#d4af37] mx-auto mt-6" />
        </div>
      </section>

      {/* ===== PRÉSENTATION DU PROPRIÉTAIRE ===== */}
      <section className="py-32 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.5 }} className="overflow-hidden">
                  <img src={proprietaireImg} alt="David Roma — Fondateur dans sa boutique à Dakar" className="w-full h-[620px] object-cover object-top" />
                </motion.div>
                <div className="absolute -bottom-6 -right-6 bg-[#d4af37] text-black p-6 text-center shadow-xl">
                  <p className="text-4xl font-bold" style={{ fontFamily: 'var(--font-serif)' }}>15+</p>
                  <p className="text-sm tracking-wider mt-1">ANS EN ITALIE</p>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <p className="text-[#d4af37] text-sm tracking-widest mb-3">LE FONDATEUR</p>
                  <h2 className="mb-2 text-[#0a0a0a]" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.02em' }}>
                    {SITE_CONFIG.proprietaire.nom}
                  </h2>
                  <p className="text-gray-500 text-lg mb-6">{SITE_CONFIG.proprietaire.titre}</p>
                  <div className="w-16 h-[3px] bg-[#d4af37] mb-8"></div>
                </div>
                <p className="text-gray-700 text-xl leading-relaxed">{SITE_CONFIG.proprietaire.description}</p>
                <blockquote className="border-l-4 border-[#d4af37] pl-6 py-2">
                  <p className="text-gray-600 text-lg italic leading-relaxed" style={{ fontFamily: 'var(--font-serif)' }}>
                    "{SITE_CONFIG.proprietaire.citation}"
                  </p>
                  <cite className="text-[#d4af37] text-sm tracking-wider mt-3 block">— {SITE_CONFIG.proprietaire.nom}</cite>
                </blockquote>
                <div className="grid grid-cols-1 gap-4 pt-4">
                  {SITE_CONFIG.proprietaire.expertise.map((point, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-[#d4af37] rounded-full flex items-center justify-center">
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

      {/* ===== EN ACTION — 4 photos ===== */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <p className="text-[#d4af37] text-sm tracking-widest mb-4">AU QUOTIDIEN</p>
              <h2 className="text-[#0a0a0a]" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.02em' }}>
                David Roma <span className="text-[#d4af37]">en Action</span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { img: proprietaire2Img, alt: 'David Roma dans un atelier de luxe en Italie', titre: 'En Italie', desc: 'Sélection personnelle dans les meilleurs ateliers italiens.' },
              { img: proprietaireHakilImg, alt: "David Roma habillant un client", titre: "L'Habillage", desc: 'Accompagnement personnalisé pour une tenue parfaitement ajustée.' },
              { img: proprietaireConseilImg, alt: 'David Roma conseillant un client sur les tissus', titre: 'Le Conseil', desc: 'Choix des tissus, des couleurs et des associations.' },
              { img: proprietaireConseil1Img, alt: 'David Roma et un client dans la boutique', titre: 'La Boutique', desc: 'Un accueil chaleureux dans un espace pensé pour vous.' },
            ].map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.12}>
                <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.3 }}>
                  <div className="overflow-hidden mb-4">
                    <motion.img whileHover={{ scale: 1.05 }} transition={{ duration: 0.6 }}
                      src={item.img} alt={item.alt}
                      className="w-full h-[340px] object-cover object-top" />
                  </div>
                  <div className="border-l-4 border-[#d4af37] pl-4">
                    <h3 className="text-[#0a0a0a] text-lg mb-1" style={{ fontFamily: 'var(--font-serif)' }}>{item.titre}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ILS FONT CONFIANCE ===== */}
      {/* <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <Users className="h-10 w-10 text-[#d4af37] mx-auto mb-4" />
              <p className="text-[#d4af37] text-sm tracking-widest mb-4">RÉFÉRENCES</p>
              <h2 className="text-[#0a0a0a]" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.02em' }}>
                Ils font <span className="text-[#d4af37]">confiance à David Roma</span>
              </h2>
              <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
                Des personnalités publiques, des hommes d'affaires et des leaders choisissent David Roma pour leur élégance.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedSection delay={0}>
              <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.5 }} className="overflow-hidden relative group">
                <img src={proprietairePapeDiopImg} alt="David Roma avec Pape Diop dans la boutique"
                  className="w-full h-[500px] object-cover object-top" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-white text-lg" style={{ fontFamily: 'var(--font-serif)' }}>Pape Diop</p>
                  <p className="text-[#d4af37] text-sm tracking-wider">Personnalité publique sénégalaise</p>
                </div>
              </motion.div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div className="flex flex-col gap-8 h-full justify-center">
                <blockquote className="bg-gray-50 p-8 border-l-4 border-[#d4af37]">
                  <p className="text-gray-700 text-xl italic leading-relaxed mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
                    "Quand on veut s'habiller avec classe à Dakar sans aller en Italie, David Roma est la référence."
                  </p>
                  <cite className="text-[#d4af37] text-sm tracking-wider">— Un client fidèle</cite>
                </blockquote>

                <div className="bg-gradient-to-br from-[#0f2557] to-black text-white p-8 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#d4af37] rounded-full blur-[80px] opacity-20"></div>
                  <div className="relative z-10">
                    <Award className="h-8 w-8 text-[#d4af37] mb-4" />
                    <h3 className="text-[#d4af37] text-xl mb-3" style={{ fontFamily: 'var(--font-serif)' }}>
                      La confiance, ça se mérite
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      Des célébrités aux hommes d'affaires, David Roma habille ceux qui exigent le meilleur —
                      avec des pièces authentiques à des prix que même l'Italie ne peut pas offrir.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section> */}

      {/* ===== ARGUMENT PRIX ===== */}
      <section className="py-24 px-4 bg-gradient-to-br from-[#0f2557] to-black text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#d4af37] rounded-full blur-[180px] opacity-10"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <AnimatedSection>
            <Award className="h-12 w-12 text-[#d4af37] mx-auto mb-6" />
            <h2 className="mb-6 text-white" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.02em' }}>
              Pourquoi moins cher qu'en Italie ?
            </h2>
            <p className="text-gray-300 text-xl leading-relaxed max-w-3xl mx-auto mb-12">
              En 15 ans passés en Italie, David Roma a tissé des relations directes avec les fabricants et ateliers.
              Ces partenariats exclusifs éliminent tous les intermédiaires et vous permettent d'accéder
              aux mêmes produits originaux à des prix que vous ne trouverez nulle part ailleurs à Dakar.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {prixPoints.map((item, index) => (
                <AnimatedSection key={index} delay={index * 0.15}>
                  <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.3 }}
                    className="bg-white/5 border border-white/10 p-8 hover:border-[#d4af37]/40 transition-colors duration-300">
                    <item.icon className="h-8 w-8 text-[#d4af37] mx-auto mb-4" />
                    <h3 className="text-[#d4af37] text-xl mb-3" style={{ fontFamily: 'var(--font-serif)' }}>{item.titre}</h3>
                    <p className="text-gray-400">{item.detail}</p>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== INSPIRATIONS STYLE ===== */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <p className="text-[#d4af37] text-sm tracking-widest mb-4">SÉLECTION DAVID ROMA</p>
              <h2 className="text-[#0a0a0a]" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.02em' }}>
                Inspirations <span className="text-[#d4af37]">Style</span>
              </h2>
              <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
                Des looks pensés par David Roma pour vous inspirer au quotidien.
              </p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedSection delay={0}>
              <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.5 }} className="overflow-hidden">
                <img src={costume4Img} alt="Look formel — costume 3 pièces marine David Roma" className="w-full h-[600px] object-cover object-top" />
              </motion.div>
              <p className="text-center text-gray-500 mt-4 text-sm tracking-wider uppercase">Look Formel — Costume 3 Pièces</p>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.5 }} className="overflow-hidden">
                <img src={costume5Img} alt="Look sophistiqué — blazer sombre avec écharpe David Roma" className="w-full h-[600px] object-cover object-top" />
              </motion.div>
              <p className="text-center text-gray-500 mt-4 text-sm tracking-wider uppercase">Look Sophistiqué — Blazer & Écharpe</p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ===== HISTOIRE ===== */}
      <AnimatedSection>
        <section className="py-32 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-12 text-[#0a0a0a] text-center" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', letterSpacing: '-0.02em' }}>
              Notre <span className="text-[#d4af37]">Histoire</span>
            </h2>
            <div className="space-y-8 text-gray-700 text-xl leading-relaxed">
              <p>David Roma est né d'une passion pour l'élégance masculine et d'un profond respect pour le savoir-faire italien. Basée à Dakar, notre maison célèbre l'union entre l'identité sénégalaise et l'excellence de la mode transalpine.</p>
              <p>Chaque costume, chemise ou paire de chaussures que nous proposons est fabriqué en Italie, berceau historique de la haute couture masculine. Nous travaillons avec des ateliers renommés qui perpétuent des traditions artisanales centenaires.</p>
              <p>Notre mission est d'offrir à l'homme africain moderne une garde-robe qui reflète son succès, son raffinement et son goût pour l'excellence — à des prix qu'il ne trouverait pas même en allant directement en Italie.</p>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ===== VALEURS ===== */}
      <section className="py-32 px-4 bg-gradient-to-br from-black via-[#0a0a0a] to-[#0f2557] text-white">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <h2 className="mb-20 text-white text-center" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', letterSpacing: '-0.02em' }}>
              Nos <span className="text-[#d4af37]">Valeurs</span>
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {values.map((value, index) => (
              <AnimatedSection key={index} delay={index * 0.15}>
                <motion.div whileHover={{ y: -10 }} transition={{ duration: 0.3 }} className="text-center group">
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[#d4af37] to-[#c49d2e] rounded-full flex items-center justify-center transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12">
                    <Star className="h-8 w-8 text-black" />
                  </div>
                  <h3 className="mb-4 text-[#d4af37]" style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem' }}>{value.title}</h3>
                  <p className="text-gray-300 text-lg leading-relaxed">{value.description}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ARTISANAT ===== */}
      <AnimatedSection>
        <section className="py-32 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.5 }} className="overflow-hidden">
                <img src={chemiseImg} alt="Artisanat et confection italienne — chemise David Roma" className="w-full h-[600px] object-cover" />
              </motion.div>
              <div className="space-y-8">
                <h2 className="text-[#0a0a0a]" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', letterSpacing: '-0.02em' }}>
                  L'Art du <span className="text-[#d4af37]">Détail</span>
                </h2>
                <div className="w-24 h-[3px] bg-[#d4af37]"></div>
                <p className="text-gray-700 text-xl leading-relaxed">
                  De la sélection des tissus les plus nobles à la finition minutieuse de chaque couture, nos partenaires italiens accordent une attention obsessionnelle aux détails.
                </p>
                <p className="text-gray-700 text-xl leading-relaxed">
                  C'est cette quête de perfection qui fait de chaque vêtement David Roma une pièce unique, taillée pour durer et sublimer celui qui la porte.
                </p>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-[#d4af37] flex-shrink-0" />
                  <span className="text-gray-600">{SITE_CONFIG.adresse}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
}