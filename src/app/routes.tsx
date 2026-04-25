import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./components/pages/Home";
import { About } from "./components/pages/About";
import { Collections } from "./components/pages/Collections";
import { ProductShowcase } from "./components/pages/ProductShowcase";
import { Contact } from "./components/pages/Contact";
import { Navigate } from 'react-router';
import { NotFound } from "./components/pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "a-propos", Component: About },
      { path: "collections", Component: Collections },
      { path: "collection/:category", Component: ProductShowcase },
      { path: "contact", Component: Contact },
      { path: "rendez-vous", element: <Navigate to="/contact" replace /> },
      { path: "*", Component: NotFound },
    ],
  },
]);
