import React from "react";
import { Link } from "react-router-dom";
import { brands } from "../Data/Brand";

export default function Home() {
  return (
    <div>
      <section className="hero"
               style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&w=1400&q=80')" }}>
        <div className="hero-inner">
          <div className="hero-card">
            <h1>Celestia Watch House</h1>
            <p>Discover curated collections from the world's most celebrated watch maisons.</p>
          </div>
        </div>
      </section>

      <div className="section">
        <h3>Brands</h3>
        <p className="sub">Click a brand to explore its lookbook</p>

        <div className="lookbook-grid" style={{ gridTemplateColumns: "repeat(4,1fr)", gap: 18 }}>
          {brands.map(b => (
            <div key={b.id} className="card">
              <img src={b.thumb} alt={b.name} />
              <div className="card-body">
                <h4>{b.name}</h4>
                <p style={{ color: "#888" }}>{b.tag}</p>
                <Link to={`/brand/${b.id}`} className="btn" style={{ marginTop: 8 }}>Explore</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
