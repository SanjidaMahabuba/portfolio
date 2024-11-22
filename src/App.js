import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Footer from './components/Footer';

// Navbar Component
function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#resume">Resume</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

// ScrollToTop Component
function ScrollToTop() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

// Banner Section
function Banner() {
  return (
    <section id="home" className="banner">
      <h1>Welcome to My Portfolio</h1>
      <p>I'm a Web Developer</p>
    </section>
  );
}

// About Section
function About() {
  return (
    <section id="about" className="section">
      <h2>About Me</h2>
      <p>This is the about section where you can talk about yourself.</p>
    </section>
  );
}

// Projects Section
function Projects() {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      <p>This is the projects section where you showcase your work.</p>
    </section>
  );
}

// Resume Section
function Resume() {
  return (
    <section id="resume" className="section">
      <h2>Resume</h2>
      <p>This is the resume section where you can list your skills and experience.</p>
    </section>
  );
}

// Contact Section
function Contact() {
  return (
    <section id="contact" className="section">
      <h2>Contact</h2>
      <p>This is the contact section where you can provide contact information.</p>
    </section>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />
      <Banner />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <About />
      <Projects />
      <Resume />
      <Contact />
      <Footer /> 
    </Router>
  );
}

export default App;
