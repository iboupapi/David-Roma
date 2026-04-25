import { Link } from 'react-router';
import { motion } from 'motion/react';
import { Home } from 'lucide-react';

export function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 bg-white">
      <div className="text-center">
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6 text-[#0a0a0a]"
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(4rem, 10vw, 8rem)',
            letterSpacing: '-0.02em',
          }}
        >
          404
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-32 h-[3px] bg-[#d4af37] mx-auto mb-8"
        />

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-6 text-gray-700"
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(1.75rem, 4vw, 3rem)',
          }}
        >
          Page non trouvée
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-gray-600 mb-12 text-xl"
        >
          La page que vous recherchez n'existe pas ou a été déplacée.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Link
            to="/"
            className="inline-flex items-center gap-3 bg-[#0f2557] text-white px-10 py-5 hover:bg-[#0a1a3a] transition-all duration-300 hover:shadow-[0_10px_40px_rgba(15,37,87,0.3)] hover:scale-105 group"
          >
            <Home className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
            <span style={{ letterSpacing: '0.05em' }}>Retour à l'accueil</span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
