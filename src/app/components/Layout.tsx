// src/app/components/Layout.tsx
import { useState, useEffect, useRef } from 'react';
import { Link, Outlet, useLocation } from 'react-router';
import { Menu, X, Globe, ChevronDown, Check } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import logo from '../../imports/Logo_David_Roma-removebg-preview.png';
import logoDark from '../../imports/David_Roma__2_-removebg-preview.png';
import { JsonLd } from './SEO';

// Composants internes pour afficher proprement des drapeaux vectoriels (SVG)
function FranceFlag({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3 2" className={className} width="16" height="12">
      <rect width="1" height="2" fill="#002395"/>
      <rect x="1" width="1" height="2" fill="#ffffff"/>
      <rect x="2" width="1" height="2" fill="#ED2939"/>
    </svg>
  );
}

function ItalyFlag({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3 2" className={className} width="16" height="12">
      <rect width="1" height="2" fill="#009246"/>
      <rect x="1" width="1" height="2" fill="#ffffff"/>
      <rect x="2" width="1" height="2" fill="#ce2b37"/>
    </svg>
  );
}

export function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setLangDropdownOpen(false);
  };

  // Fermer le dropdown si on clique en dehors
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setLangDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: t('nav.home') },
    { path: '/a-propos', label: t('nav.about') },
    { path: '/collections', label: t('nav.collections') },
    { path: '/contact', label: t('nav.contact') },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const currentLang = i18n.language || 'fr';

  return (
    <div className="min-h-screen flex flex-col">
      <JsonLd />
      
      {/* Navigation */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-black/95 backdrop-blur-md border-b border-white/10'
            : 'bg-white/95 backdrop-blur-sm border-b border-gray-200'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center transition-opacity hover:opacity-80">
              <img
                src={scrolled ? logoDark : logo}
                alt="David Roma"
                className="h-12 w-auto object-contain transition-all duration-500"
                style={{ minWidth: '120px', maxWidth: '180px' }}
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative transition-colors duration-300 group ${
                    scrolled
                      ? isActive(link.path)
                        ? 'text-[#d4af37]'
                        : 'text-white hover:text-[#d4af37]'
                      : isActive(link.path)
                      ? 'text-[#0f2557]'
                      : 'text-gray-600 hover:text-[#0f2557]'
                  }`}
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-[2px] w-0 transition-all duration-300 group-hover:w-full ${
                      scrolled ? 'bg-[#d4af37]' : 'bg-[#0f2557]'
                    }`}
                  />
                </Link>
              ))}

              {/* Sélecteur de Langue Moderne (Dropdown avec drapeaux) */}
              <div className="relative border-l pl-4 border-gray-300/50 ml-2" ref={dropdownRef}>
                <button
                  onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-medium tracking-wider transition-all ${
                    scrolled
                      ? 'text-white border-white/10 hover:bg-white/5 hover:border-white/30'
                      : 'text-gray-700 border-gray-200 hover:bg-gray-50 hover:border-gray-400'
                  }`}
                >
                  <Globe className="h-3.5 w-3.5 opacity-70" />
                  <span className="uppercase">{currentLang}</span>
                  {currentLang === 'fr' ? <FranceFlag className="rounded-sm shadow-sm" /> : <ItalyFlag className="rounded-sm shadow-sm" />}
                  <ChevronDown className={`h-3 w-3 opacity-50 transition-transform duration-300 ${langDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Menu déroulant des langues */}
                {langDropdownOpen && (
                  <div
                    className={`absolute right-0 mt-2 w-36 rounded-xl border p-1 shadow-xl backdrop-blur-xl transition-all animate-in fade-in slide-in-from-top-2 duration-200 ${
                      scrolled
                        ? 'bg-black/95 border-white/10 text-white'
                        : 'bg-white/95 border-gray-100 text-gray-800'
                    }`}
                  >
                    {/* Option Français */}
                    <button
                      onClick={() => changeLanguage('fr')}
                      className={`flex items-center justify-between w-full text-left px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                        currentLang === 'fr'
                          ? 'bg-[#d4af37]/10 text-[#d4af37]'
                          : scrolled
                          ? 'hover:bg-white/5 text-gray-300 hover:text-white'
                          : 'hover:bg-gray-50 text-gray-600 hover:text-black'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <FranceFlag className="rounded-sm shadow-sm" />
                        <span>Français</span>
                      </div>
                      {currentLang === 'fr' && <Check className="h-3 w-3 text-[#d4af37]" />}
                    </button>

                    {/* Option Italien */}
                    <button
                      onClick={() => changeLanguage('it')}
                      className={`flex items-center justify-between w-full text-left px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                        currentLang === 'it'
                          ? 'bg-[#d4af37]/10 text-[#d4af37]'
                          : scrolled
                          ? 'hover:bg-white/5 text-gray-300 hover:text-white'
                          : 'hover:bg-gray-50 text-gray-600 hover:text-black'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <ItalyFlag className="rounded-sm shadow-sm" />
                        <span>Italiano</span>
                      </div>
                      {currentLang === 'it' && <Check className="h-3 w-3 text-[#d4af37]" />}
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Mobile Navigation Controls */}
            <div className="flex items-center md:hidden space-x-3">
              {/* Bouton Langue Mobile discret avec son drapeau actuel */}
              <button
                onClick={() => changeLanguage(currentLang === 'fr' ? 'it' : 'fr')}
                className={`flex items-center gap-1.5 text-[11px] font-bold border rounded-full px-3 py-1 transition-all ${
                  scrolled
                    ? 'text-white border-white/20 bg-white/5'
                    : 'text-[#0f2557] border-[#0f2557]/20 bg-[#0f2557]/5'
                }`}
              >
                <span className="uppercase">{currentLang === 'fr' ? 'IT' : 'FR'}</span>
                {currentLang === 'fr' ? <ItalyFlag className="rounded-sm" /> : <FranceFlag className="rounded-sm" />}
              </button>
              
              <button
                className="p-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <X className={`h-6 w-6 ${scrolled ? 'text-white' : 'text-[#0f2557]'}`} />
                ) : (
                  <Menu className={`h-6 w-6 ${scrolled ? 'text-white' : 'text-[#0f2557]'}`} />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className={`md:hidden border-t ${scrolled ? 'bg-black border-white/10' : 'bg-white border-gray-200'}`}>
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block py-2 transition-colors ${
                    scrolled
                      ? isActive(link.path)
                        ? 'text-[#d4af37]'
                        : 'text-white'
                      : isActive(link.path)
                      ? 'text-[#0f2557]'
                      : 'text-gray-600'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-black text-white border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Brand */}
            <div className="md:col-span-4">
              <img
                src={logoDark}
                alt="David Roma"
                className="h-12 w-auto object-contain mb-4"
                style={{ minWidth: '120px', maxWidth: '180px' }}
              />
              <p className="text-gray-300 text-sm mb-4">
                {t('footer.tagline')}
              </p>
              <div className="text-xs text-gray-400 space-y-1">
                <p>{t('footer.schedule_week')}</p>
                <p>{t('footer.schedule_sun')}</p>
              </div>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-2">
              <h3 className="mb-4 text-[#d4af37]" style={{ fontFamily: 'var(--font-serif)' }}>
                {t('nav.collections')}
              </h3>
              <ul className="space-y-2 text-sm">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-gray-300 hover:text-[#d4af37] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info (International) */}
            <div className="md:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {/* Sénégal */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#d4af37] mb-3">
                  {t('footer.shop_senegal')}
                </h4>
                <ul className="space-y-1 text-sm text-gray-300">
                  <li className="font-medium">Dakar</li>
                  <li className="text-gray-400 text-xs">SICAP Liberté 1</li>
                  <li className="pt-1 text-xs">+221 78 525 14 38</li>
                </ul>
              </div>

              {/* France */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#d4af37] mb-3">
                  France
                </h4>
                <ul className="space-y-1 text-sm text-gray-300">
                  <li className="font-medium">Île-de-France</li>
                  <li className="text-gray-400 text-xs">
                    9 Avenue des Châtaigniers<br />77140 Moncourt Fromonville
                  </li>
                  <li className="pt-1 text-xs">+33 7 67 27 01 96</li>
                </ul>
              </div>

              {/* Italie */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#d4af37] mb-3">
                  Italie
                </h4>
                <ul className="space-y-1 text-sm text-gray-300">
                  <li className="font-medium">Roma</li>
                  <li className="text-gray-400 text-xs">
                    Via Pietro Belon 115<br />00169 Roma
                  </li>
                  <li className="pt-1 text-xs">+39 389 0289574</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} David Roma. {t('footer.rights')}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}