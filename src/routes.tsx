import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from 'components/menu';

const Inicio = lazy(() => import('pages/inicio'));
const Cardapio = lazy(() => import('pages/cardapio'));
const PaginaPadrao = lazy(() => import('components/paginaPadrao'));
const Footer = lazy(() => import('components/footer'));
const Prato = lazy(() => import('pages/prato'));
const Sobre = lazy(() => import('pages/cardapio/sobre'));
const NotFound = lazy(() => import('pages/notFound'));

export default function AppRouter() {
  return (
    <main>
      <Router>
        <Suspense fallback="Carregando">
          <Menu />
          <Routes>
            <Route path="/" element={<PaginaPadrao />}>
              <Route index element={<Inicio />} />
              <Route path="cardapio" element={<Cardapio />} />
              <Route path="sobre" element={<Sobre />} />
              <Route path="prato/:id" element={<Prato />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </Suspense>
      </Router>
    </main>
  );
}
