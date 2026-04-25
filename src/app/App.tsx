import { RouterProvider } from 'react-router';
import { router } from './routes';
import '../styles/index.css';
import '../styles/tailwind.css';
import '../styles/theme.css';
import '../styles/fonts.css';
import { HelmetProvider } from 'react-helmet-async';

export default function App() {
  return (<HelmetProvider>
    <RouterProvider router={router} />
    </HelmetProvider>);
}