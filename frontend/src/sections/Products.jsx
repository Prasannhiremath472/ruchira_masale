import Reveal from '../components/Reveal';
import { products } from '../data/siteData';
import './Products.css';

export default function Products() {
  return (
    <section id="products" className="section products">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Our Bestsellers</span>
          <h2>Spices Loved Across Kolhapur</h2>
          <p>Handcrafted blends made with the same care and recipes we&rsquo;ve trusted since 1980.</p>
        </div>

        <div className="products__grid">
          {products.map((product, index) => (
            <Reveal key={product.id} delay={(index % 3) * 100} className="product-card">
              <div className="product-card__image">
                <img src={product.image} alt={product.name} loading="lazy" />
              </div>
              <div className="product-card__body">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <div className="product-card__footer">
                  <span className="product-card__price">{product.priceRange}</span>
                  <a href="#contact" className="product-card__cta">
                    Enquire
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
