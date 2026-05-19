// ============================================================
// FICHIER DE CONFIGURATION — DAVID ROMA
// ============================================================
// Ce fichier ne contient plus que les données brutes (non traduisibles).
// Les textes descriptifs ont été déplacés dans src/i18n.ts pour le multilingue.
// ============================================================

export interface HoraireItem {
  joursKey: string;
  heures: string;
}

export interface SiteConfig {
  nom_boutique: string;
  telephone: string;
  telephone_italie: string;
  whatsapp: string;
  whatsapp_italie: string;
  email: string;
  adresse: string;
  horaires: HoraireItem[];
  proprietaire: {
    nom: string;
    experience_annees: number;
    photo: string | null;
  };
}

export const SITE_CONFIG: SiteConfig = {

  // ---- INFORMATIONS GÉNÉRALES ----
  nom_boutique: 'David Roma',

  // ---- CONTACT ----
  telephone: '+221 78 525 14 38',
  telephone_italie: '+39 389 028 9574',
  whatsapp: '221785251438',
  whatsapp_italie: '393890289574',
  email: 'davidmodou1@me.com',
  adresse: 'SICAP Liberté 1, à côté BRT Liberté 1, Dakar, Sénégal',

  // ---- HORAIRES ----
  horaires: [
    { joursKey: 'horaires.week', heures: '10h00 — 21h00' },
    { joursKey: 'horaires.sun', heures: '15h00 — 20h00' },
  ],

  // ---- PROPRIÉTAIRE ----
  proprietaire: {
    nom: 'David Roma',
    experience_annees: 15,
    photo: null as string | null,
  },
};