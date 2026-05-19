import { useState, type ChangeEvent, type SyntheticEvent } from 'react';
import { motion } from 'motion/react';
import { Phone, MessageCircle, MapPin, Clock, Calendar, Mail, Globe, Star, ShieldCheck, Award } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { AnimatedSection } from '../AnimatedSection';
import { SITE_CONFIG, type HoraireItem } from '../../../content';
import proprietaireHakilImg from '../../../imports/proprietaire_Hakil.jpeg';


function ItalyFlag() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3 2" className="w-4 h-3 rounded-sm shadow-sm inline-block ml-1">
      <rect width="1" height="2" fill="#009246"/>
      <rect x="1" width="1" height="2" fill="#ffffff"/>
      <rect x="2" width="1" height="2" fill="#ce2b37"/>
    </svg>
  );
}

export function Contact() {
  const { t } = useTranslation();
  
  const [contactForm, setContactForm] = useState({ name: '', phone: '', message: '' });
  const [appointmentForm, setAppointmentForm] = useState({
    name: '', phone: '', service: 'costumes', date: '', timeframe: 'afternoon', notes: '',
  });

  const services = [
    { value: 'costumes', label: t('contact.services.costumes', 'Costumes') },
    { value: 'chemises', label: t('contact.services.chemises', 'Chemises') },
    { value: 'pantalons', label: t('contact.services.pantalons', 'Pantalons') },
    { value: 'pantalons-kaki', label: t('contact.services.pantalonsKaki', 'Pantalons Kaki') },
    { value: 'ceintures', label: t('contact.services.ceintures', 'Cointures') },
    { value: 'chaussures', label: t('contact.services.chaussures', 'Chaussures') },
    { value: 'conseil', label: t('contact.services.conseil', 'Conseil en style (gratuit)') },
    { value: 'consultation', label: t('contact.services.consultation', 'Consultation générale') },
  ];

  const timeframes = [
    { value: 'morning', label: t('contact.timeframes.morning', 'Matin (10h - 13h)') },
    { value: 'afternoon', label: t('contact.timeframes.afternoon', 'Après-midi (13h - 17h)') },
    { value: 'evening', label: t('contact.timeframes.evening', 'En fin de journée (17h - 21h)') },
  ];

  // Témoignages clients (Preuve sociale)
  const testimonials = [
    {
      name: "Amadou D.",
      role: t('contact.testimonials.role1', "Client Mariage"),
      text: t('contact.testimonials.text1', "J'ai pris rendez-vous pour mon mariage. David m'a conseillé le costume parfait en 45 minutes. Le tissu italien est exceptionnel, le service à Dakar est unique !"),
    },
    {
      name: "Moustapha S.",
      role: t('contact.testimonials.role2', "Business & Corporate"),
      text: t('contact.testimonials.text2', "Des pièces 100% originales et un accueil VIP. Prendre RDV permet d'avoir le showroom pour soi et des conseils sur-mesure d'un vrai passionné."),
    }
  ];

  const handleContactSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const msg = `${t('contact.whatsapp.hello', 'Bonjour David Roma')} 👋\n\n${t('contact.whatsapp.name', 'Nom')} : ${contactForm.name}\n${t('contact.whatsapp.phone', 'Tél')} : ${contactForm.phone}\n\nMessage : ${contactForm.message}`;
    window.open(`https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(msg)}`, '_blank');
    alert(t('contact.alerts.contactRedirect', 'Redirection vers WhatsApp. Merci !'));
    setContactForm({ name: '', phone: '', message: '' });
  };

  const handleContactChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setContactForm({ ...contactForm, [e.target.name]: e.target.value });
  };

  const handleAppointmentSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const selectedServiceLabel = services.find(s => s.value === appointmentForm.service)?.label || appointmentForm.service;
    const selectedTimeframeLabel = timeframes.find(t => t.value === appointmentForm.timeframe)?.label || appointmentForm.timeframe;
    
    const msg = `${t('contact.whatsapp.hello', 'Bonjour David Roma')} 👋\n\n${t('contact.whatsapp.apptRequest', 'Je souhaite réserver une séance privée au showroom.')}\n\n👤 ${t('contact.whatsapp.name', 'Nom')} : ${appointmentForm.name}\n📞 ${t('contact.whatsapp.phone', 'Tél')} : ${appointmentForm.phone}\n👔 ${t('contact.whatsapp.service', 'Service')} : ${selectedServiceLabel}\n📅 ${t('contact.whatsapp.date', 'Date souhaitée')} : ${appointmentForm.date}\n🕐 ${t('contact.whatsapp.timeframe', 'Créneau')} : ${selectedTimeframeLabel}\n📝 Notes : ${appointmentForm.notes || t('contact.whatsapp.none', 'Aucune')}`;
    
    window.open(`https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(msg)}`, '_blank');
    alert(t('contact.alerts.apptRedirect', 'Redirection vers WhatsApp pour valider votre heure de passage !'));
    setAppointmentForm({ name: '', phone: '', service: 'costumes', date: '', timeframe: 'afternoon', notes: '' });
  };

  const handleAppointmentChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setAppointmentForm({ ...appointmentForm, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-full overflow-x-hidden">
      <Helmet>
        <title>{t('contact.seo.title', 'Showroom Privé & Rendez-vous — David Roma | Dakar')}</title>
        <meta name="description" content={t('contact.seo.description', 'Réservez votre séance de stylisme privée avec David Roma à SICAP Liberté 1, Dakar. Costumes et prêt-à-porter originaux d’Italie.')} />
        <link rel="canonical" href="https://davidroma.sn/contact" />
      </Helmet>

      {/* Hero */}
      <section className="relative min-h-[45vh] sm:h-[50vh] flex items-center justify-center bg-gradient-to-br from-black via-[#0f2557] to-black overflow-hidden px-4 py-12">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/3 left-1/2 w-64 h-64 sm:w-96 sm:h-96 bg-[#d4af37] rounded-full blur-[100px] sm:blur-[150px] -translate-x-1/2"></div>
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto">
          <span className="inline-block px-4 py-1.5 bg-[#d4af37]/10 text-[#d4af37] border border-[#d4af37]/30 text-xs tracking-widest uppercase font-semibold mb-4 rounded-full">
            {t('contact.hero.badge', 'Expérience Showroom Privé')}
          </span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
            className="mb-4 text-white font-serif leading-tight"
            style={{ fontSize: 'clamp(2.2rem, 6vw, 4.5rem)', letterSpacing: '-0.02em' }}
          >
            {t('contact.hero.title', 'Prendre Rendez-vous')}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.2 }} 
            className="text-lg sm:text-2xl text-gray-200 mb-4 max-w-2xl mx-auto leading-relaxed"
          >
            {t('contact.hero.subtitle', 'Bénéficiez d’un accompagnement mode exclusif et individuel à Dakar')}
          </motion.p>
        </div>
      </section>

      {/* ===== SECTION PREUVE SOCIALE (Business Social Proof) ===== */}
      <section className="py-12 bg-white border-b border-gray-100 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-gray-50/60 p-6 sm:p-8 rounded-sm border border-gray-100 relative">
              <div className="flex gap-1 mb-3 text-[#d4af37]">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              <p className="text-gray-600 italic text-sm sm:text-base mb-4 leading-relaxed">"{t.text}"</p>
              <div>
                <h4 className="font-serif text-[#0a0a0a] font-medium">{t.name}</h4>
                <span className="text-xs text-[#d4af37] font-medium">{t.role}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== SECTION 1 : RENDEZ-VOUS (Priorité Business) ===== */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Colonne Gauche : Argumentaire & Rassurance */}
            <div className="lg:col-span-5 space-y-8">
              <AnimatedSection>
                <div>
                  <h2 className="mb-6 text-[#0a0a0a] font-serif leading-tight" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.75rem)', letterSpacing: '-0.02em' }}>
                    {t('contact.appt.titlePart1', 'Réserver votre')} <span className="text-[#d4af37]">{t('contact.appt.titlePart2', 'Instant Privé')}</span>
                  </h2>
                  <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
                    {t('contact.appt.descOptimized', "Pour vous offrir un service à la hauteur des exigences de l'élégance italienne, notre showroom vous accueille de manière privilégiée. David Roma vous guide personnellement sans aucune interruption.")}
                  </p>
                </div>

                {/* Photo optimisée : Rendu luxe, non coupée, format téléphone intégré au design */}
