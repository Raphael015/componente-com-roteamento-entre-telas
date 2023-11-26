import React from 'react';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Tela1 from './tela1';
import Tela2 from './tela2';

const Navegacao = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Tela 1</Link>
            </li>
            <li>
              <Link to="/tela2">Tela 2</Link>
            </li>
          </ul>
        </nav>

        <hr />

        <Routes>
          <Route path="/" element={<Tela1 />} />
          <Route path="/tela2" element={<Tela2 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Navegacao;
