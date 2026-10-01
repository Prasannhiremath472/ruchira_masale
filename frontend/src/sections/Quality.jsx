import Reveal from '../components/Reveal';
import { qualityPoints } from '../data/siteData';
import './Quality.css';

export default function Quality() {
  return (
    <section id="quality" className="section section-alt quality">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Our Commitment</span>
          <h2>Quality You Can Taste in Every Pinch</h2>
        </div>

        <div className="quality__timeline">
          {qualityPoints.map((point, index) => (
            <Reveal
              key={point}
              variant={index % 2 === 0 ? 'left' : 'right'}
              className="quality__item"
            >
              <span className="quality__index">{String(index + 1).padStart(2, '0')}</span>
              <p>{point}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
