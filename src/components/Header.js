import React, { useEffect, useState } from 'react';
import '../App.css';
import Navbar from './Navbar';
import About from './About';

function Header() {
  const [text, setText] = useState('');
  const fullText = "Welcome to our Legal Awareness Platform - Legal Sahayak";
  const typingSpeed = 50;

  useEffect(() => {
    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, typingSpeed);

    return () => {
      clearInterval(typingInterval);
    };
  }, []);

  return (
    <div className='header'>
      <Navbar />
      <div className="header-content">
        <h1>{text}</h1>
        <p>We empower all citizens with accessible legal knowledge and guidance, promoting awareness and improving access to justice.</p>
      </div>
    </div>
  );
}

export default Header;
