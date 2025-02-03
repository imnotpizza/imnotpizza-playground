
import Nuqs from '@/pages/Nuqs';
import React19Sample from '@/pages/React19Sample';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/r19" element={<React19Sample />} />
        <Route path="/nuqs" element={<Nuqs />} />
      </Routes>
    </Router>
  );
}
