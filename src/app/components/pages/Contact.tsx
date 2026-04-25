import { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, MessageCircle, MapPin, Clock, Calendar, Mail, Globe } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { AnimatedSection } from '../AnimatedSection';
import { SITE_CONFIG } from '../../../content';

export function Contact() {
  const [contactForm, setContactForm] = useState({ name: '', phone: '', message: '' });
  const [appointmentForm, setAppointmentForm] = useState({
    name: '', phone: '', service: 'costumes', date: '', time: '', notes: '',
  });

  const services = [
    { value: 'costumes', label: 'Costumes' },
    { value: 'chemises', label: 'Chemises' },
    { value: 'pantalons', label: 'Pantalons' },
    { value: 'pantalons-kaki', label: 'Pantalons Kaki' },
    { value: 'ceintures', label: 'Ceintures' },
    { value: 'chaussettes', label: 'Chaussettes' },
    { value: 'chaussures', label: 'Chaussures' },
    { value: 'cravates', label: 'Cravates' },
    { value: 'polos', label: 'Polos' },
    { value: 'tshirts', label: 'T-shirts' },
    { value: 'conseil', label: 'Conseil en style (gratuit)' },
    { value: 'consultation', label: 'Consultation générale' },
  ];

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Bonjour David Roma 👋\n\nNom : ${contactForm.name}\nTél : ${contactForm.phone}\n\nMessage : ${contactForm.message}`;
    window.open(`https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(msg)}`, '_blank');
    alert('Redirection vers WhatsApp. Merci !');
    setContactForm({ name: '', phone: '', message: '' });
  };

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setContactForm({ ...contactForm, [e.target.name]: e.target.value });
  };

  const handleAppointmentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Bonjour David Roma 👋\n\nJe souhaite prendre rendez-vous.\n\n👤 Nom : ${appointmentForm.name}\n📞 Tél : ${appointmentForm.phone}\n👔 Service : ${appointmentForm.service}\n📅 Date : ${appointmentForm.date}\n🕐 Heure : ${appointmentForm.time}\n📝 Notes : ${appointmentForm.notes || 'Aucune'}`;
    window.open(`https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(msg)}`, '_blank');
    alert('Redirection vers WhatsApp pour confirmer votre rendez-vous !');
    setAppointmentForm({ name: '', phone: '', service: 'costumes', date: '', time: '', notes: '' });
  };

  const handleAppointmentChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setAppointmentForm({ ...appointmentForm, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <Helmet>
        <title>Contact & Rendez-vous — David Roma | SICAP Liberté 1, Dakar</title>
        <meta name="description" content="Contactez David Roma ou prenez rendez-vous dans notre showroom à SICAP Liberté 1, à côté BRT Liberté 1, Dakar. Lun-Sam 10h-21h. WhatsApp : +221 78 525 14 38." />
        <meta name="keywords" content="contact David Roma, rendez-vous Dakar, SICAP Liberté 1, showroom mode italienne Sénégal" />
        <link rel="canonical" href="https://davidroma.sn/contact" />
      </Helmet>

      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center bg-gradient-to-br from-black via-[#0f2557] to-black">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/3 left-1/2 w-96 h-96 bg-[#d4af37] rounded-full blur-[150px]"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
            className="mb-6 text-white"
            style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(3rem, 7vw, 5rem)', letterSpacing: '-0.02em' }}
          >
            Contact & Rendez-vous
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-2xl text-gray-200 mb-4">
            Nous sommes à votre écoute
          </motion.p>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="text-[#d4af37] text-lg" style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic' }}>
            Conseil en style · Originaux italiens · Prix imbattables
          </motion.p>
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section className="py-32 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            <AnimatedSection>
              <div>
                <h2 className="mb-8 text-[#0a0a0a]" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.02em' }}>
                  Envoyez-nous un <span className="text-[#d4af37]">message</span>
                </h2>
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="contact-name" className="block mb-3 text-gray-700 text-lg">Nom complet</label>
                    <input type="text" id="contact-name" name="name" value={contactForm.name} onChange={handleContactChange} required
                      className="w-full px-6 py-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-transparent transition-all duration-300" />
                  </div>
                  <div>
                    <label htmlFor="contact-phone" className="block mb-3 text-gray-700 text-lg">Téléphone</label>
                    <input type="tel" id="contact-phone" name="phone" value={contactForm.phone} onChange={handleContactChange} required
                      className="w-full px-6 py-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-transparent transition-all duration-300" />
                  </div>
                  <div>
                    <label htmlFor="contact-message" className="block mb-3 text-gray-700 text-lg">Message</label>
                    <textarea id="contact-message" name="message" value={contactForm.message} onChange={handleContactChange} required rows={6}
                      className="w-full px-6 py-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-transparent transition-all duration-300 resize-none" />
                  </div>
                  <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} type="submit"
                    className="w-full bg-[#0f2557] text-white px-8 py-5 hover:bg-[#0a1a3a] transition-all duration-300"
                    style={{ letterSpacing: '0.05em' }}>
                    Envoyer via WhatsApp
                  </motion.button>
                </form>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                    href={`https://wa.me/${SITE_CONFIG.whatsapp}`} target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-4 hover:bg-green-700 transition-all duration-300">
                    <MessageCircle className="h-5 w-5" />
                    <span>WhatsApp Dakar</span>
                  </motion.a>
                  <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                    href={`tel:${SITE_CONFIG.telephone}`}
                    className="flex items-center justify-center gap-2 bg-[#d4af37] text-black px-6 py-4 hover:bg-[#c49d2e] transition-all duration-300">
                    <Phone className="h-5 w-5" />
                    <span>Appeler Dakar</span>
                  </motion.a>
                  <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                    href={`https://wa.me/${SITE_CONFIG.whatsapp_italie}`} target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-green-700 text-white px-6 py-4 hover:bg-green-800 transition-all duration-300">
                    <MessageCircle className="h-5 w-5" />
                    <span>WhatsApp Italie</span>
                  </motion.a>
                  <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="flex items-center justify-center gap-2 bg-[#0f2557] text-white px-6 py-4 hover:bg-[#0a1a3a] transition-all duration-300">
                    <Mail className="h-5 w-5" />
                    <span>Envoyer un email</span>
                  </motion.a>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="space-y-10">
                <div>
                  <h2 className="mb-8 text-[#0a0a0a]" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.02em' }}>
                    Informations
                  </h2>
                  <div className="space-y-8">
                    {[
                      { icon: MapPin, title: 'Adresse', content: SITE_CONFIG.adresse },
                      { icon: Clock, title: "Horaires d'ouverture", content: SITE_CONFIG.horaires.map(h => `${h.jours}: ${h.heures}`).join('\n') },
                      { icon: Phone, title: 'Téléphone Dakar', content: SITE_CONFIG.telephone },
                      { icon: Globe, title: 'Téléphone Italie', content: SITE_CONFIG.telephone_italie },
                      { icon: Mail, title: 'Email', content: SITE_CONFIG.email },
                    ].map((item, index) => (
                      <motion.div key={index} whileHover={{ x: 10 }} transition={{ duration: 0.3 }} className="flex gap-6">
                        <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-[#0f2557] to-black rounded-full flex items-center justify-center">
                          <item.icon className="h-6 w-6 text-[#d4af37]" />
                        </div>
                        <div>
                          <h3 className="mb-2 text-[#0a0a0a] text-xl" style={{ fontFamily: 'var(--font-serif)' }}>{item.title}</h3>
                          <p className="text-gray-600 text-lg whitespace-pre-line">{item.content}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* ===== GOOGLE MAP ===== */}
                <div className="overflow-hidden rounded-sm shadow-lg">
                  <iframe
                    title="Localisation David Roma — SICAP Liberté 1 Dakar"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.0327372707634!2d-17.465325125761545!3d14.710740785788756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec172bc0e2758c5%3A0x77754b00385ee0bc!2sDavid%20Roma!5e0!3m2!1sfr!2sus!4v1777023174847!5m2!1sfr!2sus"
                    width="100%"
                    height="320"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <a
                  href="https://www.google.com/maps/place/?q=place_id:ChIJxSsXziv-Fh8RvOBeOABLdXc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 border border-[#0f2557] text-[#0f2557] px-6 py-3 hover:bg-[#0f2557] hover:text-white transition-all duration-300 text-sm tracking-wider"
                >
                  <MapPin className="h-4 w-4" />
                  Ouvrir dans Google Maps
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ===== RENDEZ-VOUS ===== */}
      <section className="py-32 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="mb-16 text-center">
              <h2 className="mb-6 text-[#0a0a0a]" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.02em' }}>
                Prendre <span className="text-[#d4af37]">Rendez-vous</span>
              </h2>
              <p className="text-gray-700 text-xl leading-relaxed max-w-3xl mx-auto mb-4">
                Bénéficiez d'un service personnalisé dans notre showroom de Dakar.
                David Roma vous accompagne personnellement pour trouver les pièces qui correspondent
                parfaitement à votre style.
              </p>
              <p className="text-[#d4af37] text-lg italic" style={{ fontFamily: 'var(--font-serif)' }}>
                Le conseil en style est inclus — c'est notre différence.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <form onSubmit={handleAppointmentSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="appt-name" className="block mb-3 text-gray-700 text-lg">Nom complet *</label>
                  <input type="text" id="appt-name" name="name" value={appointmentForm.name} onChange={handleAppointmentChange} required
                    className="w-full px-6 py-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-transparent transition-all duration-300" />
                </div>
                <div>
                  <label htmlFor="appt-phone" className="block mb-3 text-gray-700 text-lg">Téléphone *</label>
                  <input type="tel" id="appt-phone" name="phone" value={appointmentForm.phone} onChange={handleAppointmentChange} required
                    className="w-full px-6 py-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-transparent transition-all duration-300" />
                </div>
              </div>

              <div>
                <label htmlFor="appt-service" className="block mb-3 text-gray-700 text-lg">Service souhaité *</label>
                <select id="appt-service" name="service" value={appointmentForm.service} onChange={handleAppointmentChange} required
                  className="w-full px-6 py-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-transparent transition-all duration-300">
                  {services.map((s) => <option key={s.value} value={s.value}>{s.label}</option>)}
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="appt-date" className="block mb-3 text-gray-700 text-lg">
                    <Calendar className="inline h-5 w-5 mr-2" />Date souhaitée *
                  </label>
                  <input type="date" id="appt-date" name="date" value={appointmentForm.date} onChange={handleAppointmentChange} required
                    className="w-full px-6 py-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-transparent transition-all duration-300" />
                </div>
                <div>
                  <label htmlFor="appt-time" className="block mb-3 text-gray-700 text-lg">
                    <Clock className="inline h-5 w-5 mr-2" />Heure souhaitée *
                  </label>
                  <input type="time" id="appt-time" name="time" value={appointmentForm.time} onChange={handleAppointmentChange} required
                    className="w-full px-6 py-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-transparent transition-all duration-300" />
                </div>
              </div>

              <div>
                <label htmlFor="appt-notes" className="block mb-3 text-gray-700 text-lg">Notes supplémentaires (optionnel)</label>
                <textarea id="appt-notes" name="notes" value={appointmentForm.notes} onChange={handleAppointmentChange} rows={4}
                  placeholder="Précisez vos besoins, préférences de couleur, occasion..."
                  className="w-full px-6 py-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-transparent transition-all duration-300 resize-none" />
              </div>

              <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} type="submit"
                className="w-full bg-[#0f2557] text-white px-8 py-5 hover:bg-[#0a1a3a] transition-all duration-300"
                style={{ letterSpacing: '0.05em' }}>
                Réserver via WhatsApp
              </motion.button>
            </form>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <div className="mt-16 bg-gradient-to-br from-[#0f2557] to-black text-white p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#d4af37] rounded-full blur-[100px] opacity-20"></div>
              <div className="relative z-10">
                <h3 className="mb-6 text-[#d4af37]" style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem' }}>
                  Ce qui vous attend
                </h3>
                <ul className="space-y-4 text-gray-200 text-lg">
                  {[
                    'Accueil personnalisé par David Roma lui-même',
                    'Conseils de style basés sur 15+ ans d\'expérience en Italie',
                    'Présentation des collections et des tissus disponibles',
                    'Pièces 100% originales moins chères qu\'en Italie',
                    'Durée moyenne : 45 minutes à 1 heure',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-[#d4af37] mr-3">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}