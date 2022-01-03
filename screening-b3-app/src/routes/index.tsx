import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboards from '../pages/Dashboards';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const Rotas: React.FC = () => (
  <Routes>
    <Route path="/" element={<SignIn />} />
    <Route path="/signup" element={<SignUp />} />
    <Route path="/dashboards" element={<Dashboards />} />
  </Routes>
);

export default Rotas;
