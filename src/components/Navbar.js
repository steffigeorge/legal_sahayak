import { Link } from 'react-router-dom';
import '../App.css';
import React, { useEffect, useState } from 'react';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <h3 className="logo">Legal Sahayak</h3>
        <ul className="nav-items">
          <li className="nav-item">
            <Link to='/'>Home</Link>
          </li>
          <li className="nav-item">
            <Link to='/about'>About</Link>
          </li>
          <li className="nav-item">
            <Link to='/library'>Library</Link>
          </li>
          <li className="nav-item">
            <Link to='/news'>News</Link>
          </li>
          <li className="nav-item">
            <Link to='/chatbot' className='connect-button'>Conect with Lawyer</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
