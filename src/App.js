import React from "react";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import Content from "./components/Content/Content.jsx";
import Footer from "./components/Footer/Footer.jsx";

export default function App() {
  return (
    <div className="app-container">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}
