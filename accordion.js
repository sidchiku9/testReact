import React, { useState } from 'react';
import './Accordion.css'; // Assuming you put the CSS in Accordion.css
import { FaChevronRight, FaChevronDown } from 'react-icons/fa'; // Importing icons

const Accordion = () => {
  const [activeSection, setActiveSection] = useState(null);

  const handleClick = (section) => {
    setActiveSection(section === activeSection ? null : section);
  };

  return (
    <div className="container">
      <div
        className={`accordion ${activeSection === 1 ? 'open' : activeSection ? 'collapsed' : ''}`}
        onClick={() => handleClick(1)}
      >
        <div className="header">
          {activeSection === 1 ? <FaChevronDown /> : <FaChevronRight />}
          <span>Section 1</span>
        </div>
        <div className="content">
          Content for Section 1
        </div>
      </div>
      <div
        className={`accordion ${activeSection === 2 ? 'open' : activeSection ? 'collapsed' : ''}`}
        onClick={() => handleClick(2)}
      >
        <div className="header">
          {activeSection === 2 ? <FaChevronDown /> : <FaChevronRight />}
          <span>Section 2</span>
        </div>
        <div className="content">
          Content for Section 2
        </div>
      </div>
      <div
        className={`accordion ${activeSection === 3 ? 'open' : activeSection ? 'collapsed' : ''}`}
        onClick={() => handleClick(3)}
      >
        <div className="header">
          {activeSection === 3 ? <FaChevronDown /> : <FaChevronRight />}
          <span>Section 3</span>
        </div>
        <div className="content">
          Content for Section 3
        </div>
      </div>
    </div>
  );
};

export default Accordion;
