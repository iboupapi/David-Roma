import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  fr: {
    translation: {
      nav: {
        home: "Accueil",
        about: "À Propos",
        collections: "Collections",
        contact: "Contact",
      },
      footer: {
        tagline: "L'élégance italienne au cœur de Dakar.",
        schedule_week: "Lun - Sam: 10h00 - 21h00",
        schedule_sun: "Dim: 15h00 - 20h00",
        rights: "Tous droits réservés.",
        shop_senegal: "Sénégal",
      },
      home: {
        seo: {
          title: "David Roma — Costume & Vêtements Italiens à Dakar, Sénégal",
          desc: "Achetez des costumes, blazers et vêtements 100% italiens à Dakar au Sénégal. David Roma propose des articles Made in Italy originaux moins chers qu'en Italie. SICAP Liberté 1, Dakar.",
          ogDesc: "Costumes, blazers, chemises et chaussures 100% Made in Italy à Dakar. Originaux moins chers qu'en Italie. SICAP Liberté 1."
        },
        hero: {
          title1: "L'élégance italienne,",
          title2: "au cœur de Dakar",
          btnDiscover: "Découvrir la collection",
          btnAppointment: "Prendre rendez-vous"
        },
        engagement: {
          tag: "NOTRE ENGAGEMENT",
          points: {
            authenticity: { title: "100% Originaux", desc: "Jamais des imitations, toujours des pièces authentiques" },
            direct: { title: "Achat direct", desc: "Directement auprès des ateliers italiens, sans intermédiaires" },
            prices: { title: "Prix réduits", desc: "Jusqu'à 40% moins cher que les prix pratiqués en Italie" },
            expert: { title: "Expert sur place", desc: "15+ ans en Italie pour sélectionner les meilleures pièces" }
          }
        },
        intro: {
          title1: "L'excellence italienne",
          title2: "pour l'homme moderne",
          desc: "L'excellence du savoir-faire italien au service de l'élégance masculine"
        },
        exclusive: {
          badge: "NOUVEAUTÉ EXCLUSIVE",
          tag: "HAUTE CORDONNERIE",
          title1: "Souliers ",
          title2: "Sur Mesure",
          desc1: "David Roma franchit une nouvelle étape dans le prestige. Découvrez notre tout nouveau service de confection artisanale à la commande.",
          desc2: "Chaque paire est fabriquée de manière unique en Italie, moulée selon la morphologie de votre pied avec les cuirs les plus nobles de la péninsule.",
          btn: "PRENDRE RENDEZ-VOUS"
        },
        collections: {
          title1: "Nos ",
          title2: "Collections",
          categories: {
            costumes: "Costumes", chemises: "Chemises", pantalons: "Pantalons",
            chaussures: "Chaussures", ceintures: "Ceintures", chaussettes: "Chaussettes",
            cravates: "Cravates", polos: "Polos", tshirts: "T-shirts"
          }
        },
        style: {
          tag: "EXPERTISE DAVID ROMA",
          title1: "Conseils ",
          title2: "Style",
          desc: "Fort de 15+ ans d'expérience en Italie, David Roma vous guide pour vous habiller avec élégance et assurance au quotidien.",
          btn: "Conseil personnalisé",
          inspirationsTag: "INSPIRATIONS",
          inspirationsTitle1: "Tenues ",
          inspirationsTitle2: "Complètes",
          inspirationsDesc: "Des associations pensées par David Roma — prêtes à porter",
          flatlays: {
            look1: { label: "Look Business Casual", desc: "Pantalon bleu clair · Chemise imprimée · Veste marine · Oxford marine" },
            look2: { label: "Look Classique Gris", desc: "Costume gris prince-de-galles · Chemise bleue · Oxford marron" },
            look3: { label: "Look Décontracté Chic", desc: "Pantalon blanc · Veste bleue · Chemise denim · Mocassins" }
          }
        },
        madeInItaly: {
          title: "Made in Italy",
          desc1: "Nos vêtements et chaussures sont confectionnés en Italie par des artisans d'exception. Achetés directement à la source, ils vous reviennent ",
          desc2: "moins cher qu'en boutique en Italie",
          stats: {
            stat1: "Originaux italiens",
            stat2: "Ans d'expérience en Italie",
            stat3: "vs prix en Italie"
          }
        },
        cta: {
          title1: "Visitez notre showroom",
          title2: "à Dakar",
          btnCollections: "Voir les collections"
        }
      },
      about: {
        seo: {
          title: "À Propos — David Roma | 15+ ans d'expérience en Italie",
          description: "Découvrez l'histoire de David Roma, spécialiste des vêtements et costumes italiens à Dakar avec plus de 15 ans d'expérience en Italie.",
          storeDesc: "Boutique de vêtements et costumes italiens haut de gamme à Dakar.",
          metaDesc: "Découvrez David Roma, expert mode italienne avec plus de 15 ans d'expérience en Italie. Partenariats directs avec les ateliers italiens. Originaux moins chers qu'en Italie à Dakar.",
          keywords: "David Roma histoire, mode italienne Dakar, expert mode Sénégal, vêtements italiens Dakar, costumes italiens Sénégal",
          ogTitle: "À Propos — David Roma | Expert mode italienne à Dakar",
          ogDesc: "15+ ans d'expérience en Italie. Partenariats directs ateliers italiens. Originaux moins chers qu'en Italie."
        },
        hero: {
          title: "À Propos",
          imgAlt: "David Roma — Élégance masculine italienne à Dakar"
        },
        founder: {
          tagline: "LE FONDATEUR",
          experienceBadge: "ANS EN ITALIE",
          imgAlt: "David Roma — Fondateur dans sa boutique à Dakar"
        },
        action: {
          tagline: "AU QUOTIDIEN",
          titleHighlight: "en Action",
          step1: { alt: "David Roma dans un atelier de luxe en Italie", title: "En Italie", desc: "Sélection personnelle dans les meilleurs ateliers italiens." },
          step2: { alt: "David Roma habillant un client", title: "L'Habillage", desc: "Accompagnement personnalisé pour une tenue parfaitement ajustée." },
          step3: { alt: "David Roma conseillant un client sur les tissus", title: "Le Conseil", desc: "Choix des tissus, des couleurs et des associations." },
          step4: { alt: "David Roma et un client dans la boutique", title: "La Boutique", desc: "Un accueil chaleureux dans un espace pensé pour vous." }
        },
        pricing: {
          title: "Pourquoi moins cher qu'en Italie ?",
          description: "En 15 ans passés en Italie, David Roma a tissé des relations directes avec les fabricants et ateliers. Ces partenariats exclusifs éliminent tous les intermédiaires et vous permettent d'accéder aux mêmes produits originaux à des prix que vous ne trouverez nulle part ailleurs à Dakar.",
          atelier: { title: "Directement de l'atelier", detail: "Achat à la source, en Italie" },
          intermediary: { title: "Zéro intermédiaire", detail: "Pas de distributeur ni de revendeur" },
          unbeatable: { title: "Prix imbattables", detail: "Jusqu'à 40% moins cher qu'en Italie" }
        },
        inspiration: {
          tagline: "SÉLECTION DAVID ROMA",
          title: "Inspirations",
          titleHighlight: "Style",
          description: "Des looks pensés par David Roma pour vous inspirer au quotidien.",
          look1: { alt: "Look formel — costume 3 pièces marine David Roma", label: "Look Formel — Costume 3 Pièces" },
          look2: { alt: "Look moderne — blazer noir haut de gamme David Roma", label: "Look Contemporain — Le Blazer Noir" }
        },
        story: {
          title: "Notre",
          titleHighlight: "Histoire",
          p1: "David Roma est né d'une passion pour l'élégance masculine et d'un profond respect pour le savoir-faire italien. Basée à Dakar, notre maison célèbre l'union entre l'identité sénégalaise et l'excellence de la mode transalpine.",
          p2: "Chaque costume, chemise ou paire de chaussures que nous proposons est fabriqué en Italie, berceau historique de la haute couture masculine. Nous travaillons avec des ateliers renommés qui perpétuent des traditions artisanales centenaires.",
          p3: "Notre mission est d'offrir à l'homme africain moderne une garde-robe qui reflète son succès, son raffinement et son goût pour l'excellence — à des prix qu'il ne trouverait pas même en allant directement en Italie."
        },
        values: {
          title: "Nos",
          titleHighlight: "Valeurs",
          elegance: { title: "Élégance", desc: "Chaque pièce est sélectionnée pour incarner le raffinement et la sophistication à l'italienne." },
          qualite: { title: "Qualité", desc: "Des tissus premium et une confection artisanale garantissent une durabilité exceptionnelle." },
          authenticite: { title: "Authenticité", desc: "Un engagement total envers l'excellence du Made in Italy et l'identité sénégalaise." }
        },
        detail: {
          title: "L'Art du",
          titleHighlight: "Détail",
          p1: "De la sélection des tissus les plus nobles à la finition minutieuse de chaque couture, nos partenaires italiens accordent une attention obsessionnelle aux détails.",
          p2: "C'est cette quête de perfection qui fait de chaque vêtement David Roma une pièce unique, taillée pour durer et sublimer celui qui la porte.",
          imgAlt: "Artisanat et confection italienne — chemise David Roma"
        }
      },
      horaires: {
        week: "Lundi — Samedi",
        sun: "Dimanche"
      },
      config: {
        proprietaire: {
          titre: "Fondateur & Expert Mode Italienne",
          citation: "Mon objectif est simple : vous offrir l'authenticité italienne à un prix juste, sans jamais sacrifier la qualité.",
          description: "Après plus de 15 ans passés au cœur de l'industrie de la mode en Italie, David Roma a forgé des relations exclusives avec les meilleurs ateliers et fabricants italiens. Cette expertise unique lui permet de sélectionner personnellement chaque pièce et de vous les proposer à des prix bien inférieurs à ceux pratiqués en Italie.",
          expertise: [
            "15+ ans d'expérience en Italie",
            "Partenariats directs avec les ateliers italiens",
            "Sélection personnelle de chaque pièce",
            "Conseil en style masculin sur mesure"
          ]
        },
        conseils: [
          {
            titre: "Le Costume Parfait",
            conseil: "Un costume bien ajusté est votre meilleur allié. La veste doit épouser vos épaules sans déborder. Associez-le à une chemise blanche et une cravate sobre pour les occasions formelles."
          },
          {
            titre: "Ceinture & Chaussures : La Règle d'Or",
            conseil: "Assurez-vous toujours que votre ceinture et vos chaussures sont de la même couleur. Noir avec noir, marron avec marron. Ce détail change tout à votre élégance globale."
          },
          {
            titre: "Les Chaussettes, le Détail Oublié",
            conseil: "Pour un look formel, choisissez des chaussettes assorties à votre pantalon. Pour une touche de personnalité, osez les motifs discrets. Évitez les chaussettes blanches avec un costume."
          },
          {
            titre: "Le Blazer, Pièce Maîtresse",
            conseil: "Un blazer bien coupé transforme instantanément n'importe quelle tenue. Portez-le sur un jean pour un look smart casual, ou sur un pantalon de costume pour une élégance affirmée."
          }
        ]
      },
      contact: {
        seo: {
          title: "Contact & Rendez-vous — David Roma | SICAP Liberté 1, Dakar",
          description: "Contactez David Roma ou prenez rendez-vous dans notre showroom à SICAP Liberté 1, Dakar. Lun-Sam 10h-21h. WhatsApp : +221 78 525 14 38."
        },
        hero: {
          title: "Contact & Rendez-vous",
          subtitle: "Nous sommes à votre écoute",
          tagline: "Conseil en style · Originaux italiens · Prix imbattables"
        },
        form: {
          titlePart1: "Envoyez-nous un",
          titlePart2: "message",
          fullName: "Nom complet",
          fullNameRequired: "Nom complet *",
          phone: "Téléphone",
          phoneRequired: "Téléphone *",
          message: "Message",
          serviceRequired: "Service souhaité *",
          dateRequired: "Date souhaitée *",
          timeRequired: "Heure souhaitée *",
          notes: "Notes supplémentaires (optionnel)",
          notesPlaceholder: "Précisez vos besoins, préférences de couleur, occasion...",
          submitBtn: "Envoyer via WhatsApp",
          bookBtn: "Réserver via WhatsApp"
        },
        services: {
          costumes: "Costumes",
          chemises: "Chemises",
          pantalons: "Pantalons",
          pantalonsKaki: "Pantalons Kaki",
          ceintures: "Ceintures",
          chaussettes: "Chaussettes",
          chaussures: "Chaussures",
          cravates: "Cravates",
          polos: "Polos",
          tshirts: "T-shirts",
          conseil: "Conseil en style (gratuit)",
          consultation: "Consultation générale"
        },
        buttons: {
          waDakar: "WhatsApp Dakar",
          callDakar: "Appeler Dakar",
          waItalie: "WhatsApp Italie",
          sendEmail: "Envoyer un email"
        },
        info: {
          title: "Informations",
          address: "Adresse",
          hours: "Horaires d'ouverture",
          phoneDakar: "Téléphone Dakar",
          phoneItalie: "Téléphone Italie",
          email: "Email",
          openMaps: "Ouvrir dans Google Maps"
        },
        appt: {
          titlePart1: "Prendre",
          titlePart2: "Rendez-vous",
          desc: "Bénéficiez d'un service personnalisé dans notre showroom de Dakar. David Roma vous accompagne personnellement.",
          tagline: "Le conseil en style est inclus — c'est notre différence."
        },
        perks: {
          title: "Ce qui vous attend",
          item1: "Accueil personnalisé par David Roma lui-même",
          item2: "Conseils de style basés sur 15+ ans d'expérience en Italie",
          item3: "Présentation des collections et des tissus disponibles",
          item4: "Pièces 100% originales moins chères qu'en Italie",
          item5: "Durée moyenne : 45 minutes à 1 heure"
        },
        whatsapp: {
          hello: "Bonjour David Roma",
          name: "Nom",
          phone: "Tél",
          service: "Service",
          date: "Date",
          time: "Heure",
          none: "Aucune",
          apptRequest: "Je souhaite prendre rendez-vous."
        },
        alerts: {
          contactRedirect: "Redirection vers WhatsApp. Merci !",
          apptRedirect: "Redirection vers WhatsApp pour confirmer votre rendez-vous !"
        }
      },
      collections: {
        seo: {
          title: "Collections — David Roma | Vêtements & Accessoires italiens à Dakar",
          description: "Blazers, costumes, chemises, pantalons, ceintures, chaussettes et chaussures 100% made in Italy. Moins chers qu'en Italie. Showroom David Roma à Dakar.",
          ogTitle: "Collections David Roma",
          ogDesc: "Collections de vêtements et accessoires italiens premium à Dakar."
        },
        hero: {
          tag: "Made in Italy · 100% Originaux",
          titlePart1: "Collec",
          titlePart2: "tions",
          desc: "Pièces d'exception fabriquées en Italie — à des prix inférieurs à ceux pratiqués en Italie",
          discover: "DÉCOUVRIR"
        },
        ticker: {
          cheaper: "Moins cher qu'en Italie"
        },
        grid: {
          title: "Toutes les collections"
        },
        prestige: {
          badge: "Service Exclusif sur RDV",
          descExt: "Une expérience de cordonnerie traditionnelle d'excellence, adaptée à la morphologie unique de votre pied.",
          btn: "Lancer la configuration"
        },
        cta: {
          title: "Une question sur nos collections ?",
          desc: "Prenez rendez-vous et bénéficiez des conseils personnalisés de David Roma."
        },
        descriptions: {
          costumes: "Taillés dans des tissus d'exception",
          blazers: "La pièce maîtresse du style masculin",
          chemises: "Coton premium & lin italien",
          pantalons: "Coupe italienne, tissus nobles",
          "pantalons-kaki": "Polyvalents, du bureau au week-end",
          chaussures: "Cuir véritable, fait main",
          "chaussures-sur-mesure": "Confectionnées à la main sur commande",
          ceintures: "Cuir pleine fleur d'Italie",
          cravates: "Soie 100% italienne",
          polos: "Style décontracté raffiné",
          chaussettes: "Le détail qui fait la différence",
          tshirts: "Coton peigné premium"
        }
      },
      showcase: {
        back: "Retour aux collections",
        proposition: {
          title: "100% Original · Sélection premium",
          desc: "Pièces sélectionnées avec exigence auprès d'ateliers haut de gamme"
        },
        details: {
          fabric: "Matière",
          origin: "Origine",
          advice: "Conseil de style"
        },
        trust: {
          title: "Élégance · Qualité · Authenticité",
          point2: "Sélection premium haut de gamme",
          point3: "Excellent rapport qualité-prix",
          point4: "Conseils basés sur plus de 15 ans d'expérience"
        },
        seo: {
          title: "{{title}} — David Roma | Mode premium à Dakar",
          description: "{{title}} premium disponibles chez David Roma à Dakar. {{desc}}",
          ogTitle: "{{title}} — David Roma Dakar"
        },
        products: {
          costumes: {
            title: "Costumes",
            description: "Nos costumes haut de gamme sont confectionnés avec des tissus d'exception pour offrir une coupe élégante, moderne et confortable.",
            fabric: "Laine Super 150s · Cachemire blend",
            origin: "Confection artisanale premium",
            advice: "Parfait pour les cérémonies, événements professionnels et grandes occasions. Associez-le à une chemise blanche et une cravate sobre pour une silhouette élégante."
          },
          blazers: {
            title: "Blazers",
            description: "La pièce essentielle du vestiaire masculin. Nos blazers premium apportent immédiatement élégance et caractère à votre tenue.",
            fabric: "Laine premium · Cachemire blend · Mélanges nobles",
            origin: "Sélection haut de gamme",
            advice: "Associez un blazer marine à un pantalon beige ou un jean brut pour un look smart casual moderne."
          },
          chemises: {
            title: "Chemises",
            description: "Chemises premium conçues dans des matières nobles pour allier confort, élégance et finesse au quotidien.",
            fabric: "Coton premium · Lin haut de gamme",
            origin: "Savoir-faire textile européen",
            advice: "Idéales pour le bureau comme pour les occasions élégantes. Gardez toujours un col impeccable pour un rendu raffiné."
          },
          cravates: {
            title: "Cravates",
            description: "Cravates raffinées confectionnées avec des matières premium pour sublimer vos costumes et tenues formelles.",
            fabric: "Soie premium",
            origin: "Finition artisanale",
            advice: "Le nœud doit légèrement toucher le col de la chemise pour un équilibre parfait."
          },
          chaussures: {
            title: "Chaussures",
            description: "Chaussures en cuir véritable réalisées avec une finition élégante et durable.",
            fabric: "Cuir véritable premium",
            origin: "Fabrication artisanale",
            advice: "Accordez toujours la couleur des chaussures avec celle de votre ceinture pour une tenue harmonieuse."
          },
          polos: {
            title: "Polos",
            description: "Polos premium pour un style casual élégant et moderne.",
            fabric: "Coton piqué premium",
            origin: "Confection de qualité",
            advice: "Parfaits avec un pantalon kaki ou un jean sobre pour un look chic décontracté."
          },
          tshirts: {
            title: "T-shirts",
            description: "T-shirts premium offrant confort, qualité et élégance minimaliste.",
            fabric: "Coton peigné premium",
            origin: "Sélection haut de gamme",
            advice: "Portez-les seuls ou sous une veste pour un style smart casual moderne."
          },
          pantalons: {
            title: "Pantalons",
            description: "Pantalons élégants confectionnés dans des tissus résistants et confortables.",
            fabric: "Laine premium · Coton haut de gamme · Mélanges techniques",
            origin: "Confection premium",
            advice: "Associez-les à des chaussures et une ceinture assorties pour une tenue parfaitement équilibrée."
          },
          "pantalons-kaki": {
            title: "Pantalons Kaki & Colorés",
            description: "Des pantalons polyvalents et modernes parfaits pour un style business casual ou décontracté élégant.",
            fabric: "Coton léger premium · Mélanges techniques",
            origin: "Sélection premium",
            advice: "Associez-les avec une veste marine ou un polo propre pour un rendu chic et moderne."
          },
          ceintures: {
            title: "Ceintures",
            description: "Ceintures en cuir véritable avec finitions élégantes et textures raffinées.",
            fabric: "Cuir pleine fleur · Cuir box-calf",
            origin: "Fabrication artisanale",
            advice: "La ceinture doit toujours être assortie à vos chaussures pour une tenue élégante."
          },
          chaussettes: {
            title: "Chaussettes",
            description: "Chaussettes premium confortables et élégantes adaptées aux tenues formelles et casual.",
            fabric: "Coton mercérisé · Laine mérinos",
            origin: "Qualité textile premium",
            advice: "Pour une tenue formelle, choisissez des chaussettes assorties à votre pantalon."
          }
        }
      }
    }
  },
  it: {
    translation: {
      nav: {
        home: "Home",
        about: "Chi Siamo",
        collections: "Collezioni",
        contact: "Contatti",
      },
      footer: {
        tagline: "L'eleganza italiana nel cuore di Dakar.",
        schedule_week: "Lun - Sab: 10:00 - 21:00",
        schedule_sun: "Dom: 15:00 - 20:00",
        rights: "Tutti i diritti riservati.",
        shop_senegal: "Senegal (Boutique)",
      },
      home: {
        seo: {
          title: "David Roma — Abiti & Abbigliamento Italiano a Dakar, Senegal",
          desc: "Acquista abiti, blazer e abbigliamento 100% italiano a Dakar in Senegal. David Roma offre articoli Made in Italy originali a prezzi inferiori rispetto all'Italia. SICAP Liberté 1, Dakar.",
          ogDesc: "Abiti, blazer, camicie e scarpe 100% Made in Italy a Dakar. Originali a prezzi più bassi rispetto all'Italia. SICAP Liberté 1."
        },
        hero: {
          title1: "L'eleganza italiana,",
          title2: "nel cuore di Dakar",
          btnDiscover: "Scopri la collezione",
          btnAppointment: "Prendi un appuntamento"
        },
        engagement: {
          tag: "IL NOSTRO IMPEGNO",
          points: {
            authenticity: { title: "100% Originali", desc: "Mai imitazioni, sempre pezzi autentici" },
            direct: { title: "Acquisto diretto", desc: "Direttamente dai laboratori italiani, senza intermediari" },
            prices: { title: "Prezzi ridotti", desc: "Fino al 40% in meno rispetto ai prezzi applicati in Italia" },
            expert: { title: "Esperto sul posto", desc: "Oltre 15 anni in Italia per selezionare i pezzi migliori" }
          }
        },
        intro: {
          title1: "L'eccellenza italiana",
          title2: "per l'uomo moderno",
          desc: "David Roma incarna il perfetto connubio tra l'eleganza senza tempo della moda italiana e la raffinatezza della clientela africana. Ogni pezzo è accuratamente selezionato in Italia per offrirvi il meglio del know-how transalpino."
        },
        exclusive: {
          badge: "NOVITÀ ESCLUSIVA",
          tag: "ALTA CALZOLERIA",
          title1: "Scarpe ",
          title2: "Su Misura",
          desc1: "David Roma compie un nuovo passo nel prestigio. Scopri il nostro nuovissimo servizio di confezione artigianale su ordinazione.",
          desc2: "Ogni paio è realizzato in modo unico in Italia, modellato sulla morfologia del tuo piede con i cuoi più nobili della penisola.",
          btn: "PRENDI UN APPUNTAMENTO"
        },
        collections: {
          title1: "Le Nostre ",
          title2: "Collezioni",
          categories: {
            costumes: "Abiti", chemises: "Camicie", pantalons: "Pantaloni",
            chaussures: "Scarpe", ceintures: "Cinture", chaussettes: "Calze",
            cravates: "Cravatte", polos: "Polo", tshirts: "T-shirt"
          }
        },
        style: {
          tag: "ESPERIENZA DAVID ROMA",
          title1: "Consigli di ",
          title2: "Stile",
          desc: "Con oltre 15 anni di esperienza in Italia, David Roma ti guida a vestirti con eleganza e sicurezza ogni giorno.",
          btn: "Consulenza personalizzata",
          inspirationsTag: "ISPIRAZIONI",
          inspirationsTitle1: "Outfit ",
          inspirationsTitle2: "Completi",
          inspirationsDesc: "Combinazioni pensate da David Roma — pronte da indossare",
          flatlays: {
            look1: { label: "Look Business Casual", desc: "Pantaloni azzurri · Camicia stampata · Giacca navy · Oxford navy" },
            look2: { label: "Look Classico Grigio", desc: "Abito grigio Principe di Galles · Camicia blu · Oxford marroni" },
            look3: { label: "Look Casual Chic", desc: "Pantaloni bianchi · Giacca blu · Camicia in denim · Mocassini" }
          }
        },
        madeInItaly: {
          title: "Made in Italy",
          desc1: "I nostri capi e scarpe sono realizzati in Italia da artigiani eccezionali. Acquistati direttamente alla fonte, vi costano ",
          desc2: "meno rispetto alle boutique in Italia",
          stats: {
            stat1: "Originali italiani",
            stat2: "Anni di esperienza in Italia",
            stat3: "vs prezzi in Italia"
          }
        },
        cta: {
          title1: "Visita il nostro showroom",
          title2: "a Dakar",
          btnCollections: "Vedi le collezioni"
        }
      },
      about: {
        seo: {
          title: "Chi Siamo — David Roma | 15+ anni di esperienza in Italia",
          description: "Scopri la storia di David Roma, specialista in abbigliamento e abiti italiani a Dakar con oltre 15 anni di esperienza in Italia.",
          storeDesc: "Boutique di abbigliamento e abiti italiani di alta gamma a Dakar.",
          metaDesc: "Scopri David Roma, esperto di moda italiana con oltre 15 anni di esperienza in Italia. Partnership dirette con i laboratori italiani. Originali a prezzi inferiori rispetto all'Italia a Dakar.",
          keywords: "David Roma storia, moda italiana Dakar, esperto moda Senegal, abbigliamento italiano Dakar, abiti italiani Senegal",
          ogTitle: "Chi Siamo — David Roma | Esperto di moda italiana a Dakar",
          ogDesc: "15+ anni di esperienza in Italia. Partnership dirette con laboratori italiani. Originali a prezzi inferiori rispetto all'Italia."
        },
        hero: {
          title: "Chi Siamo",
          imgAlt: "David Roma — Eleganza maschile italiana a Dakar"
        },
        founder: {
          tagline: "IL FONDATORE",
          experienceBadge: "ANNI IN ITALIA",
          imgAlt: "David Roma — Fondatore nella sua boutique a Dakar"
        },
        action: {
          tagline: "OGNI GIORNO",
          titleHighlight: "in Azione",
          step1: { alt: "David Roma in un laboratorio di lusso in Italia", title: "In Italia", desc: "Selezione personale nei migliori laboratori italiani." },
          step2: { alt: "David Roma che veste un cliente", title: "L'Abbigliamento", desc: "Accompagnamento personalizzato per un abito perfettamente su misura." },
          step3: { alt: "David Roma che consiglia un cliente sui tessuti", title: "La Consulenza", desc: "Scelta di tessuti, colori e abbinamenti." },
          step4: { alt: "David Roma e un cliente nella boutique", title: "La Boutique", desc: "Un caloroso benvenuto in uno spazio pensato per voi." }
        },
        pricing: {
          title: "Perché costa meno che in Italia?",
          description: "In 15 anni trascorsi in Italia, David Roma ha stretto relazioni dirette con produttori e laboratori. Queste partnership esclusive eliminano tutti gli intermediari e vi consentono di accedere agli stessi prodotti originali a prezzi che non troverete da nessun'altra parte a Dakar.",
          atelier: { title: "Direttamente dal laboratorio", detail: "Acquisto alla fonte, in Italia" },
          intermediary: { title: "Zero intermediari", detail: "Nessun distributore o rivenditore" },
          unbeatable: { title: "Prezzi imbattibili", detail: "Fino al 40% in meno rispetto all'Italia" }
        },
        inspiration: {
          tagline: "SELEZIONE DAVID ROMA",
          title: "Ispirazioni",
          titleHighlight: "Stile",
          description: "Look pensati da David Roma per ispirarvi ogni giorno.",
          look1: { alt: "Look formale — abito 3 pezzi navy David Roma", label: "Look Formale — Abito 3 Pezzi" },
          look2: { alt: "Look moderno — blazer nero di alta gamma David Roma", label: "Look Contemporaneo — Il Blazer Nero" }
        },
        story: {
          title: "La Nostra",
          titleHighlight: "Storia",
          p1: "David Roma nasce dalla passione per l'eleganza maschile e dal profondo rispetto per il saper fare italiano. Con sede a Dakar, la nostra maison celebra l'unione tra l'identità senegalese e l'eccellenza della moda transalpina.",
          p2: "Ogni abito, camicia o paio di scarpe che offriamo è realizzato in Italia, culla storica dell'alta moda maschile. Collaboriamo con rinomati laboratori che tramandano tradizioni artigianali centenarie.",
          p3: "La nostra missione è offrire all'uomo africano moderno un guardaroba che rifletta il suo successo, la sua raffinatezza e il suo gusto per l'eccellenza — a prezzi che non troverebbe nemmeno recandosi direttamente in Italia."
        },
        values: {
          title: "I Nostri",
          titleHighlight: "Valori",
          elegance: { title: "Eleganza", desc: "Ogni pezzo è selezionato per incarnare la raffinatezza e la sofisticatezza all'italiana." },
          qualite: { title: "Qualità", desc: "Tessuti premium e una confezione artigianale garantiscono una durata eccezionale." },
          authenticite: { title: "Autenticità", desc: "Un impegno totale verso l'eccellenza del Made in Italy e l'identità senegalese." }
        },
        detail: {
          title: "L'Arte del",
          titleHighlight: "Dettaglio",
          p1: "Dalla selezione dei tessuti più nobili alla cura meticolosa di ogni cucitura, i nostri partner italiani dedicano un'attenzione ossessiva ai dettagli.",
          p2: "È questa ricerca della perfezione che rende ogni capo David Roma un pezzo unico, tagliato per durare ed esaltare chi lo indossa.",
          imgAlt: "Artigianato e confezione italiana — camicia David Roma"
        }
      },
      horaires: {
        week: "Lunedì — Sabato",
        sun: "Domenica"
      },
      config: {
        proprietaire: {
          titre: "Fondatore & Esperto di Moda Italiana",
          citation: "Il mio obiettivo è semplice: offrirvi l'autenticità italiana a un prezzo giusto, senza mai sacrificare la qualità.",
          description: "Dopo oltre 15 anni trascorsi nel cuore dell'industria della moda in Italia, David Roma ha stretto relazioni esclusive con i migliori laboratori e produttori italiani. Questa esperienza unica gli consente di selezionare personalmente ogni pezzo e di proporveli a prezzi decisamente inferiori rispetto a quelli applicati in Italia.",
          expertise: [
            "Oltre 15 anni di esperienza in Italia",
            "Partnership dirette con i laboratori italiani",
            "Selezione personale di ogni capo",
            "Consulenza di stile maschile su misura"
          ]
        },
        conseils: [
          {
            titre: "L'Abito Perfetto",
            conseil: "Un abito ben tagliato è il tuo miglior alleato. La giacca deve seguire le spalle senza sporgere. Abbinalo a una camicia bianca e a una cravatta sobria per le occasioni formali."
          },
          {
            titre: "Cintura & Scarpe: La Regola d'Oro",
            conseil: "Assicurati sempre che la cintura e le scarpe siano dello stesso colore. Nero con nero, marrone con marrone. Questo dettaglio cambia completamente la tua eleganza globale."
          },
          {
            titre: "I Calzini, il Dettaglio Dimenticato",
            conseil: "Per un look formale, scegli calzini abbinati ai pantaloni. Per un tocco di personalità, osa con motivi discreti. Evita i calzini bianchi con un abito."
          },
          {
            titre: "Il Blazer, Capo Chiave",
            conseil: "Un blazer ben tagliato trasforma istantaneamente qualsiasi outfit. Indossalo con i jeans per un look smart casual, o con pantaloni eleganti per un'eleganza decisa."
          }
        ]
      },
      contact: {
        seo: {
          title: "Contatti e Appuntamenti — David Roma | SICAP Liberté 1, Dakar",
          description: "Contatta David Roma o fissa un appuntamento nel nostro showroom a SICAP Liberté 1, Dakar. Lun-Sab 10:00-21:00. WhatsApp: +221 78 525 14 38."
        },
        hero: {
          title: "Contatti e Appuntamenti",
          subtitle: "Siamo a tua disposizione",
          tagline: "Consulenza di stile · Originali italiani · Prezzi imbattibili"
        },
        form: {
          titlePart1: "Inviaci un",
          titlePart2: "messaggio",
          fullName: "Nome completo",
          fullNameRequired: "Nome completo *",
          phone: "Telefono",
          phoneRequired: "Telefono *",
          message: "Messaggio",
          serviceRequired: "Servizio desiderato *",
          dateRequired: "Data desiderata *",
          timeRequired: "Ora desiderata *",
          notes: "Note aggiuntive (opzionale)",
          notesPlaceholder: "Specifica le tue esigenze, preferenze di colore, occasione...",
          submitBtn: "Invia tramite WhatsApp",
          bookBtn: "Prenota tramite WhatsApp"
        },
        services: {
          costumes: "Completi / Abiti",
          chemises: "Camicie",
          pantalons: "Pantaloni",
          pantalonsKaki: "Pantaloni Kaki",
          ceintures: "Cinture",
          chaussettes: "Calze",
          chaussures: "Scarpe",
          cravates: "Cravatte",
          polos: "Polo",
          tshirts: "T-shirt",
          conseil: "Consulenza di stile (gratuita)",
          consultation: "Consulenza generale"
        },
        buttons: {
          waDakar: "WhatsApp Dakar",
          callDakar: "Chiama Dakar",
          waItalie: "WhatsApp Italia",
          sendEmail: "Invia un'e-mail"
        },
        info: {
          title: "Informazioni",
          address: "Indirizzo",
          hours: "Orari di apertura",
          phoneDakar: "Telefono Dakar",
          phoneItalie: "Telefono Italia",
          email: "E-mail",
          openMaps: "Apri in Google Maps"
        },
        appt: {
          titlePart1: "Prendi un",
          titlePart2: "Appuntamento",
          desc: "Approfitta di un servizio personalizzato nel nostro showroom di Dakar. David Roma ti accompagnerà personalmente.",
          tagline: "La consulenza di stile è inclusa — questa è la nostra differenza."
        },
        perks: {
          title: "Cosa ti aspetta",
          item1: "Accoglienza personalizzata da parte di David Roma in persona",
          item2: "Consigli di stile basati su oltre 15 anni di esperienza in Italia",
          item3: "Presentazione delle collezioni e dei tessuti disponibili",
          item4: "Capi originali al 100% meno cari che in Italia",
          item5: "Durata media: da 45 minuti a 1 ora"
        },
        whatsapp: {
          hello: "Buongiorno David Roma",
          name: "Nome",
          phone: "Tel",
          service: "Servizio",
          date: "Data",
          time: "Ora",
          none: "Nessuna",
          apptRequest: "Desidero prendere un appuntamento."
        },
        alerts: {
          contactRedirect: "Reindirizzamento a WhatsApp. Grazie!",
          apptRedirect: "Reindirizzamento a WhatsApp per confermare l'appuntamento!"
        }
      },
      collections: {
        seo: {
          title: "Collezioni — David Roma | Abbigliamento e Accessori Italiani a Dakar",
          description: "Blazer, abiti, camicie, pantaloni, cinture, calze e scarpe 100% Made in Italy. Più convenienti rispetto all'Italia. Showroom David Roma a Dakar.",
          ogTitle: "Collezioni David Roma",
          ogDesc: "Collezioni di abbigliamento e accessori italiani premium a Dakar."
        },
        hero: {
          tag: "Made in Italy · 100% Originali",
          titlePart1: "Colle",
          titlePart2: "zioni",
          desc: "Capi eccezionali realizzati in Italia — a prezzi inferiori rispetto a quelli applicati in Italia",
          discover: "SCOPRI"
        },
        ticker: {
          cheaper: "Meno caro che in Italia"
        },
        grid: {
          title: "Tutte le collezioni"
        },
        prestige: {
          badge: "Servizio Esclusivo su Appuntamento",
          descExt: "Un'esperienza di calzoleria tradizionale d'eccellenza, modellata sulla morfologia unica del tuo piede.",
          btn: "Avvia la configurazione"
        },
        cta: {
          title: "Hai una domanda sulle nostre collezioni?",
          desc: "Prendi un appuntamento e approfitta dei consigli personalizzati di David Roma."
        },
        descriptions: {
          costumes: "Tagliati con tessuti d'eccezione",
          blazers: "Il capo chiave del guardaroba maschile",
          chemises: "Cotone premium & lino italiano",
          pantalons: "Taglio italiano, tessuti nobili",
          "pantalons-kaki": "Versatili, dall'ufficio al fine settimana",
          chaussures: "Vera pelle, fatti a mano",
          "chaussures-sur-mesure": "Realizzate a mano su ordinazione",
          ceintures: "Pelle pieno fiore d'Italia",
          cravates: "100% seta italiana",
          polos: "Stile casual raffinato",
          chaussettes: "Il dettaglio che fa la differenza",
          tshirts: "Cotone pettinato premium"
        }
      },
      showcase: {
        back: "Torna alle collezioni",
        proposition: {
          title: "100% Originale · Selezione Premium",
          desc: "Capi accuratamente selezionati da laboratori di alta gamma"
        },
        details: {
          fabric: "Materiale",
          origin: "Origine",
          advice: "Consiglio di stile"
        },
        trust: {
          title: "Eleganza · Qualità · Autenticità",
          point2: "Selezione premium di alto livello",
          point3: "Eccellente rapporto qualità-prezzo",
          point4: "Consulenza basata su oltre 15 anni di esperienza"
        },
        seo: {
          title: "{{title}} — David Roma | Moda Premium a Dakar",
          description: "{{title}} premium disponibili da David Roma a Dakar. {{desc}}",
          ogTitle: "{{title}} — David Roma Dakar"
        },
        products: {
          costumes: {
            title: "Abiti",
            description: "I nostri abiti di alta gamma sono realizzati con tessuti eccezionali per offrire un taglio elegante, moderno e confortevole.",
            fabric: "Lana Super 150s · Misto cashmere",
            origin: "Sartoria artigianale premium",
            advice: "Perfetto per cerimonie, eventi professionali e grandi occasioni. Abbinalo a una camicia bianca e una cravatta sobria per una silhouette slanciata ed elegante."
          },
          blazers: {
            title: "Blazer",
            description: "Il capo essenziale del guardaroba maschile. I nostri blazer premium donano immediatamente eleganza e carattere al tuo outfit.",
            fabric: "Lana pregiata · Misto cashmere · Miscele nobili",
            origin: "Selezione di alta gamma",
            advice: "Abbina un blazer blu navy a un pantalone beige o a un jeans scuro per un look smart casual moderno."
          },
          chemises: {
            title: "Camicie",
            description: "Camicie premium realizzate con materiali nobili per unire comfort, eleganza e raffinatezza ogni giorno.",
            fabric: "Cotone pregiato · Lino di alta qualità",
            origin: "Know-how tessile europeo",
            advice: "Ideali sia per l'ufficio che per le occasioni eleganti. Mantieni sempre il colletto impeccabile per un risultato raffinato."
          },
          cravates: {
            title: "Cravatte",
            description: "Cravatte raffinate realizzate con materiali pregiati per valorizzare i tuoi abiti e i tuoi outfit formali.",
            fabric: "Seta premium",
            origin: "Finitura artigianale",
            advice: "Il nodo deve toccare leggermente il colletto della camicia per un equilibrio perfetto."
          },
          chaussures: {
            title: "Scarpe",
            description: "Scarpe in vera pelle realizzate con una finitura elegante, lussuosa e duratura.",
            fabric: "Vera pelle premium",
            origin: "Produzione artigianale",
            advice: "Abbina sempre il colore delle scarpe a quello della cintura per un outfit armonioso."
          },
          polos: {
            title: "Polo",
            description: "Polo premium per uno stile casual moderno ed elegante.",
            fabric: "Cotone piqué premium",
            origin: "Manifattura di qualità",
            advice: "Perfette con pantaloni kaki o jeans sobri per un look chic e disinvolto."
          },
          tshirts: {
            title: "T-shirt",
            description: "T-shirt premium che offrono comfort, qualità e un'eleganza minimalista.",
            fabric: "Cotone pettinato premium",
            origin: "Selezione di alta gamma",
            advice: "Indossale da sole o sotto una giacca per un perfetto stile smart casual contemporaneo."
          },
          pantalons: {
            title: "Pantaloni",
            description: "Pantaloni eleganti realizzati in tessuti resistenti, morbidi e confortevoli.",
            fabric: "Lana premium · Cotone di alta gamma · Miscele tecniche",
            origin: "Confezione premium",
            advice: "Abbinarli a scarpe e cintura coordinate per un outfit perfettamente bilanciato."
          },
          "pantalons-kaki": {
            title: "Pantaloni Kaki & Colorati",
            description: "Pantaloni versatili e moderni, perfetti per uno stile business casual o per un look casual raffinato.",
            fabric: "Cotone leggero premium · Miscele tecniche",
            origin: "Selezione di alta qualità",
            advice: "Abbinali a una giacca blu navy o a una polo sobria per un look pulito e moderno."
          },
          ceintures: {
            title: "Cinture",
            description: "Cinture in vera pelle con finiture eleganti e texture ricercate.",
            fabric: "Pelle pieno fiore · Pelle box-calf",
            origin: "Lavorazione artigianale",
            advice: "La cintura deve sempre essere coordinata alle scarpe per completare l'outfit con classe."
          },
          chaussettes: {
            title: "Calze",
            description: "Calze premium comode ed eleganti, adatte sia ad outfit formali che casual.",
            fabric: "Cotone mercerizzato · Lana merino",
            origin: "Qualità tessile superiore",
            advice: "Per un look formale, scegli calze che si abbinino perfettamente al colore dei pantaloni."
          }
        }
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'fr',
    fallbackLng: 'fr',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;