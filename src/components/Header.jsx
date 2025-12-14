import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header" role="banner">
      <div className="header-inner">
        <div className="brand-logo">Celestia</div>
        <nav className="header-nav" aria-label="Main navigation">
          <Link to="/">Home</Link>
          <a href="#">Collections</a>
          <a href="#">Brands</a>
          <a href="#">About</a>
        </nav>
      </div>
    </header>
  );
}
