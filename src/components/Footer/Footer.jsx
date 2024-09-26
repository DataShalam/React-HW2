import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <nav>
        <ul className="nav-list">
          <li>
            <a href="#contact">Contact Us</a>
          </li>
          <li>
            <a href="#privacy">Privacy Policy</a>
          </li>
        </ul>
      </nav>
      <p>&copy; 2024 MyWebsite. All rights reserved.</p>
    </footer>
  );
}
