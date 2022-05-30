import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from 'components/menu';

import Cardapio from 'pages/cardapio';
import Inicio from 'pages/inicio';
import PaginaPadrao from 'components/paginaPadrao';
import Sobre from 'pages/cardapio/sobre';
import NotFound from 'pages/notFound';
import Footer from 'components/footer';
import Prato from 'pages/prato';

export default function AppRouter() {
  return (
    <main>
      <Router>
        <Menu />
        <Routes>
          <Route path="/" element={<PaginaPadrao />}>
            <Route index element={<Inicio />} />
            <Route path="cardapio" element={<Cardapio />} />
            <Route path="sobre" element={<Sobre />} />
            <Route path='prato/:id' element={<Prato />} />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>

    </main>
  );
}
