// ============================================================
// FICHIER DE CONFIGURATION — DAVID ROMA
// ============================================================
// Pour modifier le site, changez uniquement les textes entre guillemets.
// Ne pas toucher à la structure (accolades, virgules, crochets).
// ============================================================

export const SITE_CONFIG = {

  // ---- INFORMATIONS GÉNÉRALES ----
  nom_boutique: 'David Roma',
  slogan: "L'élégance italienne, au cœur de Dakar",
  sous_slogan: "L'excellence du savoir-faire italien au service de l'élégance masculine",

  // ---- CONTACT ----
  telephone: '+221 78 525 14 38',
  telephone_italie: '+39 389 028 9574',
  whatsapp: '221785251438',
  whatsapp_italie: '393890289574',
  email: 'davidmodou1@me.com',
  adresse: 'SICAP Liberté 1, à côté BRT Liberté 1, Dakar, Sénégal',

  // ---- HORAIRES ----
  horaires: [
    { jours: 'Lundi — Samedi', heures: '10h00 — 21h00' },
    { jours: 'Dimanche', heures: '15h00 — 20h00' },
  ],

  // ---- PROPRIÉTAIRE ----
  proprietaire: {
    nom: 'David Roma',
    experience_annees: 15,
    titre: 'Fondateur & Expert Mode Italienne',
    citation: "Mon objectif est simple : vous offrir l'authenticité italienne à un prix juste, sans jamais sacrifier la qualité.",
    description: "Après plus de 15 ans passés au cœur de l'industrie de la mode en Italie, David Roma a forgé des relations exclusives avec les meilleurs ateliers et fabricants italiens. Cette expertise unique lui permet de sélectionner personnellement chaque pièce et de vous les proposer à des prix bien inférieurs à ceux pratiqués en Italie.",
    expertise: [
      "15+ ans d'expérience en Italie",
      'Partenariats directs avec les ateliers italiens',
      'Sélection personnelle de chaque pièce',
      'Conseil en style masculin sur mesure',
    ],
    photo: null as string | null,
  },

  // ---- ARGUMENT PRIX ----
  prix: {
    titre: 'Originaux italiens, prix imbattables',
    sous_titre: "Moins cher qu'en Italie. Sans compromis sur l'authenticité.",
    description: "Grâce à nos partenariats directs avec les fabricants italiens, nous éliminons les intermédiaires. Résultat : des produits 100% originaux et authentiques à des prix significativement inférieurs à ceux pratiqués en boutique en Italie.",
    points: [
      { titre: '100% Originaux', detail: 'Jamais des imitations, toujours des pièces authentiques' },
      { titre: 'Achat direct', detail: 'Directement auprès des ateliers italiens, sans intermédiaires' },
      { titre: 'Prix réduits', detail: "Jusqu'à 40% moins cher que les prix pratiqués en Italie" },
      { titre: 'Expert sur place', detail: '15+ ans en Italie pour sélectionner les meilleures pièces' },
    ],
  },

  // ---- CONSEILS STYLE ----
  conseils: [
    {
      titre: 'Le Costume Parfait',
      conseil: "Un costume bien ajusté est votre meilleur allié. La veste doit épouser vos épaules sans déborder. Associez-le à une chemise blanche et une cravate sobre pour les occasions formelles.",
    },
    {
      titre: "Ceinture & Chaussures : La Règle d'Or",
      conseil: "Assurez-vous toujours que votre ceinture et vos chaussures sont de la même couleur. Noir avec noir, marron avec marron. Ce détail change tout à votre élégance globale.",
    },
    {
      titre: 'Les Chaussettes, le Détail Oublié',
      conseil: "Pour un look formel, choisissez des chaussettes assorties à votre pantalon. Pour une touche de personnalité, osez les motifs discrets. Évitez les chaussettes blanches avec un costume.",
    },
    {
      titre: 'Le Blazer, Pièce Maîtresse',
      conseil: "Un blazer bien coupé transforme instantanément n'importe quelle tenue. Portez-le sur un jean pour un look smart casual, ou sur un pantalon de costume pour une élégance affirmée.",
    },
  ],

};