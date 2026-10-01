import { brand, navLinks } from '../data/siteData';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div className="site-footer__brand">
          <div className="site-footer__logo">
            <img src="/images/logo.avif" alt={`${brand.name} logo`} width="40" height="40" />
            <span>{brand.name}</span>
          </div>
          <p>{brand.tagline}</p>
        </div>

        <div className="site-footer__col">
          <h4>Navigate</h4>
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="site-footer__col">
          <h4>Contact</h4>
          <ul>
            <li>{brand.address}</li>
            <li><a href={`tel:${brand.phone.replace(/\s/g, '')}`}>{brand.phone}</a></li>
            <li><a href={`mailto:${brand.email}`}>{brand.email}</a></li>
          </ul>
        </div>

        <div className="site-footer__col">
          <h4>Follow Us</h4>
          <ul>
            <li><a href={brand.facebook} target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href={brand.instagram} target="_blank" rel="noopener noreferrer">Instagram</a></li>
          </ul>
        </div>
      </div>

      <div className="site-footer__bottom">
        <div className="container">
          <p>&copy; {year} {brand.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
