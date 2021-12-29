import React from 'react';

import GlobaStyle from './styles/global';

// import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

const App: React.FC = function () {
  return (
    <>
      <SignUp />
      <GlobaStyle />
    </>
  );
};

export default App;
