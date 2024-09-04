import React, { useState } from 'react';
import Collapsible from 'react-collapsible';
import './Accordion.css'; // Import CSS
import { FaChevronRight, FaChevronDown } from 'react-icons/fa'; // Import icons

const Accordion = () => {
  const [openSection, setOpenSection] = useState(null);

  // Toggle the state only when necessary
  const handleToggle = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="accordion-container">
      <Collapsible
        open={openSection === 1}
        onTriggerOpening={() => handleToggle(1)}
        onTriggerClosing={() => handleToggle(1)}
        transitionTime={300}
        trigger={
          <div className="header">
            {openSection === 1 ? <FaChevronDown /> : <FaChevronRight />}
            <span>Section 1</span>
          </div>
        }
        contentOuterClassName={`content ${openSection === 1 ? 'expanded' : 'collapsed'}`}
      >
        <div className="content-inner">
          Content for Section 1
        </div>
      </Collapsible>
      <Collapsible
        open={openSection === 2}
        onTriggerOpening={() => handleToggle(2)}
        onTriggerClosing={() => handleToggle(2)}
        transitionTime={300}
        trigger={
          <div className="header">
            {openSection === 2 ? <FaChevronDown /> : <FaChevronRight />}
            <span>Section 2</span>
          </div>
        }
        contentOuterClassName={`content ${openSection === 2 ? 'expanded' : 'collapsed'}`}
      >
        <div className="content-inner">
          Content for Section 2
        </div>
      </Collapsible>
      <Collapsible
        open={openSection === 3}
        onTriggerOpening={() => handleToggle(3)}
        onTriggerClosing={() => handleToggle(3)}
        transitionTime={300}
        trigger={
          <div className="header">
            {openSection === 3 ? <FaChevronDown /> : <FaChevronRight />}
            <span>Section 3</span>
          </div>
        }
        contentOuterClassName={`content ${openSection === 3 ? 'expanded' : 'collapsed'}`}
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
  overflow: hidden;
}

.header {
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: #333;
  color: #fff;
  cursor: pointer;
  white-space: nowrap;
  z-index: 1;
}

.header span {
  margin-left: 10px;
}

.content {
  flex: 1;
  transition: flex-basis 0.3s ease, opacity 0.3s ease;
  overflow: hidden;
  display: flex;
  align-items: center;
  background-color: #f1f1f1;
  opacity: 0;
}

.content-inner {
  padding: 20px;
}

.content.expanded {
  flex-basis: 100%;
  opacity: 1;
}

.content.collapsed {
  flex-basis: 0;
  opacity: 0;
  pointer-events: none;
}
