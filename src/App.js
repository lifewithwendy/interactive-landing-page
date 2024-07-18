import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import ContactForm from './components/ContactForm';
import { ThemeProvider } from './contexts/ThemeContext';
import { History, Team, Values } from './components/AboutSections';
import './App.css';

const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact/:contactId" element={<ContactForm />} />
          <Route path="/about" element={<About />}>
            <Route path="history" element={<History />} />
            <Route path="team" element={<Team />} />
            <Route path="values" element={<Values />} />
            <Route index element={<History />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
