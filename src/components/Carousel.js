import { useState } from "react";
import "../styles/Carousel.scss";

const Carousel = ({ items, onLearnMore  }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>
      <div className="carousel-header">
        <h2>FEATURED TOPICS</h2>
        <div className="carousel-arrows">
          <img src="/assets/arrow-carousel-left.png" alt="Left Arrow" className="arrow-icon"
            onClick={() => setActiveIndex((prevIndex) => prevIndex === 0 ? items.length - 1 : prevIndex - 1)} />
          <img src="/assets/arrow-carousel-right.png" alt="Right Arrow" className="arrow-icon"
            onClick={() => setActiveIndex((prevIndex) => prevIndex === items.length - 1 ? 0 : prevIndex + 1)} />
        </div>
      </div>

      <div className="carousel-cards">
        {items.map((card, index) => (
          <div key={index} className={`carousel-card ${activeIndex === index ? "active" : ""}`} onClick={() => setActiveIndex(index)}>
            <span className="card-category">
              <img src="/assets/icon-3.png" alt="Category" /> {card.category}
            </span>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
            <div className="learn-more"
              onClick={(e) => {
                e.stopPropagation();
                onLearnMore(card.id);
              }}>
              LEARN MORE
              <span className="arrow">
                <img src="/assets/arrow-right.png" alt="arrow right" className="arrow-icon-right" />
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="carousel-dots">
        {items.map((_, index) => (
          <span key={index} className={`dot ${activeIndex === index ? "active" : ""}`} onClick={() => setActiveIndex(index)}/>
        ))}
      </div>
    </div>
  );
};

export default Carousel;

