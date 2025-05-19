import "../styles/Accordion.scss";

const Accordion = ({ items, expandedIds, toggle, refs }) => {
  return (
    <div className="accordion">
      {items.map((item, index) => {
        const isExpanded = expandedIds.includes(item.id);
        const diseaseImageSrc = index === 0 ? "/assets/icon-1.png" : "/assets/icon-2.png";

        return (
          <div key={item.id} className="accordion-item" ref={(r) => (refs.current[item.id] = r)} >
            <button className="accordion-header" onClick={() => toggle(item.id)}>
              <span className="accordion-left-icon">
                <img src={diseaseImageSrc} alt="Disease icon"/>
              </span>
              {item.category}
              <span className="accordion-icon">
                <img src={isExpanded ? "/assets/arrow-up.png" : "/assets/arrow-down.png"}
                  alt={isExpanded ? "Collapse" : "Expand"} className="arrow-icon"/>
              </span>
            </button>

            {isExpanded && (
              <div id={`panel-${item.id}`} className="accordion-body">
                <div className="accordion-column first-column">
                  <h4 className="accordion-title">{item.title}</h4>
                  <p className="accordion-description"><strong>{item.description}</strong></p>
                </div>

                <div className="accordion-column second-column">
                  <div className="accordion-section">
                    <h5 className="accordion-heading-with-icon"> MEDICAL EDUCATION
                      <img src="/assets/arrow-right.png" alt="arrow right" className="arrow-icon-right" />
                    </h5>
                    <p>{item.accordion.medicalEducation}</p>
                  </div>
                  <div className="accordion-section">
                    <h5 className="accordion-heading-with-icon"> DISEASE PAGES
                      <img src="/assets/arrow-right.png" alt="arrow right" className="arrow-icon-right" />
                    </h5>
                    <p>{item.accordion.diseasePages}</p>
                  </div>
                </div>

                <div className="accordion-column third-column">
                  <div className="accordion-section">
                    <h5 className="accordion-heading-with-icon"> MEDICAL RESOURCES
                      <img src="/assets/arrow-right.png" alt="arrow right" className="arrow-icon-right" />
                    </h5>
                    <p>{item.accordion.medicalResources}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
