"use client";
import { useState } from "react";

const Accordion = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="faqs_item_box">
        <div className="heading" onClick={() => setIsOpen(!isOpen)}>
          <h3>{question}</h3>
          <i
            className={`fa-solid ${
              isOpen ? "fa-chevron-up" : "fa-chevron-down"
            } chevron-icon ${isOpen ? "open" : ""}`}
          ></i>
        </div>
        {isOpen && <div className="content">{answer}</div>}
      </div>
      {/*faqs_item_box*/}
    </>
  );
};

export default Accordion;
