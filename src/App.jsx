import React from 'react';
import './App.css';
import obterMensagem from './api/mensagem';
import MeuComponente from './MeuComponente';
import Navegacao from './navegacao';

function App() {
  const mensagem = obterMensagem();

  return (
    <div className="App">
      <header className="App-header">
        <MeuComponente mensagem={`Olá, Raphael!`} />
        <p>{mensagem}</p>
        <h1>Roteamento entre Telas</h1>
        <Navegacao />
      </header>
    </div>
  );
}

export default App;

