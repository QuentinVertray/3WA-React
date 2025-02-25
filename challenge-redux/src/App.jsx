import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import DenominationPage from './pages/Denomination/index.page.jsx';
import ChangeDenominationPage from './pages/ChangeDenomination/index.page.jsx';
import Navigation from './components/Navigation.jsx';

function App() {
  return (
    <>
        <Router>
            <Navigation />
            <Routes>
                <Route path="/" element={<DenominationPage />} />
                <Route path="/change" element={<ChangeDenominationPage />} />
            </Routes>
        </Router>
    </>
  )
}

export default App
