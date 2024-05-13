import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Buku from './Page/Buku';
import Total from './Page/Total';
import Pegawai from './Page/Pegawai';




const App = () => {
  return (
    <Router>
      <div>
        <Routes>
        <Route path="/" element={<Buku />} />
        <Route path="/Total" element={<Total />} />
        <Route path="/Pegawai" element={<Pegawai />} />
        </Routes>
      </div>
    </Router>
  );
};
export default App;