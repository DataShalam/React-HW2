import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <>
      <header className="header">
        <nav>
          <ul className="nav-list">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#watchlist">Watchlist</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
