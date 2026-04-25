import { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router';
import { Menu, X } from 'lucide-react';
import logo from '../../imports/Logo_David_Roma.png';
import logoDark from '../../imports/David_Roma__2_-removebg-preview.png';

export function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Scroll en haut à chaque changement de page
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  // Détection du scroll pour la navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Accueil' },
    { path: '/a-propos', label: 'À Propos' },
    { path: '/collections', label: 'Collections' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen flex flex-col">
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
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand */}
            <div>
              <img
                src={logoDark}
                alt="David Roma"
                className="h-12 w-auto object-contain mb-4"
                style={{ minWidth: '120px', maxWidth: '180px' }}
              />
              <p className="text-gray-300 text-sm">
                L'élégance italienne au cœur de Dakar
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
                Navigation
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

            {/* Contact Info */}
            <div>
              <h3 className="mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
                Contact
              </h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>Dakar, Sénégal</li>
                <li>+221 78 525 14 38</li>
                <li>Lun - Sam: 10h00 - 21h00</li>
                <li>Dim: 15h00 - 20h00</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} David Roma. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
