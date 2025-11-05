import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
      </main>
      <footer className="border-t border-white/10 py-8 bg-transparent">
        <div className="container mx-auto px-4 lg:px-8 text-center text-white/60 text-sm">
          <p>&copy; {new Date().getFullYear()} ArxDigital. Allur réttur áskilinn.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;