<div className="relative aspect-[16/10] w-full rounded-sm overflow-hidden shadow-xl border border-gray-100 bg-[#0a0a0a] ring-2 ring-[#d4af37]/30 ring-offset-4 ring-offset-white">
  
  {/* 1. Fond flouté élégant (Blur) pour combler les côtés de manière artistique */}
  <img 
    src={proprietaireHakilImg} 
    alt="" 
    className="absolute inset-0 w-full h-full object-cover blur-2xl scale-110 opacity-30 pointer-events-none"
  />

  {/* 2. Votre photo verticale, entière, nette, avec traitement colorimétrique luxe via code */}
  <img 
    src={proprietaireHakilImg} 
    alt="David Roma" 
    className="relative z-10 h-full object-contain mx-auto filter saturate-[1.1] contrast-[1.05] brightness-[1.02]"
    loading="lazy"
  />

  {/* 3. Dégradé de finition premium pour la profondeur */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-20 pointer-events-none" />
</div>

                <div className="mt-8 bg-white p-6 border border-gray-200/80 rounded-sm space-y-4 shadow-sm">
                  <div className="flex gap-4 items-center">
                    <ShieldCheck className="h-6 w-6 text-green-600 flex-shrink-0" />
                    <p className="text-sm sm:text-base text-gray-700 font-medium">{t('contact.perks.inc', 'Conseil en image & ajustements inclus')}</p>
                  </div>
                  <div className="flex gap-4 items-center">
                    <Award className="h-6 w-6 text-[#d4af37] flex-shrink-0" />
                    <p className="text-sm sm:text-base text-gray-700 font-medium">{t('contact.perks.orig', 'Garantie 100% authentique Made in Italy')}<ItalyFlag /></p>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Colonne Droite : Formulaire optimisé */}
            <div className="lg:col-span-7">
              <AnimatedSection delay={0.1}>
                <form onSubmit={handleAppointmentSubmit} className="space-y-6 bg-white p-6 sm:p-10 border border-gray-200/60 shadow-md rounded-sm">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="appt-name" className="block mb-2 text-gray-700 text-sm sm:text-base font-medium">{t('contact.form.fullNameRequired', 'Nom complet *')}</label>
                      <input type="text" id="appt-name" name="name" value={appointmentForm.name} onChange={handleAppointmentChange} required
                        className="w-full px-4 py-3.5 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-transparent transition-all duration-300 bg-white" />
                    </div>
                    <div>
                      <label htmlFor="appt-phone" className="block mb-2 text-gray-700 text-sm sm:text-base font-medium">{t('contact.form.phoneRequired', 'Téléphone (WhatsApp) *')}</label>
                      <input type="tel" id="appt-phone" name="phone" value={appointmentForm.phone} onChange={handleAppointmentChange} required
                        className="w-full px-4 py-3.5 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-transparent transition-all duration-300 bg-white" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="appt-service" className="block mb-2 text-gray-700 text-sm sm:text-base font-medium">{t('contact.form.serviceRequired', 'Ce qui vous intéresse particulièrement *')}</label>
                    <select id="appt-service" name="service" value={appointmentForm.service} onChange={handleAppointmentChange} required
                      className="w-full px-4 py-3.5 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-transparent transition-all duration-300 bg-white text-sm sm:text-base">
                      {services.map((s) => <option key={s.value} value={s.value}>{s.label}</option>)}
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="appt-date" className="block mb-2 text-gray-700 text-sm sm:text-base font-medium">
                        <Calendar className="inline h-4 w-4 mr-2 text-[#d4af37]" />{t('contact.form.dateRequired', 'Date souhaitée *')}
                      </label>
                      <input type="date" id="appt-date" name="date" value={appointmentForm.date} onChange={handleAppointmentChange} required
                        className="w-full px-4 py-3.5 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-transparent transition-all duration-300 bg-white text-sm sm:text-base" />
                    </div>
                    <div>
                      <label htmlFor="appt-timeframe" className="block mb-2 text-gray-700 text-sm sm:text-base font-medium">
                        <Clock className="inline h-4 w-4 mr-2 text-[#d4af37]" />{t('contact.form.timeframeRequired', 'Créneau préféré *')}
                      </label>
                      <select id="appt-timeframe" name="timeframe" value={appointmentForm.timeframe} onChange={handleAppointmentChange} required
                        className="w-full px-4 py-3.5 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-transparent transition-all duration-300 bg-white text-sm sm:text-base">
                        {timeframes.map((t) => <option key={t.value} value={t.value}>{t.label}</option>)}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="appt-notes" className="block mb-2 text-gray-700 text-sm sm:text-base font-medium">{t('contact.form.notes', 'Une demande particulière ? (Optionnel)')}</label>
                    <textarea id="appt-notes" name="notes" value={appointmentForm.notes} onChange={handleAppointmentChange} rows={3}
                      placeholder={t('contact.form.notesPlaceholder', 'Mariage, costume de travail, tailles spécifiques...')}
                      className="w-full px-4 py-3.5 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-transparent transition-all duration-300 resize-none bg-white text-sm sm:text-base" />
                  </div>

                  <motion.button whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }} type="submit"
                    className="w-full bg-[#0f2557] text-white px-6 py-4.5 hover:bg-[#0a1a3a] transition-all duration-300 font-semibold text-sm sm:text-base tracking-wider shadow-sm">
                    {t('contact.form.bookBtn', 'Demander mon RDV via WhatsApp')}
                  </motion.button>
                </form>
              </AnimatedSection>
            </div>

          </div>
        </div>
      </section>

      {/* ===== SECTION 2 : COORDONNÉES & CARTE ===== */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Infos de contact direct */}
            <AnimatedSection>
              <div className="space-y-10">
                <div>
                  <h2 className="mb-6 sm:mb-8 text-[#0a0a0a] font-serif" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', letterSpacing: '-0.02em' }}>
                    {t('contact.info.title', 'Accès & Coordonnées')}
                  </h2>
                  <div className="space-y-6 sm:space-y-7">
                    {[
                      { icon: MapPin, title: t('contact.info.address', 'Adresse'), content: SITE_CONFIG.adresse },
                      { 
                        icon: Clock, 
                        title: t('contact.info.hours', "Horaires d'ouverture"), 
                        content: SITE_CONFIG.horaires.map((h: HoraireItem) => `${t(h.joursKey)}: ${h.heures}`).join('\n') 
                      },
                      { icon: Phone, title: t('contact.info.phoneDakar', 'Téléphone Dakar'), content: SITE_CONFIG.telephone },
                      { icon: Globe, title: t('contact.info.phoneItalie', 'Ligne Italie'), content: SITE_CONFIG.telephone_italie },
                      { icon: Mail, title: t('contact.info.email', 'Email Direct'), content: SITE_CONFIG.email },
                    ].map((item, index) => (
                      <div key={index} className="flex gap-4 sm:gap-6">
                        <div className="flex-shrink-0 w-11 h-11 sm:w-12 sm:h-12 bg-gradient-to-br from-[#0f2557] to-black rounded-full flex items-center justify-center shadow-sm">
                          <item.icon className="h-5 w-5 text-[#d4af37]" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="mb-0.5 text-[#0a0a0a] text-base sm:text-lg font-serif font-medium">{item.title}</h3>
                          <p className="text-gray-600 text-sm sm:text-base whitespace-pre-line break-words leading-relaxed">{item.content}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Google Map intégrée de manière ultra-pro */}
                <div className="space-y-3.5 w-full">
                  <div className="overflow-hidden rounded-sm shadow-md border border-gray-100 w-full aspect-[16/10] max-h-[260px]">
                    <iframe
                      title="Localisation David Roma — SICAP Liberté 1 Dakar"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.2217730953183!2d-17.4526543!3d14.700032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDQyJzAwLjEiTiAxN8KwMjcnMDkuNiJX!5e0!3m2!1sfr!2ssn!4v1710000000000!5m2!1sfr!2ssn"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 border border-[#0f2557] text-[#0f2557] px-4 py-3 hover:bg-[#0f2557] hover:text-white transition-all duration-300 text-xs sm:text-sm tracking-wider font-medium w-full"
                  >
                    <MapPin className="h-4 w-4 flex-shrink-0" />
                    {t('contact.info.openMaps', 'Lancer l’itinéraire sur Google Maps')}
                  </a>
                </div>
              </div>
            </AnimatedSection>

            {/* Questions rapides / Message Direct */}
            <AnimatedSection delay={0.2}>
              <div className="w-full bg-gray-50/50 p-6 sm:p-10 border border-gray-200/40 rounded-sm">
                <h2 className="mb-6 text-[#0a0a0a] font-serif leading-tight" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.2rem)', letterSpacing: '-0.02em' }}>
                  {t('contact.form.titlePart1', 'Une simple')} <span className="text-[#d4af37]">{t('contact.form.titlePart2', 'question ?')}</span>
                </h2>
                <form onSubmit={handleContactSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="contact-name" className="block mb-2 text-gray-700 text-sm font-medium">{t('contact.form.fullName', 'Nom complet')}</label>
                    <input type="text" id="contact-name" name="name" value={contactForm.name} onChange={handleContactChange} required
                      className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-transparent transition-all duration-300 bg-white" />
                  </div>
                  <div>
                    <label htmlFor="contact-phone" className="block mb-2 text-gray-700 text-sm font-medium">{t('contact.form.phone', 'Téléphone')}</label>
                    <input type="tel" id="contact-phone" name="phone" value={contactForm.phone} onChange={handleContactChange} required
                      className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-transparent transition-all duration-300 bg-white" />
                  </div>
                  <div>
                    <label htmlFor="contact-message" className="block mb-2 text-gray-700 text-sm font-medium">{t('contact.form.message', 'Votre message')}</label>
                    <textarea id="contact-message" name="message" value={contactForm.message} onChange={handleContactChange} required rows={4}
                      className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-transparent transition-all duration-300 resize-none bg-white" />
                  </div>
                  <motion.button whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }} type="submit"
                    className="w-full bg-[#0f2557] text-white px-6 py-4 hover:bg-[#0a1a3a] transition-all duration-300 font-medium text-sm tracking-wider">
                    {t('contact.form.submitBtn', 'Envoyer ma question via WhatsApp')}
                  </motion.button>
                </form>

                {/* Boutons d'accès d'urgence rapides */}
                <div className="mt-8 pt-8 border-t border-gray-200 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <motion.a whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                    href={`https://wa.me/${SITE_CONFIG.whatsapp}`} target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-green-600 text-white px-4 py-3 hover:bg-green-700 transition-all duration-300 text-xs font-semibold uppercase tracking-wider">
                    <MessageCircle className="h-4 w-4" />
                    <span>{t('contact.buttons.waDakar', 'WhatsApp Dakar')}</span>
                  </motion.a>
                  
                  <motion.a whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                    href={`tel:${SITE_CONFIG.telephone}`}
                    className="flex items-center justify-center gap-2 bg-[#d4af37] text-black px-4 py-3 hover:bg-[#c49d2e] transition-all duration-300 text-xs font-semibold uppercase tracking-wider">
                    <Phone className="h-4 w-4" />
                    <span>{t('contact.buttons.callDakar', 'Appeler Dakar')}</span>
                  </motion.a>
                </div>
              </div>
            </AnimatedSection>

          </div>
        </div>
      </section>
    </div>
  );
}