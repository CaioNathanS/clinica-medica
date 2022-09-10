import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { LandingPage } from "./pages/LandingPage";
import './index.css';
import { ConsultsPage } from "./pages/ConsultsPage";
import { ExamsPage } from "./pages/ExamsPage";
import { AboutPage } from "./pages/AboutPage/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { SchedulingPage } from "./pages/SchedulingPage";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/consultas" element={<ConsultsPage />} />
        <Route path="/exames" element={<ExamsPage />} />
        <Route path="/sobre" element={<AboutPage />} />
        <Route path="/contato" element={<ContactPage />} />
        <Route path="/agendamento" element={<SchedulingPage />} />
      </Routes>
  </Router>
  );
}

export default App;
