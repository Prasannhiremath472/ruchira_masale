import Reveal from '../components/Reveal';
import { stats } from '../data/siteData';
import './About.css';

export default function About() {
  return (
    <section id="about" className="about section">
      <div className="container about__grid">
        <Reveal variant="left" className="about__media">
          <img src="/images/hero/diwali.avif" alt="Ruchira Masale spice display" loading="lazy" />
        </Reveal>

        <Reveal variant="right" className="about__content">
          <span className="eyebrow">Our Story</span>
          <h2>45 Years of Authentic Kolhapuri Taste</h2>
          <p>
            Since 1980, Ruchira Masale has been bringing the bold, authentic flavors of Kolhapur to
            kitchens across Maharashtra. What began as a dedication to pure, unadulterated spices has
            grown into a trusted name &mdash; crafted from the finest ingredients, combining traditional
            recipes with modern processing techniques and hygienic automated packaging.
          </p>
          <p>
            Every blend is sourced from India&rsquo;s finest fields under rigorous quality control, so
            your meals get the richness of perfectly blended, natural spices that awaken the senses.
          </p>

          <div className="about__stats">
            {stats.map((stat) => (
              <div key={stat.label} className="about__stat">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
