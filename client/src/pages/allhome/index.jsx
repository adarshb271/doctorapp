// App.js
import React from 'react';
import { useNavigate, NavLink } from 'react-router-dom';

import './allhome.css';

// Header Component
const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="logo">My Hospital</div>
        <ul className="nav-links">
          <li>
            <p>
              <NavLink className="link" to="/admin/login">
                Admin
              </NavLink>
            </p>
          </li>
          <li>
            <p>
              <NavLink className="link" to="/doctor/login">
                Doctor
              </NavLink>
            </p>
          </li>
          <li>
            <p>
              <NavLink className="link" to="/user/login">
                user
              </NavLink>
            </p>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

// Hero Section Component
const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Your Health, Our Priority</h1>
        <p>Providing Quality Healthcare Since 1990</p>
        <button className="hero-button">Explore More</button>
      </div>
    </section>
  );
};

// Services Component
const Services = () => {
  const servicesData = [
    {
      title: 'Cardiology',
      description: 'Advanced cardiac care and surgeries.',
    },
    { title: 'Neurology', description: 'Comprehensive neurological services.' },
    { title: 'Orthopedics', description: 'Expert orthopedic treatments.' },
  ];

  return (
    <section id="services" className="services-section">
      <h2>Our Services</h2>
      <div className="services-container">
        {servicesData.map((service, index) => (
          <div className="service-card" key={index}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <button className="service-button">Learn More</button>
          </div>
        ))}
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer id="contact" className="footer-section">
      <div className="footer-content">
        <h3>Contact Us</h3>
        <p>123 Health Street, Wellness City, Country</p>
        <p>Email: contact@myhospital.com</p>
        <p>Phone: +123-456-7890</p>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} My Hospital. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

// App Component
function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
