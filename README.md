# Contador React Simples

Um aplicativo de contador React simples que utiliza o hook `useState` para gerenciar o estado do contador. Fornece botões para incrementar e decrementar o valor.

## Instruções de Instalação

1. Clone o repositório:

    ```bash
    git clone https://github.com/Raphael015/componente-com-roteamento-entre-telas
    ```

2. Navegue até o diretório do projeto:

    ```bash
    cd seu-projeto
    ```

3. Instale as dependências:

    ```bash
    npm install
    ```

4. Execute o aplicativo:

    ```bash
    npm start
    ```

O aplicativo será iniciado em `http://localhost:3000/`.

## Exemplos de Uso

Este aplicativo é bastante simples. Ao iniciar, você verá a contagem atual e dois botões para incrementar e decrementar o valor.

```jsx
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
