import Reveal from '../components/Reveal';
import { categories } from '../data/siteData';
import './Categories.css';

export default function Categories() {
  return (
    <section id="categories" className="section section-alt categories">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">What We Offer</span>
          <h2>Explore Our Spice Categories</h2>
          <p>From everyday essentials to festive specials, there&rsquo;s a Ruchira blend for every occasion.</p>
        </div>

        <div className="categories__grid">
          {categories.map((category, index) => (
            <Reveal
              key={category.name}
              variant="scale"
              delay={(index % 4) * 80}
              as="a"
              href="#products"
              className="categories__card"
            >
              <span>{category.name}</span>
              {category.comingSoon && <small>Coming Soon</small>}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
