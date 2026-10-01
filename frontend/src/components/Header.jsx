import { useEffect, useRef, useState } from 'react';
import { brand, navLinks } from '../data/siteData';
import './Header.css';

export default function Header() {
  const headerRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const node = headerRef.current;
    if (!node) return undefined;

    const updateHeight = () => {
      document.documentElement.style.setProperty('--mobile-nav-top', `${node.offsetHeight}px`);
    };

    updateHeight();
    const observer = new ResizeObserver(updateHeight);
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const handleLinkClick = () => setIsMenuOpen(false);

  return (
    <header ref={headerRef} className={`site-header ${isScrolled ? 'is-scrolled' : ''}`}>
      <div className="announcement-bar">
        Authentic Kolhapuri Spices, Crafted Since 1980 &middot; Call {brand.phone}
      </div>
      <div className="container site-header__inner">
        <a href="#home" className="site-header__logo" aria-label={`${brand.name} home`}>
          <img src="/images/logo.avif" alt={`${brand.name} logo`} width="48" height="48" />
          <span>{brand.name}</span>
        </a>

        <nav className="site-header__nav site-header__nav--desktop" aria-label="Primary">
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="#contact" className="btn btn-primary site-header__cta">
          Get in Touch
        </a>

        <button
          type="button"
          className="site-header__menu-btn"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={`mobile-nav ${isMenuOpen ? 'is-open' : ''}`}>
        <nav aria-label="Mobile">
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={handleLinkClick}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a href="#contact" className="btn btn-primary" onClick={handleLinkClick}>
          Get in Touch
        </a>
      </div>
    </header>
  );
}
