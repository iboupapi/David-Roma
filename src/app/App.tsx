import { RouterProvider } from 'react-router';
import { router } from './routes';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import '../styles/index.css';
import '../styles/tailwind.css';
import '../styles/theme.css';
import '../styles/fonts.css';

export default function App() {
  return (
    <HelmetProvider>
      <Helmet>
        {/* Favicon principal moderne (SVG) */}
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />

        {/* Fallback PNG pour les navigateurs qui ne lisent pas le SVG */}
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        
        {/* Pour l'icône de raccourci classique (essentiel pour Google Search Console) */}
        <link rel="shortcut icon" href="/favicon.ico" />

        {/* Icône pour Apple / iOS */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        
        {/* Lien vers ton manifest que l'on voit dans ton dossier public */}
        <link rel="manifest" href="/site.webmanifest" />
      </Helmet>

      <RouterProvider router={router} />
    </HelmetProvider>
  );
}