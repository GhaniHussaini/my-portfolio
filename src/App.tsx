import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/Layout';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Stats from './components/Stats';
import Contact from './components/Contact';
import Background from './components/Background';
import { AnimatePresence } from './components/animations/AnimatePresence';

function App() {
  return (
    <ThemeProvider>
      <Background />
      <Layout>
        <AnimatePresence>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Stats />
          <Contact />
        </AnimatePresence>
      </Layout>
    </ThemeProvider>
  );
}

export default App;