import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from './pages/Index';
import Crea_tu_meet from './pages/Crear';
import Proximos_eventos from './pages/Eventos';
import Perfil from './pages/Perfil';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/crear" element={<Crea_tu_meet />} />
        <Route path="/eventos" element={<Proximos_eventos />} />
        <Route path="/perfil" element={<Perfil />} />
    </Routes>
  </BrowserRouter>
  );
};

export default App;
