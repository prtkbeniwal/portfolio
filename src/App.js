import React from 'react';
import './App.css';
import Home from './components/Home.js'
import Skills from './components/Skills.js'
import Projects from './components/Projects.js'
import GetInTouch from './components/GetInTouch.js'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Home />
      <Skills />
      <Projects />
      <GetInTouch />
      <Footer />
    </div>
  );
}

export default App;
