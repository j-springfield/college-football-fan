import React from 'react';
import './NavBar.scss';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from '../../pages/Home.js';
import About from '../../pages/About.js';
import Contact from '../../pages/Contact.js';
import Teams from '../../pages/Teams.js';
import logo from '../../assets/NCAA_logo.svg.png';

const linkStyle = {
   color: 'white',
   textDecoration: 'none',
}

const NavBar = () => (
   <>
      <Router>
         <div class='router'>
         <Link style={linkStyle} to="/"><img class='ncaa-logo' alt='ncaa-logo' src={logo}/></Link>
            <nav>
               <ul class='horizontal-nav'>
                  <li>
                     <Link style={linkStyle} to="/">Home</Link>
                  </li>
                  <li>
                     <Link style={linkStyle} to="/about">About</Link>
                  </li>
                  <li>
                     <Link style={linkStyle} to="/contact">Contact</Link>
                  </li>
               </ul>
            </nav>
         </div>

         <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/" element={<Home />} />
         </Routes>
      </Router>
   </>
);

export default NavBar;
