import { useState } from 'react';
import Reveal from '../components/Reveal';
import { brand } from '../data/siteData';
import './Contact.css';

const initialForm = { name: '', email: '', phone: '', subject: '', message: '' };
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ state: 'idle', message: '' });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus({ state: 'loading', message: '' });

    try {
      const response = await fetch(`${API_BASE_URL}/api/v1/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || 'Something went wrong. Please try again.');
      }

      setStatus({ state: 'success', message: data.message });
      setForm(initialForm);
    } catch (err) {
      setStatus({ state: 'error', message: err.message || 'Unable to send your message right now.' });
    }
  };

  return (
    <section id="contact" className="section contact">
      <div className="container contact__grid">
        <Reveal variant="left" className="contact__info">
          <span className="eyebrow">Get In Touch</span>
          <h2>We&rsquo;d Love to Hear From You</h2>
          <p>Have a question about our spices, bulk orders, or distribution? Reach out anytime.</p>

          <ul className="contact__details">
            <li>
              <strong>Address</strong>
              <span>{brand.address}</span>
            </li>
            <li>
              <strong>Phone</strong>
              <a href={`tel:${brand.phone.replace(/\s/g, '')}`}>{brand.phone}</a>
            </li>
            <li>
              <strong>Email</strong>
              <a href={`mailto:${brand.email}`}>{brand.email}</a>
            </li>
          </ul>

          <div className="contact__social">
            <a href={brand.facebook} target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href={brand.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </Reveal>

        <Reveal variant="right" as="form" className="contact__form" onSubmit={handleSubmit} noValidate>
          <div className="form-row">
            <div className="form-field">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" type="text" required minLength={2} maxLength={100} value={form.name} onChange={handleChange} />
            </div>
            <div className="form-field">
              <label htmlFor="phone">Phone (optional)</label>
              <input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange} />
            </div>
          </div>

          <div className="form-field">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} />
          </div>

          <div className="form-field">
            <label htmlFor="subject">Subject</label>
            <input id="subject" name="subject" type="text" required minLength={2} maxLength={150} value={form.subject} onChange={handleChange} />
          </div>

          <div className="form-field">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" required minLength={10} maxLength={2000} rows={5} value={form.message} onChange={handleChange} />
          </div>

          <button type="submit" className="btn btn-primary" disabled={status.state === 'loading'}>
            {status.state === 'loading' ? 'Sending…' : 'Send Message'}
          </button>

          {status.state === 'success' && <p className="form-status form-status--success">{status.message}</p>}
          {status.state === 'error' && <p className="form-status form-status--error">{status.message}</p>}
        </Reveal>
      </div>
    </section>
  );
}
