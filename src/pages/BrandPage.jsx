import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { brandMap } from "../Data/BrandMap";

/**
 * BrandPage - dynamic route /brand/:id
 * brandMap is an object mapping id -> data (simple sample provided)
 */
export default function BrandPage() {
  const { id } = useParams();
  const brand = brandMap[id];

  const [selected, setSelected] = useState(null);
  const [billingVisible, setBillingVisible] = useState(false);
  const [invoice, setInvoice] = useState(null);

  if (!brand) {
    return (
      <div className="section">
        <h3>Brand not found</h3>
        <p>We couldn't find the brand you're looking for.</p>
      </div>
    );
  }

  function openModal(watch) {
    setSelected(watch);
    setBillingVisible(false);
    setInvoice(null);
  }
  function closeModal() {
    setSelected(null);
  }
  function handlePay(formValues) {
    const id = Math.floor(100000 + Math.random() * 900000);
    setInvoice({ orderId: id, buyer: formValues });
    setBillingVisible(false);
  }

  return (
    <div>
      <section className="hero" style={{ backgroundImage: `url(${brand.heroImage})` }}>
        <div className="hero-inner">
          <div className="hero-card">
            <h1>{brand.name}</h1>
            <p>{brand.intro}</p>
          </div>
        </div>
      </section>

      <section className="story">
        <div className="story-inner">
          <div className="story-image">
            <img src={brand.storyImage} alt={`${brand.name} story`} />
          </div>
          <div className="story-text">
            <h2>The Legacy of {brand.name}</h2>
            <p>{brand.story}</p>
          </div>
        </div>
      </section>

      <div className="section">
        <h3>{brand.name} Lookbook</h3>
        <p className="sub">Explore curated timepieces</p>

        <div className="lookbook-grid">
          {brand.watches.map(w => (
            <div key={w.id} className="card">
              <button style={{ border: 0, background: "transparent", padding: 0, width: "100%" }} onClick={() => openModal(w)}>
                <img src={w.image} alt={w.name} />
                <div className="card-body">
                  <h4>{w.name}</h4>
                  <p>₹{w.price.toLocaleString()}</p>
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <div className="modal-overlay" role="dialog" aria-modal="true">
          <div className="modal">
            <button onClick={closeModal} style={{ float: "right", border: "none", background: "transparent", fontSize: 24 }}>✕</button>

            <img src={selected.image} alt={selected.name} />
            <h4>{selected.name}</h4>
            <p>{selected.description}</p>
            <p style={{ fontWeight: 600, color: "var(--gold-1)" }}>₹{selected.price.toLocaleString()}</p>

            {!billingVisible && !invoice && (
              <button className="btn" onClick={() => setBillingVisible(true)}>Buy Now</button>
            )}

            {billingVisible && !invoice && (
              <div style={{ marginTop: 12 }}>
                <h4>Billing</h4>
                <BillingForm onPay={handlePay} />
              </div>
            )}

            {invoice && (
              <div style={{ marginTop: 12, background: "#fff8e6", padding: 12, borderRadius: 8 }}>
                <h4 style={{ color: "var(--gold-1)" }}>Invoice</h4>
                <p>Order ID: <strong>{invoice.orderId}</strong></p>
                <p>Buyer: {invoice.buyer.name}</p>
                <p>Email: {invoice.buyer.email}</p>
                <div style={{ marginTop: 8 }}>
                  <button className="btn" onClick={() => { closeModal(); }}>Close</button>
                </div>
              </div>
            )}

          </div>
        </div>
      )}
    </div>
  );
}

/* simple local billing form component */
function BillingForm({ onPay }) {
  const [form, setForm] = React.useState({ name: "", email: "", address: "", card: "", cvv: "" });
  return (
    <div>
      <input className="form-field" placeholder="Full name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
      <input className="form-field" placeholder="Email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
      <input className="form-field" placeholder="Address" value={form.address} onChange={e => setForm({ ...form, address: e.target.value })} />
      <input className="form-field" placeholder="Card number" value={form.card} onChange={e => setForm({ ...form, card: e.target.value })} />
      <input className="form-field" placeholder="CVV" value={form.cvv} onChange={e => setForm({ ...form, cvv: e.target.value })} />
      <button className="btn" onClick={() => onPay(form)}>Pay Now</button>
    </div>
  );
}
