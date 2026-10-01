import Reveal from '../components/Reveal';
import { usps } from '../data/siteData';
import './UspStrip.css';

export default function UspStrip() {
  return (
    <section className="usp-strip">
      <div className="container usp-strip__grid">
        {usps.map((item, index) => (
          <Reveal key={item.title} variant="scale" delay={index * 100} className="usp-strip__item">
            <img src={item.icon} alt="" width="40" height="40" aria-hidden="true" />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
