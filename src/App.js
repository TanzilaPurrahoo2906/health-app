import { useRef, useState } from "react";
import Carousel from "./components/Carousel";
import Accordion from "./components/Accordion";
import NavBar from "./components/Navbar";
import carouselData from "./data/carousel.json";
import accordionData from "./data/accordion.json";
import "./styles/styles.scss";

function App() {
  const [expanded, setExpanded] = useState(accordionData.items.map(t => t.id));
  const accordionRefs = useRef({});

  const learnMoreOnDisease = (id) => {
    setExpanded(prev => (prev.includes(id) ? prev : [...prev, id]));
    setTimeout(() => {
      accordionRefs.current[id]?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const toggleAccordion = (id) => {
    setExpanded(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };

  return (
    <div className="main-container">
      <NavBar />
      <div className="app">
        <div className="top-container">
          <div className="text-content">
            <h1>Driven by a commitment to life</h1>
            <p>Everything we do at Kyowa Kirin is driven by our mission to improve health, ease suffering and prolong life. It’s a mission that has guided our development and expansion for over 70 years.</p>
            <p>As well as introducing and explaining the major products in our portfolio, this site contains a range of materials to support healthcare professionals. These free online medical resources include overviews of specific therapy areas, diagnostic materials and treatment guidelines.</p>
            <p>We hope you find them of value as you continue to support and treat the patients under your care.</p>
            <p>Simply register your details to gain full access to the site and all the information it contains.</p>
          </div>
          <div className="image-container">
            <img src="/assets/frame.png" alt="Frame" />
          </div>
        </div>

        <Carousel items={carouselData.items} onLearnMore={learnMoreOnDisease} />

        <div className="info-section">
          <div className="text-left">
            <h2 className="header">H2 Around 145,000 people live with (Disease Y) in the UK</h2>
            <p>This website is intended to help people understand (Disease Y) and improve awareness of the condition.</p>
          </div>
          <div className="image-right">
            <img src="/assets/image-space.png" alt="Space" />
          </div>
        </div>

        <h2 className="header">Therapy Areas</h2>
        <div className="accordion-section">
          <Accordion items={accordionData.items} expandedIds={expanded} toggle={toggleAccordion} refs={accordionRefs} />
        </div>
      </div>
    </div>
  );
}

export default App;
