import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobaStyle from './styles/global';

import Rotas from './routes';

const App: React.FC = function () {
  return (
    <BrowserRouter>
      <Rotas />
      <GlobaStyle />
    </BrowserRouter>
  );
};

export default App;
