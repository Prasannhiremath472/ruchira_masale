import { brand } from '../data/siteData';
import './Hero.css';

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__bg" aria-hidden="true">
        <img src="/images/hero/main-10.jpg" alt="" />
      </div>
      <div className="hero__overlay" aria-hidden="true" />

      <div className="container hero__content">
        <span className="hero__eyebrow">Since {brand.since} &middot; Kolhapur, Maharashtra</span>
        <h1 className="hero__title">
          Authentic Kolhapuri Flavors, <span>Crafted with Tradition</span>
        </h1>
        <p className="hero__subtitle">{brand.tagline}</p>
        <div className="hero__actions">
          <a href="#products" className="btn btn-primary">
            Explore Our Spices
          </a>
          <a href="#about" className="btn btn-outline btn-outline--light">
            Our Story
          </a>
        </div>
      </div>

      <a href="#about" className="hero__scroll-cue" aria-label="Scroll to learn more">
        <span />
      </a>
    </section>
  );
}
