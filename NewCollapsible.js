.accordion-container {
  display: flex; /* Use flexbox for horizontal layout */
  width: 100%; /* Full width */
  height: 100vh; /* Full viewport height */
  overflow: hidden; /* Hide overflow */
}

.header {
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: #333;
  color: #fff;
  cursor: pointer;
  white-space: nowrap; /* Prevent text wrapping */
}

.header span {
  margin-left: 10px;
}

.content {
  flex: 1; /* Flex-grow to fill space */
  transition: flex-basis 0.3s ease, opacity 0.3s ease; /* Smooth transition */
  overflow: hidden; /* Hide overflow content */
  display: flex;
  align-items: center;
  background-color: #f1f1f1;
  opacity: 0; /* Hidden by default */
}

.content-inner {
  padding: 20px;
}

.content.expanded {
  flex-basis: 100%; /* Full width when expanded */
  opacity: 1; /* Visible when expanded */
}

.content.collapsed {
  flex-basis: 0; /* Collapsed width */
  opacity: 0; /* Hidden when collapsed */
  pointer-events: none; /* Disable pointer events */
}

import React, { useState } from 'react';
import Collapsible from 'react-collapsible';
import './Accordion.css'; // Import CSS
import { FaChevronRight, FaChevronDown } from 'react-icons/fa'; // Import icons

const Accordion = () => {
  const [openSection, setOpenSection] = useState(null);

  const handleToggle = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="accordion-container">
      <Collapsible
        open={openSection === 1}
        onOpening={() => handleToggle(1)}
        onClosing={() => handleToggle(1)}
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
        onOpening={() => handleToggle(2)}
        onClosing={() => handleToggle(2)}
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
        onOpening={() => handleToggle(3)}
        onClosing={() => handleToggle(3)}
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
