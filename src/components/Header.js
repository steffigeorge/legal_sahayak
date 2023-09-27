import React, { useEffect, useState } from "react";
import "../App.css";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

function Header() {
  const [text, setText] = useState("");
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
    <div className="header">
      <Navbar />
      <div className="header-content">
        <h1>{text}</h1>
        <p>
          We empower all citizens with accessible legal knowledge and guidance,
          promoting awareness and improving access to justice.
        </p>
        <p className="chat-head">
          Have a legal question or need information? Ask us!
        </p>
        <Link to="/chatbot" className="bot-button">
          <span>Get Legal Answers from</span>
          <img
            src="../chatbot.png"
            alt="Chatbot Image"
            className="chatbot-image"
          />
        </Link>
      </div>
    </div>
  );
}

export default Header;
