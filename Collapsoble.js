import React, { useState } from 'react';
import Collapsible from 'react-collapsible';
import './Accordion.css'; // Assuming you put the CSS in Accordion.css
import { FaChevronRight, FaChevronDown } from 'react-icons/fa'; // Importing icons

const Accordion = () => {
  const [openSection, setOpenSection] = useState(null);

  return (
    <div className="accordion-container">
      <Collapsible
        open={openSection === 1}
        onOpening={() => setOpenSection(1)}
        onClosing={() => setOpenSection(null)}
        transitionTime={300}
        trigger={
          <div className="header">
            {openSection === 1 ? <FaChevronDown /> : <FaChevronRight />}
            <span>Section 1</span>
          </div>
        }
        contentOuterClassName={`content ${openSection === 1 ? 'open' : ''}`}
      >
        <div className="content-inner">
          Content for Section 1
        </div>
      </Collapsible>
      <Collapsible
        open={openSection === 2}
        onOpening={() => setOpenSection(2)}
        onClosing={() => setOpenSection(null)}
        transitionTime={300}
        trigger={
          <div className="header">
            {openSection === 2 ? <FaChevronDown /> : <FaChevronRight />}
            <span>Section 2</span>
          </div>
        }
        contentOuterClassName={`content ${openSection === 2 ? 'open' : ''}`}
      >
        <div className="content-inner">
          Content for Section 2
        </div>
      </Collapsible>
      <Collapsible
        open={openSection === 3}
        onOpening={() => setOpenSection(3)}
        onClosing={() => setOpenSection(null)}
        transitionTime={300}
        trigger={
          <div className="header">
            {openSection === 3 ? <FaChevronDown /> : <FaChevronRight />}
            <span>Section 3</span>
          </div>
        }
        contentOuterClassName={`content ${openSection === 3 ? 'open' : ''}`}
      >
        <div className="content-inner">
          Content for Section 3
        </div>
      </Collapsible>
    </div>
  );
};

export default Accordion;


.accordion-container {
  display: flex;
  width: 100%;
  height: 100vh;
}

.header {
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: #333;
  color: #fff;
  cursor: pointer;
}

.header span {
  margin-left: 10px;
}

.content {
  flex: 1;
  transition: flex-basis 0.3s ease;
  overflow: hidden;
  display: flex;
  align-items: center;
  background-color: #f1f1f1;
}

.content-inner {
  padding: 20px;
}

.content.open {
  flex-basis: 80%;
}

.content:not(.open) {
  flex-basis: 0;
  opacity: 0;
  pointer-events: none;
}
