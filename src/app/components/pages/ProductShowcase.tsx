import { useParams, Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { AnimatedSection } from '../AnimatedSection';
import costumeImg from '../../../imports/Costume2.jpeg';
import costume3Img from '../../../imports/Costume3.jpeg';
import costume32Img from '../../../imports/Costume3-2.jpeg';
import chemiseImg from '../../../imports/Chemise.jpeg';
import chaussureImg from '../../../imports/Chaussure7.jpeg';
import chaussure9Img from '../../../imports/Chaussure9.jpeg';
import cravateImg from '../../../imports/Cravate.jpg';
import poloImg from '../../../imports/Polo2.jpeg';
import tshirtImg from '../../../imports/T-shirt1.jpeg';
import tshirt2Img from '../../../imports/T-shirt-1.jpeg';
import pantalonImg from '../../../imports/pentalon.jpeg';
import pantalon5Img from '../../../imports/pentalon5.jpeg';
import pantalon51Img from '../../../imports/pentalon5-1.jpeg';
import pantalon7Img from '../../../imports/pentalon7.jpeg';
import pantalon71Img from '../../../imports/pentalon7-1.jpeg';
import pantalon8Img from '../../../imports/pentalon8.jpeg';
import pantalon81Img from '../../../imports/pentalon8-1.jpeg';
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

export function ProductShowcase() {
  const { category } = useParams();

  const productData: Record<string, any> = {
    costumes: {
      title: 'Costumes',
      images: [costumeImg, costume3Img, costume32Img],
      description: "Nos costumes sont confectionnés en Italie avec des tissus d'exception. Chaque pièce est taillée pour offrir une coupe impeccable et un confort optimal.",
      fabric: 'Laine Super 150s, Cachemire blend',
      origin: 'Fabriqué en Italie',
      advice: 'Parfait pour les occasions formelles, mariages et événements professionnels. Associez-le à une chemise blanche et une cravate sobre pour un look irréprochable.',
    },
    blazers: {
      title: 'Blazers',
      images: [blazer3Img, blazerImg, blazer1Img, blazer2Img],
      description: "La pièce maîtresse de l'élégance masculine. Nos blazers italiens transforment instantanément n'importe quelle tenue — du casual sophistiqué au formel impeccable. Une coupe soignée, des tissus nobles, des finitions parfaites.",
      fabric: 'Laine italienne, Cachemire blend, Mélanges nobles',
      origin: 'Fabriqué en Italie',
      advice: "Un blazer bien coupé se porte sur un jean pour un look smart casual, ou sur un pantalon de costume pour une élégance affirmée. Osez les associations de couleurs : blazer marine sur pantalon beige, blazer gris sur pantalon bordeaux.",
    },
    chemises: {
      title: 'Chemises',
      images: [chemiseImg],
      description: 'Chemises en coton premium et lin italien, conçues pour allier élégance et confort au quotidien.',
      fabric: 'Coton premium italien, Lin italien',
      origin: 'Fabriqué en Italie',
      advice: "Idéales pour le bureau ou les occasions décontractées élégantes. Le col doit toujours être impeccable — un seul bouton déboutonné sans cravate.",
    },
    cravates: {
      title: 'Cravates',
      images: [cravateImg],
      description: 'Accessoires en soie pure, tissés avec soin pour parfaire votre tenue avec raffinement.',
      fabric: 'Soie 100%',
      origin: 'Fabriqué en Italie',
      advice: "L'accessoire indispensable pour compléter votre costume. Le nœud doit toucher légèrement le col de votre chemise.",
    },
    chaussures: {
      title: 'Chaussures',
      images: [chaussureImg, chaussure9Img],
      description: 'Chaussures en cuir véritable, confectionnées à la main selon la tradition artisanale italienne.',
      fabric: 'Cuir véritable italien',
      origin: 'Fabriqué en Italie',
      advice: 'Assurez-vous que la couleur de vos chaussures correspond toujours à celle de votre ceinture. Noir avec noir, marron avec marron.',
    },
    polos: {
      title: 'Polos',
      images: [poloImg],
      description: 'Polos en coton piqué premium, pour un style décontracté raffiné.',
      fabric: 'Coton piqué premium',
      origin: 'Fabriqué en Italie',
      advice: 'Parfaits pour le week-end ou un dress code business casual. Associez-les à un pantalon kaki pour un look estival élégant.',
    },
    tshirts: {
      title: 'T-shirts',
      images: [tshirtImg, tshirt2Img],
      description: 'T-shirts premium en coton italien de haute qualité. Confort exceptionnel et élégance décontractée.',
      fabric: 'Coton peigné italien 100%',
      origin: 'Fabriqué en Italie',
      advice: 'Essentiels pour un style casual luxueux. Parfaits seuls ou sous une veste de costume pour un look smart casual.',
    },
    pantalons: {
      title: 'Pantalons',
      images: [pantalonImg, pantalon5Img, pantalon51Img, pantalon7Img, pantalon71Img, pantalon8Img, pantalon81Img],
      description: 'Pantalons italiens confectionnés dans des tissus nobles et résistants. Coupe élégante et confortable.',
      fabric: 'Laine italienne, Coton premium, Mélanges techniques',
      origin: 'Fabriqué en Italie',
      advice: 'Associez-les toujours à une ceinture de même couleur que vos chaussures pour un look parfaitement coordonné.',
    },
    'pantalons-kaki': {
      title: 'Pantalons Kaki & Colorés',
      images: [pantalon8Img],
      description: "Pantalons kaki, beige et colorés confectionnés en Italie dans des tissus légers et confortables. La pièce polyvalente de votre garde-robe.",
      fabric: 'Coton léger premium, Mélanges techniques italiens',
      origin: 'Fabriqué en Italie',
      advice: "Portez-le avec une veste marine pour un look business casual parfait, ou avec un polo pour le week-end.",
    },
    ceintures: {
      title: 'Ceintures',
      images: [ceintureImg, ceinture1Img, ceinture2Img, ceinture3Img, ceinture4Img, ceinture5Img],
      description: "Ceintures en cuir véritable fabriquées en Italie. Du classique noir au marron cognac, en passant par des modèles texturés et colorés.",
      fabric: 'Cuir pleine fleur italien, Cuir box-calf',
      origin: 'Fabriqué en Italie',
      advice: "Règle d'or : votre ceinture doit toujours être de la même couleur que vos chaussures. Ce détail suffit à transformer un look ordinaire en look soigné.",
    },
    chaussettes: {
      title: 'Chaussettes',
      images: [chaussetteImg, chaussette1Img],
      description: "Chaussettes premium italiennes en coton et laine de qualité. Disponibles en uni, rayures et motifs discrets.",
      fabric: 'Coton Mercérisé, Laine Mérinos, Fil de qualité italienne',
      origin: 'Fabriqué en Italie',
      advice: "Pour un look formel, choisissez des chaussettes assorties à votre pantalon. Évitez toujours les chaussettes blanches avec un costume.",
    },
  };

  const product = productData[category || 'costumes'] || productData.costumes;

  return (
    <div>
      <Helmet>
        <title>{product.title} — David Roma | Originaux italiens à Dakar</title>
        <meta name="description" content={`${product.title} italiens authentiques chez David Roma à Dakar. ${product.description} ${product.origin}.`} />
        <meta property="og:title" content={`${product.title} — David Roma Dakar`} />
        <meta property="og:description" content={product.description} />
      </Helmet>

      {/* Back */}
      <div className="bg-black py-6 px-4 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <Link to="/collections" className="inline-flex items-center gap-2 text-[#d4af37] hover:text-white transition-colors duration-300 group">
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            <span>Retour aux collections</span>
          </Link>
        </div>
      </div>

      {/* Product Showcase */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

              {/* Images */}
              <div className="space-y-6">
                {product.images.map((image: string, index: number) => (
                  <div key={index} className="overflow-hidden">
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                      src={image}
                      alt={`${product.title} ${index + 1} — David Roma Dakar`}
                      className="w-full h-[700px] object-cover"
                    />
                  </div>
                ))}
              </div>

              {/* Details */}
              <div className="space-y-10 lg:sticky lg:top-32 lg:self-start">
                <div>
                  <h1 className="mb-6 text-[#0a0a0a]"
                    style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', letterSpacing: '-0.02em' }}>
                    {product.title}
                  </h1>
                  <div className="w-24 h-[3px] bg-[#d4af37] mb-8"></div>
                  <p className="text-gray-700 text-xl leading-relaxed">{product.description}</p>
                </div>

                {/* Argument prix */}
                <div className="bg-gradient-to-r from-[#d4af37]/10 to-transparent border-l-4 border-[#d4af37] p-6">
                  <p className="text-[#0a0a0a] font-medium mb-1" style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem' }}>
                    100% Original · Moins cher qu'en Italie
                  </p>
                  <p className="text-gray-600 text-sm">Achat direct auprès des ateliers italiens — zéro intermédiaire</p>
                </div>

                <div className="border-t border-gray-200 pt-8 space-y-6">
                  <div>
                    <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-3" style={{ letterSpacing: '0.15em' }}>Tissu</h3>
                    <p className="text-gray-800 text-lg">{product.fabric}</p>
                  </div>
                  <div>
                    <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-3" style={{ letterSpacing: '0.15em' }}>Origine</h3>
                    <p className="text-gray-800 text-lg">{product.origin}</p>
                  </div>
                  <div>
                    <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-3" style={{ letterSpacing: '0.15em' }}>Conseil de style</h3>
                    <p className="text-gray-800 text-lg leading-relaxed">{product.advice}</p>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-8 space-y-4">
                  <Link to="/contact"
                    className="block w-full text-center bg-[#0f2557] text-white px-8 py-5 hover:bg-[#0a1a3a] transition-all duration-300 hover:scale-[1.02]"
                    style={{ letterSpacing: '0.05em' }}>
                    Nous contacter
                  </Link>
                  <Link to="/contact"
                    className="block w-full text-center border-2 border-[#0f2557] text-[#0f2557] px-8 py-5 hover:bg-[#0f2557] hover:text-white transition-all duration-300 hover:scale-[1.02]"
                    style={{ letterSpacing: '0.05em' }}>
                    Prendre rendez-vous
                  </Link>
                </div>

                <div className="bg-gradient-to-br from-[#0f2557] to-black text-white p-8 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#d4af37] rounded-full blur-[80px] opacity-30"></div>
                  <div className="relative z-10">
                    <h3 className="mb-4 text-[#d4af37]" style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}>
                      Made in Italy · Prix imbattables
                    </h3>
                    <ul className="space-y-3 text-gray-200">
                      {[
                        'Pièce 100% originale, jamais une imitation',
                        'Achat direct auprès des ateliers italiens',
                        "Moins cher que les prix pratiqués en Italie",
                        "15+ ans d'expérience pour sélectionner le meilleur",
                      ].map((point, i) => (
                        <li key={i} className="flex items-start gap-3">
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