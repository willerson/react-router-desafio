import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Contato from './Components/Contato';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Pagina404 from './Components/Pagina404';
import Produto from './Components/Produto';
import Produtos from './Components/Produtos';

const App = () => {
  return (
    <div className="App">
      {/* O BrowserRouter deve ser o componente pai que envolve tudo que depender do react-router. */}
      <BrowserRouter>
        <Header />
        <div className="content">
          {/* O Routes envolve todos os Route. */}
          <Routes>
            {/* O Route recebe um caminho path e se o caminho for o mesmo do URL, irá renderizar o component que estiver dentro de element={} */}
            <Route path="/" element={<Produtos />} />
            <Route path="produto/:id" element={<Produto />} />
            <Route path="contato" element={<Contato />} />
            <Route path="*" element={<Pagina404 />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
